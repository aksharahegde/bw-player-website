# BW Player Website

Marketing landing page for [BW Player](../bw-player), built with Nuxt 4 and [@nuxtjs/seo](https://nuxtseo.com/).

## Setup

```bash
npm install
cp .env.example .env
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Set `NUXT_PUBLIC_SITE_URL` to your production URL for canonical URLs, sitemap, and Open Graph.

## Content

- Copy source: [LANDING_CONTENT.md](./LANDING_CONTENT.md)
- Typed module: [app/content/landing.ts](./app/content/landing.ts)

## App mockups

Placeholder UI mocks live in `app/components/landing/mockups/`. Drop real screenshots into `public/mockups/` and pass `image-src` to `LandingAppMockup` when ready.

## SEO

`@nuxtjs/seo` provides sitemap, robots, schema.org, meta tags, and Satori OG images (`BwPlayerOg` template).

Set `NUXT_PUBLIC_SITE_URL` for canonical URLs, sitemap, Open Graph, and JSON-LD `@id` links.

Optional env vars (see `.env.example`): `NUXT_PUBLIC_TWITTER_SITE`, store URLs for schema `downloadUrl`.

Regenerate PWA icons from the favicon after changing branding:

```bash
npx nuxt-seo-utils icons --source public/favicon.svg
```
