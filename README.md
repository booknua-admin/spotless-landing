# Spotless Landing

This repo is now structured as a simple Next.js app that preserves the existing landing-page content and niche pages.

## How it works

- The original content still lives in `index.html` and `niches/*.html`.
- Next.js reads those files at build time and renders them at `/` and `/niches/[slug]`.
- Existing legacy `.html` URLs redirect to the new clean routes.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

1. Import the repo into Vercel.
2. Vercel will detect Next.js automatically.
3. Build command: `npm run build`
4. Output setting: leave as the default for Next.js.

## Optional environment variable

- `NEXT_PUBLIC_SITE_URL` — set this to your production domain to enable canonical and Open Graph URLs.
