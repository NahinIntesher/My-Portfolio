# Validation

- Production build and TypeScript checks passed (Next.js 14.2.35).
- All 28 page routes loaded: 10 main pages, 5 research detail pages and 13 project detail pages.
- Responsive checks at 1440, 768, 390 and 320 pixels passed without horizontal overflow.
- Cover images loaded correctly; no browser runtime errors were observed.
- Research/project card navigation, project category filters and search passed.
- Light/dark mode switching and saved-theme persistence passed.
- Navigation menu, CV download and invalid-detail-route 404 checks passed.
- SIDAS was absent from rendered website content.
- Homepage sidebar, square portrait, original photo colors, absence of portrait hover effects, removed homepage sections and page subtitles were checked.
- Bridging the Gap spans the desktop research grid; the remaining four research cards are paired below it.
- All 13 generated WebP covers loaded and were visually reviewed.

Existing content was retained except the explicitly requested SIDAS removal and research-interest update. New UI cover artwork is labeled as a concept illustration.


## 21 November 2026 - restored-layout refinements and owner admin

- Kept the restored original page layout; added charcoal dark theme, green accents, upright typography, circular portrait, Nahin navbar brand and compact accessible theme switch.
- Checked the homepage and navbar at 320px, 390px and desktop widths. No horizontal overflow observed. Verified light/dark switching, mobile navigation, icon labels and zero computed italic text.
- Added 18 full-size SVG workflow diagrams across all 13 project and 5 research detail pages. Updated Diganta using its separate source repository without modifying it or using its credentials.
- Owner content editor supports edits, collection additions/removals/reordering, image/PDF uploads, media deletion, JSON draft export/import and revision conflict checks.
- Final `npm run build` and `npm run typecheck` passed on Next.js 15.5.29. Six unit tests passed. Production dependency audit: zero vulnerabilities.
- Isolated authenticated integration checks passed: origin rejection, login, protected routes, session cookie flags, persisted edits, stale-revision rejection, unsafe URL rejection, file upload, in-use-file deletion guard, unused-file deletion, SVG upload rejection and empty-list rendering.
- Browser-verified the actual admin workspace with disposable local credentials, including mobile navigation, dirty draft state, accessible button names, one main landmark, section scroll reset, and sign-out. Temporary server, credentials and content were removed after verification.
- All 29 public pages/detail routes returned HTTP 200 on the final production server. Real `/admin` redirects to `/admin/login` when not configured.
- Real owner credentials and dedicated Vercel Neon/Blob resources are not configured. No claim of cloud login, cloud persistence or deployment verification is made. Follow ADMIN-SETUP.md.
- Space/particle background reference deliberately remains unimplemented, as requested.


## Approved teal observatory theme and navigation

- Implemented the approved background asset in dark mode and applied a coordinated teal palette across public and admin surfaces. Light mode uses soft teal/white surfaces with dark teal text and actions.
- Desktop navbar exposes all nine sections directly. The three-dot menu is shown below 1200px; the homepage index list was removed. Resizing an open mobile/tablet menu to desktop closes it and restores body scrolling.
- Production build and TypeScript checks passed. Browser checks at 1280px, 1024px, 390px and 320px confirmed the expected navigation, all nine menu links, theme switching, and no horizontal overflow.
- Captured previews/teal-observatory-dark.jpg, previews/teal-observatory-light.jpg, previews/teal-tablet-menu.jpg and previews/teal-mobile-dark.jpg.


## Live background animation

- Added a lightweight canvas layer: drifting/twinkling particles in both themes and slow orbital highlights in dark mode. Decorative only, with pointer events disabled and no layout movement.
- Drawing is capped at 30 fps with 100 particles on desktop and 38 on mobile. Device pixel ratio is capped at 1.5. Hidden tabs pause rendering; prefers-reduced-motion disables motion. Admin routes do not mount the animation.
- TypeScript and production build passed. Browser verification confirmed changing rendered frames, correct mobile canvas sizing, no horizontal overflow at 390px, all nine menu links, working theme switching and no animation layer on the admin login page.
- Screenshot: previews/live-background-desktop.jpg. The existing observatory artwork and page content remain intact.


## Animation visibility and navigation/readability fixes

