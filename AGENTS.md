# AGENTS.md

## Repo Shape

- Static GitHub Pages site served from the repo root (`index.html`, `style.css`, `script.js`).
- GitHub Pages deploy uploads the repo root as-is (no build step).
- No package manager / build / test tooling is configured.

## Local Preview

- Use a real HTTP server from the repo root (avoids `file://` quirks and is required for `fetch('./projects.json')`): `python3 -m http.server 8000`.

## Deployment (Source Of Truth)

- GitHub Actions deploys Pages by uploading the repo root as-is: `.github/workflows/pages.yml` uses `actions/upload-pages-artifact` with `path: ./` (triggered on pushes to `main`).
- Keep `CNAME` at the repo root for the custom domain.
- If you introduce a build step or move site files, update `pages.yml` (artifact `path` assumes root output).

## Non-Obvious Couplings

- `index.html` pulls Tailwind via CDN (`https://cdn.tailwindcss.com`), plus Lucide UMD (`https://unpkg.com/lucide@latest/...`) and EmailJS browser v4 (`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/...`). Styling, icons, and the contact form depend on those external loads.
- The projects section is generated at runtime: `script.js` fetches `./projects.json` and expects `{ "projects": [...] }`.
- Lucide brand icons (github/linkedin) are polyfilled in `script.js` because `lucide@latest` can omit them.
- The contact form uses EmailJS IDs embedded in `script.js` (`publicKey`, `service_*`, `template_*`); changing EmailJS setup requires updating those strings.
- `index.html` expects these repo-root assets to exist: `/favicon.ico` and `./addison_reyes_cv.pdf`.
- `style.css` defines `.font-nav` / `.font-libre` used by the HTML (no Tailwind config/build step).
