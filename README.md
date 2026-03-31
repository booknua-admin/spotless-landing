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
- `NEXT_PUBLIC_MIXPANEL_TOKEN` — enables Mixpanel when set.
- `NEXT_PUBLIC_MIXPANEL_API_HOST` — optional custom API host if you proxy Mixpanel traffic.
- `NEXT_PUBLIC_MIXPANEL_DEBUG` — set to `true` to enable Mixpanel debug logging locally.

## Mixpanel analytics

Mixpanel is wired into the shared app layout, so it loads on `/` and every `/niches/[slug]` page.

- The client library initializes only when `NEXT_PUBLIC_MIXPANEL_TOKEN` is present.
- Autocapture is enabled for clicks, form interactions, and other supported web events.
- Route changes also send a custom `Page Viewed` event with the path, query string, title, and full URL.
- Custom events also track CTA clicks, signup form submissions, signup CTA clicks on custom form blocks, and demo CTA clicks.
- No form field values are sent to Mixpanel; only field counts, field types, and button/location metadata are tracked.

Tracked custom events:

- `CTA Clicked`
- `Demo CTA Clicked`
- `Signup Form Submitted`
- `Signup Form CTA Clicked`
- `Demo Booked`

You can trigger `Demo Booked` in either of these ways:

- Redirect users back to any page on this site with `?booked_demo=1` after scheduling completes.
- Dispatch a browser event from a booking widget callback:

```js
window.dispatchEvent(
  new CustomEvent('spotless:demo-booked', {
    detail: {
      provider: 'calendly',
      source: 'booking_widget',
      booking_type: 'demo',
    },
  }),
);
```

Example local setup:

```bash
cp .env.example .env.local
```
