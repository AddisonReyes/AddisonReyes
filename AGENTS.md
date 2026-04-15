# AGENTS.md

## Repo Shape

- This is a static GitHub Pages site: `index.html` + `style.css` + `script.js` live at the repo root.
- No package manager / build / test tooling is configured in this repo.

## Local Preview

- Use a simple static server from the repo root (avoids `file://` quirks): `python3 -m http.server 8000`.

## Deployment (Source Of Truth)

- GitHub Actions deploys Pages by uploading the repo root as-is: `.github/workflows/pages.yml` uses `actions/upload-pages-artifact` with `path: ./`.
- Keep `CNAME` at the repo root for the custom domain.
- If you introduce a build step or move site files, you must update `pages.yml` (the artifact path currently assumes root output).

## Non-Obvious Couplings

po root for the custom domain.

- If you introduce a build step or move site files, you must update `pages.yml` (the artifact path currently assumes root output).

- `index.html` pulls Tailwind via CDN (`https://cdn.tailwindcss.com`), plus Lucide + EmailJS via CDN scripts. Styling and the contact form depend on these external loads.
- The CV link in `index.html` expects `./addison_reyes_cv.pdf` to remain at the repo root.
