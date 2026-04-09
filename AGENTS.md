# AGENTS.md

## Project Shape
- Single-page static site: markup in `index.html`, with `style.css` and `script.js` in repo root.
- No Node/Vite/React build step.

## Local Preview
- Serve the repo root with any static server (example: `python -m http.server`) so anchor navigation behaves like production.

## Styling
- Tailwind is loaded via CDN in `index.html` (do not add Tailwind/PostCSS build tooling back unless explicitly requested).
- Fonts are loaded from Google Fonts (see `<head>` in `index.html`).
- Small custom CSS is in `style.css`.

## Navbar Behavior
- Navbar links are anchors (`#home`, `#about`, `#contact`) and use JS scroll-spy to apply the active opacity class.
- Mobile menu open/close state is handled in `script.js`.

## Contact Form
- Uses EmailJS client-side from CDN; service/template/public key are hardcoded in `index.html`.
- Toast notifications are implemented locally in `script.js` (no external toast library).

## Deployment (GitHub Pages)
- `.github/workflows/pages.yml` deploys the repository root as-is (no build) on push to `main`.
- Root `CNAME` is used for the custom domain; avoid removing it unless changing domains.
