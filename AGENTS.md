# AGENTS.md

## Repo Shape

- Static GitHub Pages site served from the repo root (`index.html`, `style.css`, `script.js`).
- GitHub Pages deploy uploads the repo root as-is (no build step).
- No package manager / build / test tooling is configured.
- Styling is intentionally build-free: `style.css` contains the small utility-class subset used by the HTML and runtime-generated project cards.

## Local Preview

- Use a real HTTP server from the repo root (avoids `file://` quirks and is required for `fetch('./projects.json')`): `python3 -m http.server 8000`.

## Deployment (Source Of Truth)

- GitHub Actions deploys Pages by uploading the repo root as-is: `.github/workflows/pages.yml` uses `actions/upload-pages-artifact` with `path: ./` (triggered on pushes to `main`).
- Keep `CNAME` at the repo root for the custom domain.
- If you introduce a build step or move site files, update `pages.yml` (artifact `path` assumes root output).

## Non-Obvious Couplings

- `index.html` does not load Tailwind or Lucide from a CDN. Tailwind-like class names are backed by local rules in `style.css`, and icons are hydrated from inline path data in `script.js`.
- The projects and client work sections are generated at runtime: `script.js` fetches `./projects.json` and expects `{ "projects": [...], "externalProjects": [...] }`.
- Runtime-generated project cards depend on matching utility classes existing in `style.css`; when adding classes in `script.js`, add their CSS rules too.
- The contact form loads EmailJS browser v4 on demand from `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`.
- The contact form uses EmailJS constants near the top of `script.js` (`EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`); changing EmailJS setup requires updating those strings.
- `index.html` expects these repo-root assets to exist: `/favicon.ico` and `./addison_reyes_cv.pdf`.
- `style.css` defines `.font-nav` / `.font-libre` used by the HTML (no Tailwind config/build step).
- Footer links currently include Certifications, LeetCode, Twitter, Instagram, and Resume. Keep labels short because the footer link row is uppercase with wide tracking.
