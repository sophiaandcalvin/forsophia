import crypto from "node:crypto";
import https from "node:https";

const MAX_BODY_SIZE = 12_000;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Use POST to send a test email." });
    return;
  }

  try {
    const user = await requireSupabaseUser(request);
    const body = await readJsonBody(request);
    const to = normalizeEmail(body.to);
    const pageUrl = normalizePageUrl(body.pageUrl || process.env.EMAIL_PUBLIC_PAGE_URL, request);
    const fromEmail = normalizeEmail(process.env.SES_FROM_EMAIL);
    const fromName = sanitizeHeader(body.fromName || process.env.SES_FROM_NAME || "A little constellation");
    const replyTo = normalizeOptionalEmail(process.env.SES_REPLY_TO_EMAIL);

    if (!to) {
      throw httpError(400, "Enter a valid test recipient email.");
    }

    if (!fromEmail) {
      throw httpError(500, "Set SES_FROM_EMAIL to a verified SES sender address.");
    }

    const subject = "A constellation for you";
    const email = buildEmail({ pageUrl });
    const result = await sendSesEmail({
      to,
      from: formatAddress(fromName, fromEmail),
      replyTo,
      subject,
      html: email.html,
      text: email.text,
    });

    response.status(200).json({
      message: `Sent through SES as ${fromName || fromEmail}.`,
      messageId: result.messageId,
      user: user.email,
    });
  } catch (error) {
    const status = Number(error.statusCode || 500);
    response.status(status).json({ error: error.message || "Email send failed." });
  }
}

async function requireSupabaseUser(request) {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  const token = getBearerToken(request);

  if (!token) {
    throw httpError(401, "Sign in to admin before sending email.");
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    throw httpError(500, "Set SUPABASE_URL and SUPABASE_ANON_KEY, or reuse the VITE_SUPABASE_* values.");
  }

  const authResponse = await fetch(`${supabaseUrl.replace(/\/$/, "")}/auth/v1/user`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "apikey": supabaseAnonKey,
    },
  });

  if (!authResponse.ok) {
    throw httpError(401, "Your admin session could not be verified.");
  }

  const user = await authResponse.json();
  const allowedEmails = parseEmailList(process.env.EMAIL_ADMIN_EMAILS);
  if (allowedEmails.length && !allowedEmails.includes(String(user.email || "").toLowerCase())) {
    throw httpError(403, "This signed-in user is not allowed to send email.");
  }

  return user;
}

function getBearerToken(request) {
  const header = request.headers.authorization || request.headers.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match?.[1] || "";
}

async function readJsonBody(request) {
  if (request.body && typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      throw httpError(400, "Send JSON with to, pageUrl, and optional fromName.");
    }
  }

  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  const raw = await new Promise((resolve, reject) => {
    let data = "";
    request.on("data", (chunk) => {
      data += chunk;
      if (data.length > MAX_BODY_SIZE) {
        reject(httpError(413, "Email request is too large."));
      }
    });
    request.on("end", () => resolve(data));
    request.on("error", reject);
  });

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw httpError(400, "Send JSON with to, pageUrl, and optional fromName.");
  }
}

