import { defineConfig, loadEnv } from "vite";
import sendTestEmail from "./api/send-test-email.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.entries(env).forEach(([key, value]) => {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  });

  return {
    plugins: [
      {
        name: "local-email-api",
        configureServer(server) {
          server.middlewares.use("/api/send-test-email", async (request, response) => {
            const wrappedResponse = {
              setHeader(name, value) {
                response.setHeader(name, value);
                return wrappedResponse;
              },
              status(code) {
                response.statusCode = code;
                return wrappedResponse;
              },
              json(payload) {
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(payload));
              },
            };

            try {
              await sendTestEmail(request, wrappedResponse);
            } catch (error) {
              response.statusCode = 500;
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify({ error: error.message || "Local email endpoint failed." }));
            }
          });
        },
      },
    ],
  };
});
