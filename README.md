# For Sophia - A Constellation

A Vite app backed by Supabase. The public experience reads one JSON record from Postgres, while photos and videos are uploaded to Supabase Storage.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your Supabase values:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
VITE_SUPABASE_MEDIA_BUCKET=constellation-media
VITE_CONSTELLATION_PAGE_ID=sophia
VITE_SUPABASE_REDIRECT_TO=http://localhost:5173/admin

# Server-only, for the email test endpoint.
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
SES_FROM_EMAIL=verified-sender@example.com
SES_FROM_NAME=A little constellation
EMAIL_PUBLIC_PAGE_URL=https://your-domain.com
EMAIL_ADMIN_EMAILS=you@example.com
```

3. In Supabase, run `supabase/schema.sql` in the SQL editor.

4. Start the app:

```bash
npm run dev
```

Open `/admin` to show the admin dashboard. The main experience does not show an Admin button.

## Supabase Model

- Table: `public.constellation_pages`
- Page key: `VITE_CONSTELLATION_PAGE_ID`
- Storage bucket: `VITE_SUPABASE_MEDIA_BUCKET`
- Public users can read the constellation.
- Only signed-in Supabase users can save page data or upload media.
- Up to three background songs are uploaded from `/admin`, stored in Supabase Storage, and saved in the page JSON with default volume. Once the visitor presses play, the songs rotate through the whole experience.
- Star hover and click sound effects are uploaded from the `/admin` media library.
- Each memory can have its own photo or video. Admin edits replace the media for that memory.
- Hidden moments appear as small `SC` stamp buttons inside selected memory modals. Opening one shows a small photo/caption popup.
- Once every hidden moment is found, an `Open album` button appears so she can browse all memories while the background music keeps playing.
- The letter is always available from the constellation header and supports three inline photos.
- The admin dashboard can send a test invitation email through `/api/send-test-email` when you are signed in. The endpoint verifies the Supabase session before using SES.

The admin panel uses Supabase email/password auth with magic-link fallback. Add yourself as a user through Supabase Auth, then sign in from `/admin` to save changes online.

## Email Sending

The SES keys must be server-only environment variables, not `VITE_*` variables. `SES_FROM_EMAIL` must be a verified SES sender address or verified domain address. You can change the visible display name, for example `A little constellation`, but email clients will still show the real sender address because SES cannot spoof or fully hide it.

Set `EMAIL_ADMIN_EMAILS` to the Supabase Auth email addresses allowed to send test emails, separated by commas.

During `npm run dev`, `vite.config.js` serves the same `/api/send-test-email` endpoint locally so the admin test button can be used before deployment.

## Deployment

Deploy as a Vite static app and set the same `VITE_*` environment variables in your hosting provider. For the deployed site, set `VITE_SUPABASE_REDIRECT_TO` to your production admin URL, for example:

```bash
VITE_SUPABASE_REDIRECT_TO=https://your-domain.com/admin
```

Also add that URL in Supabase Auth redirect URL settings.

## Notes

The admin dashboard is available at `/admin`. That is only UI hiding; real protection comes from Supabase Auth and the RLS policies in `supabase/schema.sql`.

Use MP3 for music and MP4 or WebM for videos for the best browser playback.
