import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://bwplayer.app',
      twitterSite: process.env.NUXT_PUBLIC_TWITTER_SITE ?? '',
      androidStoreUrl: process.env.NUXT_PUBLIC_ANDROID_STORE_URL ?? '',
      iosStoreUrl: process.env.NUXT_PUBLIC_IOS_STORE_URL ?? '',
      macStoreUrl: process.env.NUXT_PUBLIC_MAC_STORE_URL ?? '',
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,500&display=swap',
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://bwplayer.app',
    name: 'BW Player',
    description:
      'Monochrome music player. Stream, mix, and queue from Last.fm, Audius, or Jamendo.',
    defaultLocale: 'en',
    trailingSlash: false,
  },
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },
  ogImage: {
    enabled: true,
    defaults: {
      renderer: 'satori',
      width: 1200,
      height: 630,
      extension: 'png',
      component: 'BwPlayerOg',
    },
    fonts: [
      'DM Sans:400',
      'DM Sans:600',
      'Newsreader:600',
      'Newsreader:700',
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
