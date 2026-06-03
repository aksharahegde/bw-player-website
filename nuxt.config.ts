import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://bwplayer.app',
    name: 'BW Player',
    description:
      'Monochrome music player — stream, mix, and queue from Last.fm, Audius, or Jamendo.',
    defaultLocale: 'en',
  },
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    prerender: { routes: ['/'] },
  },
  ogImage: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
