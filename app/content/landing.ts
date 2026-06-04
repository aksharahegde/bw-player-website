/** Prerendered OG asset in public/og/ (regenerate via dev server + /_og/… when copy changes). */
export const landingOgImagePath = '/og/bw-player.png'

export const landingSeo = {
  title: 'BW Player | Monochrome music, full color when it plays',
  description:
    'Stream, mix, and queue from Last.fm, Audius, or Jamendo. A calm player where album art is the only color on screen.',
  ogTitle: 'BW Player | Listen in black and white',
  ogDescription: 'Discover moods. Shape Smart Mixes. Own your library.',
  ogImageAlt: 'BW Player: monochrome music player for Android, iOS, and macOS',
  twitterTitle: 'BW Player | Listen in black and white',
  twitterDescription: 'Discover moods. Shape Smart Mixes. Own your library.',
  keywords:
    'BW Player, music player, monochrome, Last.fm, Audius, Jamendo, smart mix, playlists, Android, iOS, macOS',
} as const

export const landingNav = {
  wordmark: 'BW Player',
  features: 'Features',
  download: 'Download',
  cta: 'Get the app',
} as const

export const landingHero = {
  eyebrow: 'Monochrome Studio',
  headline: 'Sound, stripped to the essential.',
  subhead: 'Stream. Mix. Queue. Let the artwork breathe.',
  primaryCta: 'Get the app',
  secondaryCta: 'See the features',
  mockupImage: '/mockups/now-playing-overview.png',
  mockupLabel: 'Light and dark mode',
} as const

export const landingPlatforms = ['Android', 'iOS', 'macOS'] as const

export type MockScreen = 'discover' | 'smart-mix' | 'now-playing' | 'library'

/** Screenshots in public/mockups/ — omit screens that use Vue placeholders */
export const landingMockupImages: Partial<Record<MockScreen, string>> = {}

export type FeatureId = 'discover' | 'smart-mix' | 'now-playing' | 'library' | 'design'

export type LandingFeature = {
  id: FeatureId
  title: string
  line: string
  screen?: MockScreen
}

export const landingFeatures: LandingFeature[] = [
  {
    id: 'discover',
    title: 'Discover',
    line: 'Trending now. One tap to play.',
    screen: 'discover',
  },
  {
    id: 'smart-mix',
    title: 'Smart Mix',
    line: 'Describe the vibe. Hear the mix.',
    screen: 'smart-mix',
  },
  {
    id: 'now-playing',
    title: 'Now Playing',
    line: 'Cover art or pulse. Your call.',
    screen: 'now-playing',
  },
  {
    id: 'library',
    title: 'Library',
    line: 'Playlists that live on your device.',
    screen: 'library',
  },
  {
    id: 'design',
    title: 'Monochrome Studio',
    line: 'UI recedes. Music takes the stage.',
  },
]

export const landingFeatureSpotlight = landingFeatures[0]!
export const landingFeatureTiles = landingFeatures.filter(
  (f): f is LandingFeature & { screen: NonNullable<LandingFeature['screen']> } =>
    f.id !== 'discover' && f.id !== 'design' && !!f.screen,
)
export const landingFeatureStatement = landingFeatures.find((f) => f.id === 'design')!

export const landingMoods = [
  { id: 'focus', title: 'Focus', line: 'Deep work & concentration' },
  { id: 'energy', title: 'Energy', line: 'High-tempo motivation' },
  { id: 'calm', title: 'Calm', line: 'Soft ambient unwind' },
] as const

export const landingSources = {
  title: 'Your catalog. Your pick.',
  items: [
    {
      id: 'lastfm',
      name: 'Last.fm',
      line: 'Charts and discovery from Last.fm',
      logo: '/providers/lastfm.svg',
    },
    {
      id: 'audius',
      name: 'Audius',
      line: 'Open catalog, curated flow',
      logo: '/providers/audius.svg',
    },
    {
      id: 'jamendo',
      name: 'Jamendo',
      line: 'Creative Commons, ready to stream',
      logo: '/providers/jamendo.svg',
    },
  ],
} as const

export const landingDownload = {
  headline: 'Ready when you are.',
  subhead: 'Android, iOS, and macOS.',
  android: 'Download for Android',
  ios: 'Download for iOS',
  macos: 'Download for macOS',
} as const

export const landingFooter = {
  tagline: 'Monochrome music player.',
  builtBy: {
    prefix: 'Built with',
    by: 'by',
    author: 'Akshara Hegde',
    authorUrl: 'https://akshara.dev',
  },
} as const