- Increased particle speed and opacity so movement is apparent, with 110 desktop / 58 mobile particles. Orbital highlights now run at all viewport sizes in both themes, rather than desktop dark mode only. Canvas resolution is bounded for large displays. Reduced-motion and hidden-tab handling remain supported.
- Replaced the public three-dot menu with a three-bar hamburger. All nine section names remain available in the menu. CV navigation/hero actions are text-only, with the CV label visible on mobile.
- Added a fully opaque, padded, bordered reading panel to the About biography in both themes.
- TypeScript and production build passed. Browser verified zero CV icons, the hamburger icon, all nine menu links, changing mobile animation frames, opaque About panel colors in both themes, and no horizontal overflow at 320px / 390px / desktop.
- Screenshots: previews/about-readable-background.jpg and previews/hamburger-mobile-menu.jpg.


## Rotating planet, neutral themes and side drawer

- Replaced the normal-mode static planet bitmap with a procedural 3D point-cloud sphere. Surface points rotate around the Y axis; three textured dust bands orbit independently with different speeds/directions, front/back occlusion, depth projection and two orbiting satellites. Desktop uses 3,900 sphere points and 3,600 ring points; mobile uses 1,500 sphere points and 1,500 ring points. Reduced-motion keeps the static approved artwork.
- Restored a single round Sun/Moon theme button. Every click toggles the saved theme. Added a right-side full-height mobile/tablet menu drawer containing all nine section names, with backdrop dismissal and the existing focus trap.
- Added neutral-theme.css: dark page #090a0b, dark panels #141617, off-white text; light page #f7f6f2, off-white panels, black text. Teal is limited to selected backgrounds, actions and decorative graphics. The About biography panel remains opaque.
- Final production build and TypeScript checks passed. Browser verified the absence of a static planet bitmap in normal motion, changing desktop/mobile rendered frames, all nine sidebar links, repeated theme toggling, exact sidebar right-edge alignment, About panel contrast and no overflow at 320px. Dark research, teaching, projects and publication text palettes were checked; the selected project filter was also normalized.
- Final screenshots: previews/rotating-globe-dark.jpg, previews/neutral-light-theme.jpg, previews/side-menu-dark.jpg and previews/side-menu-light.jpg.


## Light-mode globe clarity

- Strengthened light-mode surface dots, introduced a mint-gray shaded sphere with a defined rim, and added thin continuous orbital tracks behind the moving dust bands. Light-mode front/back opacity now makes rotation and depth easier to distinguish.
- Added a light-mode canvas fade over the left text area, with a separate mobile fade, so darker rings do not cross the reading column at full opacity.
- Production build passed. Desktop/mobile browser checks confirmed the theme-specific masks, no horizontal overflow, and changing rendered animation frames. Screenshot: previews/light-globe-clearer.jpg.


## Baloo Da 2 sans typography

- Replaced the shared --font-sans local font with Baloo Da 2 variable normal, weights 400-800, sourced from the official Google Fonts repository. Included BalooDa2-OFL.txt beside the font.
- Existing sans consumers now use Baloo Da 2, including public body/navigation/actions/forms and the owner workspace. Serif headings and monospace metadata retain their existing font variables.
- Production build passed. Browser computed styles confirmed Baloo Da 2 for body, navigation, primary actions and mobile drawer links. Desktop navigation fits without touching the controls, and 320px/390px layouts have no horizontal overflow.
- Screenshots: previews/baloo-da-2-desktop.jpg and previews/baloo-da-2-mobile.jpg.


## Larger responsive Baloo copy and punctuation cleanup

- Added a fluid Baloo Da 2 copy/control scale: 18px mobile prose and 19px at the checked 1200px desktop width. Small-phone hero actions become equal full-width rows.
- Removed U+2014 em dashes from runtime UI content/metadata, preserving ordinary hyphens. Updated award-rank extraction so punctuation removal does not expand or break badges. Updated the weather cover placeholder in both SVG and rendered WebP.
- Build and six existing tests passed. Checked all 29 public pages: HTTP 200, no U+2014, and Runner-up still contains its short hyphen. Browser checks confirmed no overflow at 320px, 390px, 820px and 1200px across representative pages; 320px hero buttons both measure 273px wide.
