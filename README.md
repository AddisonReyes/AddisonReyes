<div align="center">

# Addison Reyes Portfolio

Personal portfolio for [addisonreyes.com](https://addisonreyes.com), built with Next.js, React, and TypeScript. The site is statically exported for GitHub Pages.

</div>

## Tech Stack

- Next.js App Router
- TypeScript
- React
- CSS global utilities in `app/globals.css`
- EmailJS for the contact form
- GitHub Pages static export

## Connect with Me

[![Twitter](https://img.shields.io/badge/Twitter-black?style=flat&logo=x&logoColor=white)](https://x.com/dakotitah)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=logmein&logoColor=white)](https://www.linkedin.com/in/addison-reyes-9aa017208/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/dakotitah/)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Next.js exports the static site to `out/` because `next.config.mjs` uses `output: "export"`.

## Project Structure

- `app/`: Next.js routes, metadata, and global CSS.
- `components/`: Reusable React components for navigation, project cards, contact form, and footer.
- `data/projects.ts`: Typed project data rendered at build time.
- `lib/constants.ts`: Shared links and EmailJS constants.
- `public/`: Static assets copied into the export output, including `CNAME`, `favicon.ico`, images, and resume PDF.

## Deployment

GitHub Actions builds the app with Node 20 and uploads `out/` to GitHub Pages. Keep `public/CNAME` in place for the custom domain.