function buildEmail({ pageUrl }) {
  const safeUrl = escapeHtml(pageUrl);
  const html = `<!doctype html>
<html>
  <body style="margin:0;background:#070b17;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;color:#243042;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background:#fff6ea;border-radius:12px;overflow:hidden;border:1px solid #ead8c1;">
      <tr>
        <td style="padding:34px 30px 12px;text-align:center;background:linear-gradient(145deg,#fff6ea,#f7edf4);">
          <div style="font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#8b6f35;">A constellation of little moments</div>
          <h1 style="margin:14px 0 0;font-size:34px;line-height:1.15;font-weight:400;color:#243042;">For Sophia</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:22px 30px 8px;font-size:17px;line-height:1.75;">
          <p style="margin:0 0 16px;">Sophia,</p>
          <p style="margin:0 0 16px;">I made something quiet for you. It is not a question, and it does not ask anything from you.</p>
          <p style="margin:0 0 16px;">It is just a small place for memories, softness, and the truth I know more clearly now: you are the one my heart keeps choosing.</p>
          <p style="margin:0;">No pressure. No need to answer. I only wanted this to reach you gently.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 30px 34px;text-align:center;">
          <a href="${safeUrl}" style="display:inline-block;background:#f6a6ba;color:#22142a;text-decoration:none;border-radius:8px;padding:14px 22px;font-family:Arial,sans-serif;font-weight:800;">Open the constellation</a>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "Sophia,",
    "",
    "I made something quiet for you. It is not a question, and it does not ask anything from you.",
    "",
    "It is just a small place for memories, softness, and the truth I know more clearly now: you are the one my heart keeps choosing.",
    "",
    "No pressure. No need to answer. I only wanted this to reach you gently.",
    "",
    `Open the constellation: ${pageUrl}`,
  ].join("\n");

  return { html, text };
}

async function sendSesEmail({ to, from, replyTo, subject, html, text }) {
  const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1";
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const sessionToken = process.env.AWS_SESSION_TOKEN;

  if (!accessKeyId || !secretAccessKey) {
    throw httpError(500, "Set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY for SES.");
  }

  const payload = new URLSearchParams({
    Action: "SendEmail",
    Version: "2010-12-01",
    Source: from,
    "Destination.ToAddresses.member.1": to,
    "Message.Subject.Charset": "UTF-8",
    "Message.Subject.Data": subject,
    "Message.Body.Html.Charset": "UTF-8",
    "Message.Body.Html.Data": html,
    "Message.Body.Text.Charset": "UTF-8",
    "Message.Body.Text.Data": text,
  });

  if (replyTo) {
    payload.set("ReplyToAddresses.member.1", replyTo);
  }

  const payloadString = payload.toString();
  const host = `email.${region}.amazonaws.com`;
  const amzDate = getAmzDate();
  const dateStamp = amzDate.slice(0, 8);
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
    "host": host,
    "x-amz-date": amzDate,
  };

  if (sessionToken) {
    headers["x-amz-security-token"] = sessionToken;
  }

  const signedHeaders = Object.keys(headers).sort().join(";");
  const canonicalHeaders = Object.keys(headers)
    .sort()
    .map((key) => `${key}:${headers[key]}\n`)
    .join("");
  const canonicalRequest = [
    "POST",
    "/",
    "",
    canonicalHeaders,
    signedHeaders,
    hash(payloadString),
  ].join("\n");
  const credentialScope = `${dateStamp}/${region}/ses/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    hash(canonicalRequest),
  ].join("\n");
  const signingKey = getSignatureKey(secretAccessKey, dateStamp, region, "ses");
  const signature = hmac(signingKey, stringToSign, "hex");

  headers.authorization = [
    `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}`,
    `SignedHeaders=${signedHeaders}`,
    `Signature=${signature}`,
  ].join(", ");

  const sesResponse = await requestHttps({
    hostname: host,
    path: "/",
    method: "POST",
    headers: {
      ...headers,
      "content-length": Buffer.byteLength(payloadString),
    },
    body: payloadString,
  });

  if (sesResponse.statusCode < 200 || sesResponse.statusCode >= 300) {
    throw httpError(sesResponse.statusCode, extractXmlMessage(sesResponse.body) || "SES rejected the email.");
  }

  return {
    messageId: extractXmlValue(sesResponse.body, "MessageId"),
  };
}

function requestHttps({ body, ...options }) {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      let data = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        resolve({ statusCode: response.statusCode || 500, body: data });
      });
    });
    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

function getAmzDate() {
  return new Date().toISOString().replace(/[:-]|\.\d{3}/g, "");
}

function getSignatureKey(secretAccessKey, dateStamp, region, service) {
  const kDate = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, "aws4_request");
}

function hmac(key, data, encoding) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest(encoding);
}

function hash(data) {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function normalizeEmail(value) {
  const email = sanitizeHeader(value || "").trim();
  return /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? email : "";
}

function normalizeOptionalEmail(value) {
  return value ? normalizeEmail(value) : "";
}

function parseEmailList(value = "") {
  return value
    .split(",")
    .map((item) => normalizeEmail(item).toLowerCase())
    .filter(Boolean);
}

function normalizePageUrl(value, request) {
  const fallback = `${request.headers["x-forwarded-proto"] || "https"}://${request.headers.host || ""}`;
  try {
    const url = new URL(value || fallback);
    if (!["http:", "https:"].includes(url.protocol)) {
      return fallback;
    }
    return url.toString();
  } catch {
    return fallback;
  }
}

function formatAddress(name, email) {
  const displayName = sanitizeHeader(name).replace(/\\/g, "").replace(/"/g, "'");
  return displayName ? `"${displayName}" <${email}>` : email;
}

function sanitizeHeader(value = "") {
  return String(value).replace(/[\r\n]/g, " ").trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractXmlMessage(xml) {
  return extractXmlValue(xml, "Message") || extractXmlValue(xml, "message");
}

function extractXmlValue(xml, tag) {
  const match = String(xml).match(new RegExp(`<${tag}>([^<]+)</${tag}>`));
  return match ? match[1] : "";
}

function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}
