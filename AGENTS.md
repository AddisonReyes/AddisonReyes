# AGENTS.md

## Repo Shape

- Next.js + TypeScript portfolio using the App Router.
- Static GitHub Pages deploy is produced by `next build` with `output: "export"` in `next.config.mjs`.
- GitHub Pages uploads the generated `out/` directory.
- Styling is intentionally lightweight: `app/globals.css` contains the local utility-class subset plus site-specific component classes.

## Local Preview

- Install dependencies with `npm install`.
- Use `npm run dev` for local development at `http://localhost:3000`.
- Use `npm run build` to validate the static export.

## Deployment (Source Of Truth)

- GitHub Actions deploys Pages by installing dependencies, running `npm run build`, and uploading `out/`.
- Keep `public/CNAME` for the custom domain; Next copies it into `out/`.
- If you change the export output, update `.github/workflows/pages.yml` artifact `path`.

## Non-Obvious Couplings

- This project does not use Tailwind. Tailwind-like class names used in JSX are backed by local rules in `app/globals.css`.
- Project and client-work data lives in `data/projects.ts` and is rendered at build time.
- Static assets referenced from components should live in `public/`.
- The contact form uses `@emailjs/browser` and constants in `lib/constants.ts`; changing EmailJS setup requires updating those strings.
- `app/layout.tsx` owns metadata, Open Graph, Twitter card, viewport, canonical URL, and favicon wiring.
- `app/globals.css` defines `.font-nav` / `.font-libre` used by the components.
- Footer links currently include Certifications, LeetCode, Email, LinkedIn, and Resume. Keep labels short because the footer link row is uppercase with wide tracking.
