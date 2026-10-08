# Nahin Intesher — Academic Portfolio

A Next.js portfolio with light/dark themes, academic content, individual research pages, and individual project pages.

## Run locally

Node.js 20 or later is recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

## Content and assets

- `lib/data.ts`: biography, education, teaching, research, project descriptions, skills, awards, links and reference.
- `lib/details.ts`: concise card text, detail-page slugs, research tools/methods and project cover mappings.
- `app/research/[slug]/page.tsx`: full research descriptions, areas, methods and technologies/frameworks.
- `app/projects/[slug]/page.tsx`: full project description, technologies, period and repository/demo links.
- `public/covers/`: 13 individually AI-generated project cover images, optimized as local WebP assets. These are illustrative cover artwork, not screenshots captured from the running project applications.
- `public/cv.pdf`: CV download.
- `public/cvimage.jpg`: portrait.

Research and project detail routes are generated statically. Adding a record also requires adding its identity/slug and cover mapping in `lib/details.ts`.

## Typography and styling

Newsreader is used for all headings, IBM Plex Mono for restrained utility labels, and Nimbus Sans for detailed paragraphs and interface text. All fonts are bundled locally with their licenses. The font families are self-hosted and do not require a font-service connection.

`app/studio.css` provides the original studio design. `app/refinements.css` provides the larger typography, static original-color square portrait, featured research card, detail pages, reference highlight and grouped awards.

The original project set is retained. SIDAS is removed. Research interests are Human-Computer Interaction, Computer Vision and Quantum Machine Learning.

The contact form retains the original setup. Its existing service configuration is in `components/ContactForm.tsx`; change it to your own endpoint if needed.

## Previews

The `previews/` directory contains verified desktop, mobile, dark theme and key page screenshots of this revision.

## Latest revision

The homepage contains the introduction, Connecting Perspectives and Complete Picture sections. The selected research, featured projects and teaching overview sections were removed from the homepage; their dedicated pages and content remain. Bridging the Gap spans both columns of the research grid, followed by paired cards on desktop and a single-column mobile layout. Page-heading subtitles are omitted.

## Cover artwork

All 13 covers were generated individually with the built-in image generation tool, then optimized as WebP for the website. The prompt direction was a professional landscape interface concept for the named project, an ivory and restrained green palette, accurate project purpose, minimal secondary text, and no invented metrics, credentials or marketing claims. DeepShield uses video and face analysis; NutriSight food recognition; DiscoverYou talent and creative content; Jiggasha quizzes; Mini Game Master two-player games; CV Banao a CV builder; WearQo a clothing storefront; Diganta coaching; Nahin Portfolio academic pages; Start To Do tasks; Abohawa weather; Simple Calculator arithmetic; Unit Converter unit conversions. These are concept illustrations, not captured screenshots. Source assets are in `public/covers/`.
