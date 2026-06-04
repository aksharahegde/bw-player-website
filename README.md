# BW Player Website

Marketing site for **BW Player** — a monochrome music player for Android, iOS, and macOS. Stream, mix, and queue from Last.fm, Audius, and Jamendo with a calm UI where album art is the only color on screen.

**Repository:** [github.com/aksharahegde/bw-player-website](https://github.com/aksharahegde/bw-player-website)

## Stack

| Layer | Choice |
| --- | --- |
| Framework | [Nuxt 4](https://nuxt.com/) (Vue 3, TypeScript) |
| Styling | Tailwind CSS 4 + custom landing tokens |
| Typography | Newsreader (display), DM Sans (UI) |
| SEO | [@nuxtjs/seo](https://nuxtseo.com/) — sitemap, robots, Schema.org, OG images |
| OG images | Satori + `@resvg/resvg-js` (`BwPlayerOg` template) |
| Motion | [anime.js](https://animejs.com/) (hero entrance, scroll reveals, hover; respects `prefers-reduced-motion`) |

The home page is **prerendered** (`/`, `/sitemap.xml`, `/robots.txt`) for fast static hosting.

## Landing sections

- Hero with platform list and app mockup
- Editorial features showcase (Discover, Smart Mix, Now Playing, Library, Design)
- Mood cards and streaming source cards (Last.fm, Audius, Jamendo)
- Download CTAs (placeholders until store URLs are set)
- Footer with site credit

## Requirements

- [Bun](https://bun.sh/) 1.x (recommended; lockfile included) or Node.js 20+
- Git

## Setup

```bash
git clone git@github.com:aksharahegde/bw-player-website.git
cd bw-player-website
bun install
cp .env.example .env
```

Edit `.env` and set `NUXT_PUBLIC_SITE_URL` to your deployment URL (local dev can use `http://localhost:3000`).

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start dev server (wraps `nuxt dev`; on macOS sets `TMPDIR=/tmp` to avoid SSR socket path limits) |
| `bun run build` | Production build |
| `bun run preview` | Preview production build locally |
| `bun run generate` | Static generation (if you deploy as fully static output) |

npm equivalents: `npm install`, `npm run dev`, etc.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical site URL for meta, sitemap, OG, and JSON-LD `@id` |
| `NUXT_PUBLIC_TWITTER_SITE` | No | Twitter handle for cards (e.g. `@bwplayer`) |
| `NUXT_PUBLIC_ANDROID_STORE_URL` | No | Play Store URL for Schema.org `downloadUrl` |
| `NUXT_PUBLIC_IOS_STORE_URL` | No | App Store URL |
| `NUXT_PUBLIC_MAC_STORE_URL` | No | Mac App Store or direct download URL |

See [.env.example](./.env.example) for defaults.

## Project layout

```
app/
  pages/index.vue              # Single-page landing
  content/landing.ts           # Typed copy (source of truth for UI strings)
  composables/
    useLandingSeo.ts           # Meta, OG, Schema.org
    useLandingAnime.ts         # Client motion (anime.js)
  components/
    landing/                   # Mockups, features showcase
    OgImage/BwPlayerOg.satori.vue
  assets/css/                  # main.css + landing.css
public/
  favicon.svg, providers/      # Provider logos
LANDING_CONTENT.md             # Human-editable copy mirror (keep in sync with landing.ts)
```

## Content workflow

1. Edit marketing copy in [LANDING_CONTENT.md](./LANDING_CONTENT.md) (planning / review).
2. Apply the same strings in [app/content/landing.ts](./app/content/landing.ts) (what the app renders).

Hero mockups are Vue components under `app/components/landing/mockups/`. To use screenshots instead, add images under `public/mockups/` and pass `image-src` to `LandingAppMockup`.

Provider logos live in `public/providers/` (monochrome SVGs).

## SEO and OG images

- Sitemap, robots, and structured data are configured via `@nuxtjs/seo` and `useLandingSeo`.
- Dynamic OG images use the `BwPlayerOg` Satori component; fonts are listed in `nuxt.config.ts`.

Regenerate PWA icons after changing the favicon:

```bash
bunx nuxt-seo-utils icons --source public/favicon.svg
```

## Deployment

1. Set `NUXT_PUBLIC_SITE_URL` in the host environment.
2. Run `bun run build` and deploy the Nitro output (Node server) or use `bun run generate` for static hosts that support the generated output.
3. Optional: set store URLs and `NUXT_PUBLIC_TWITTER_SITE` before go-live.

Works well on Vercel, Netlify, Cloudflare Pages, or any Node/Nitro-compatible platform.

## License

MIT — see [LICENSE](./LICENSE).

Built with ♥ by [Akshara Hegde](https://akshara.dev).
