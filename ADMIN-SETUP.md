# Portfolio admin setup

Open `/admin`. The owner can edit profile/contact details, the homepage bio, research interests, biography, research, projects, publications, education, teaching, skills, awards, navigation and academic references. Project/research entries include pipeline images and additional image galleries. Add, remove and reorder list entries. Save publishes the current draft. Export/import provides a portable content backup. Structural website code remains in this repository.

## Connected portfolio environment

- Vercel project: `assassin318554s-projects/nahin`.
- Live admin: `https://www.nahin.com.bd/admin`. The apex domain redirects to `www`, which is also the configured production request origin.
- Database: `nahin-portfolio-db`, Neon Free, Singapore, provisioned through Vercel Marketplace. Both admin tables are initialized.
- Media: `nahin-portfolio-media`, public Vercel Blob, Mumbai, connected to this project.
- Production credentials are configured in Vercel. The owner's local copy is in Git-ignored `.env.local`; no credentials belong in `.env.example`.
- Current portfolio content is saved in the database. Edit published information through the admin; database content now takes priority over bundled defaults in `lib/data.ts`.
- Verified: live login, persisted content across promotion, upload/list/delete, 21 public pages and all 12 manually installed covers. Temporary test uploads and verification access were removed.
- `npm run setup:admin-storage` safely verifies/creates the two tables when setting up another environment. It preserves existing content.

## Local use

Use `npm run dev` while editing source files: saved changes to `lib/data.ts`
reload automatically. `npm start` serves the last `npm run build` output and
does not watch source files. Rebuild and restart for production source changes.
If content has been saved through the admin, that saved snapshot takes priority
over the bundled defaults in `data.ts`; edit it through the admin. With no saved
snapshot, `data.ts` supplies the content. Project URL/cover identities are matched
by repository rather than list position, so removing a project is safe.

1. Copy `.env.example` to `.env.local`.
2. Set `ADMIN_USERNAME`, your own `ADMIN_PASSWORD` (at least 8 characters), and a random `ADMIN_SESSION_SECRET` of at least 32 characters. Do not commit credentials.
3. Generate a session secret in your terminal: `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.
4. Set `APP_ORIGIN=http://localhost:3000` and restart `npm run dev`.
5. Open `http://localhost:3000/admin` and sign in. With no database configured, local content saves atomically to `.portfolio/content.json`; uploads go to `public/uploads/`. These paths are ignored by Git. Back them up if using local storage.

Local storage is intended for one local Node process. It is disabled on Vercel, whose filesystem is ephemeral. Production requires the dedicated cloud services below.

## Vercel production

1. In the portfolio Vercel project, add a **separate Neon PostgreSQL database** through Storage/Marketplace. Copy its pooled connection string to `DATABASE_URL` for this portfolio. Do not reuse Diganta or nahin-video resources.
2. With the portfolio's `DATABASE_URL` in `.env.local`, run `npm run setup:admin-storage`, or run `scripts/admin-schema.sql` in the database SQL editor. This creates only `portfolio_content` and `portfolio_login_limits`; it does not alter any other application's tables. The command preserves existing content and verifies both tables.
3. Create a **public Vercel Blob store** for this portfolio and attach it to the project. Its token must be available as `BLOB_READ_WRITE_TOKEN`. Files uploaded to this library are public, so upload only documents and images meant for the public portfolio.
4. Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and `APP_ORIGIN` (the exact `https://your-domain` origin, without a trailing slash) in Vercel environment settings. Keep all variables server-only: no `NEXT_PUBLIC_` prefix. Use a separate configuration for previews if enabling admin there.
5. Deploy/redeploy the project using Node.js 22 or newer. Open `/admin`, sign in and save one harmless edit. Verify it survives a new request and redeploy. Upload a test image and verify its public URL, then remove the reference, save, and delete the unused file.

Cloud account resources and credentials are not bundled. Until they are configured, the public portfolio serves its bundled content; the admin setup screen explains what is missing. A database outage never reports a successful save.

Official provider instructions: [Neon driver](https://neon.com/docs/serverless/serverless-driver), [Vercel server uploads](https://vercel.com/docs/vercel-blob/server-upload).

## Content and file management

- Use **Research** and **Projects** for details, descriptions, technology lists, cover images, working-pipeline image and gallery. Choose unique lowercase hyphenated slugs; slugs become page URLs.
- Upload from an image/PDF field or select an existing library file. Click **Save changes** to publish the reference. Clear a field to remove the image; use Remove for a list entry.
- Supported uploads: PNG, JPG, WebP and PDF up to 4 MB each. SVG is intentionally reserved for bundled pipeline diagrams. Uploaded files receive unique names, so replacements do not overwrite old assets.
- Media library deletion is permanent and only applies to files uploaded through this admin. In-use files cannot be deleted: first remove references, save, then delete. Bundled source assets remain in Git.
- **Advanced / import** exports the current draft as JSON. Import validates the complete structure, URL schemes and slugs before accepting a draft. Restore an earlier export by importing and saving it.
- A revision conflict stops stale tabs overwriting newer changes. Export the draft before reloading to merge changes.
- Sessions last eight hours, use HttpOnly/SameSite cookies and Secure cookies in production. Changing the password or session secret invalidates existing sessions. Sign out on shared computers.
- Ten login attempts are allowed in a rolling 15-minute window (database-backed in production). This applies globally to this single-owner panel; wait 15 minutes after a lockout.

## Pipeline sources

`scripts/create-pipelines.mjs` creates 18 standalone SVG workflow illustrations. Research diagrams follow the supplied portfolio descriptions. Diganta's architecture was checked against `F:/Diganta/README.md`, `backend/README.md`, `frontend/README.md`, and `mobile_app/README.md` without modifying that project or reading its secrets. Other diagrams are simplified overviews of the recorded technology/functionality, not measured execution traces or benchmark claims. Replace/expand them from the admin if implementation details change.

The approved observatory background is implemented in dark mode. Light mode uses a soft teal palette. Desktop sections are available directly in the navbar; tablet/mobile sections are inside the three-dot menu.
