# Nahin Intesher Academic Portfolio

A Next.js academic portfolio with responsive light/dark themes and an authenticated content-management workspace.

## Run locally

Use Node.js 22.11 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and `npm start`.

## Content and administration

- `/admin`: edit portfolio content, project/research details, images, PDF files and navigation.
- `lib/data.ts` and `lib/details.ts`: bundled defaults. Saved admin content in PostgreSQL takes priority.
- `ADMIN-SETUP.md`: local credentials, Vercel Marketplace Neon database, Vercel Blob and deployment setup.
- `npm run setup:admin-storage`: initialize or verify the two admin tables without replacing existing content.
- Private environment files, local backups and `.vercel` metadata are excluded from Git.

Research and project detail pages render dynamically from saved content. Add or reorder entries through the admin. The research slug `document` is reserved for the PDF viewer.

## Public assets

- `public/covers/`: 12 active JPG project covers. Most are interface mockups; Diganta uses its homepage image.
- `public/pipelines/`: 17 project and research workflow diagrams. Regenerate with `node scripts/create-pipelines.mjs` when needed.
- `public/cv.pdf`: CV, previewed at `/cv`.
- `public/research.pdf`: research document, previewed at `/research/document` with download and open options. Links are also available from `/research`.
- `public/resume.pdf`: retained document.
- `public/cvimage.jpg`: portrait.
- `public/backgrounds/observatory.png`: reduced-motion background fallback.

## Typography and styling

Baloo Da 2 is used for interface and sans text, Newsreader for serif headings and IBM Plex Mono for utility labels. Active fonts and their licenses are bundled locally.

The imported stylesheets in `app/layout.tsx` form the public theme. `app/admin-studio.css` styles the admin workspace and sign-in screen. These active stylesheets should not be removed as old design files.

## Checks

```bash
npm run typecheck
npm test
npm run build
```
