<script setup lang="ts">
import LandingAppMockup from '~/components/landing/LandingAppMockup.vue'
import LandingFeaturesShowcase from '~/components/landing/LandingFeaturesShowcase.vue'
import {
  landingDownload,
  landingFooter,
  landingHero,
  landingMoods,
  landingNav,
  landingOgImagePath,
  landingPlatforms,
  landingSources,
} from '~/content/landing'

const year = new Date().getFullYear()
const {
  seo,
  siteUrl,
  featureList,
  downloadUrls,
  ids,
  themeColor,
  twitterSite,
} = useLandingSeo()

useLandingAnime()

const logoUrl = computed(() => `${siteUrl.value}/favicon.svg`)

const ogImageUrl = computed(() => `${siteUrl.value}${landingOgImagePath}`)

useSeoMeta({
  title: seo.title,
  titleTemplate: '%s',
  description: seo.description,
  keywords: seo.keywords,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImage: ogImageUrl,
  ogImageAlt: seo.ogImageAlt,
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: ogImageUrl,
  twitterTitle: seo.twitterTitle,
  twitterDescription: seo.twitterDescription,
  twitterSite: twitterSite.value || undefined,
  themeColor,
})

useSchemaOrg([
  defineOrganization({
    '@id': ids.value.organization,
    name: 'BW Player',
    url: siteUrl.value,
    logo: logoUrl.value,
  }),
  defineWebSite({
    '@id': ids.value.website,
    name: 'BW Player',
    url: siteUrl.value,
    description: seo.description,
    inLanguage: 'en',
    publisher: { '@id': ids.value.organization },
  }),
  defineWebPage({
    '@id': ids.value.webpage,
    name: seo.title,
    description: seo.description,
    url: siteUrl.value,
    isPartOf: { '@id': ids.value.website },
    about: { '@id': ids.value.software },
    primaryImageOfPage: ogImageUrl.value,
    inLanguage: 'en',
  }),
  defineSoftwareApp({
    '@id': ids.value.software,
    name: 'BW Player',
    applicationCategory: 'MusicApplication',
    operatingSystem: ['Android', 'iOS', 'macOS'],
    description: seo.description,
    image: ogImageUrl.value,
    screenshot: ogImageUrl.value,
    featureList,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    ...(downloadUrls.value.length > 0 ? { downloadUrl: downloadUrls.value } : {}),
  }),
])

</script>

<template>
  <div class="bw-page">
    <nav
      class="bw-nav"
      aria-label="Site navigation"
    >
      <div class="bw-content bw-nav__inner">
        <NuxtLink
          to="/"
          class="bw-wordmark"
          aria-label="BW Player home"
        >
          {{ landingNav.wordmark }}
        </NuxtLink>
        <div class="bw-nav__links">
          <a
            href="#features"
            class="bw-nav-link"
          >{{ landingNav.features }}</a>
          <a
            href="#download"
            class="bw-nav-link"
          >{{ landingNav.download }}</a>
          <a
            href="#download"
            class="bw-nav-cta"
            data-animate="press"
          >{{ landingNav.cta }}</a>
        </div>
      </div>
    </nav>

    <header
      class="bw-content bw-hero"
      data-testid="landing-hero"
    >
      <div class="bw-hero__copy">
        <p class="bw-eyebrow">
          {{ landingHero.eyebrow }}
        </p>
        <h1 class="bw-display">
          {{ landingHero.headline }}
        </h1>
        <p class="bw-lead">
          {{ landingHero.subhead }}
        </p>
        <div class="bw-hero-actions">
          <a
            href="#download"
            class="bw-btn bw-btn--primary"
            data-testid="landing-hero-download"
            data-animate="press"
          >{{ landingHero.primaryCta }}</a>
          <a
            href="#features"
            class="bw-btn bw-btn--secondary"
            data-animate="press"
          >{{ landingHero.secondaryCta }}</a>
        </div>
        <ul class="bw-hero-platforms">
          <li
            v-for="platform in landingPlatforms"
            :key="platform"
          >
            {{ platform }}
          </li>
        </ul>
      </div>
      <LandingAppMockup
        screen="now-playing"
        variant="hero"
        presentation="overview"
        :image-src="landingHero.mockupImage"
        :caption="landingHero.mockupLabel"
        test-id="landing-hero-mockup"
      />
    </header>

    <section
      id="features"
      class="bw-content bw-section"
      data-testid="landing-features"
    >
      <div class="bw-section-head">
        <h2 class="bw-section-title">
          Built for listening
        </h2>
        <p class="bw-section-line">
          Four screens. One calm studio.
        </p>
      </div>
      <LandingFeaturesShowcase />
    </section>

    <section class="bw-content bw-section">
      <div class="bw-section-head">
        <h2 class="bw-section-title">
          Curated Moods
        </h2>
        <p class="bw-section-line">
          Tap a mood. Start the mix.
        </p>
      </div>
      <div class="bw-moods">
        <article
          v-for="(mood, index) in landingMoods"
          :key="mood.id"
          class="bw-mood-card"
          :class="`bw-mood-card--${mood.id}`"
          :data-testid="`landing-mood-${mood.id}`"
          data-animate="reveal hover"
          :data-animate-delay="index * 60"
        >
          <div
            class="bw-mood-card__art"
            aria-hidden="true"
          />
          <h3 class="bw-card-title">
            {{ mood.title }}
          </h3>
          <p class="bw-card-line">
            {{ mood.line }}
          </p>
        </article>
      </div>
    </section>

    <section class="bw-content bw-section">
      <div class="bw-section-head">
        <h2 class="bw-section-title">
          {{ landingSources.title }}
        </h2>
      </div>
      <div class="bw-sources">
        <article
          v-for="(source, index) in landingSources.items"
          :key="source.id"
          class="bw-source-card"
          :data-testid="`landing-source-${source.id}`"
          data-animate="reveal hover"
          :data-animate-delay="index * 60"
        >
          <h3 class="bw-source-card__brand">
            <img
              :src="source.logo"
              alt=""
              class="bw-source-card__logo"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            >
            <span class="bw-source-card__name">{{ source.name }}</span>
          </h3>
          <p class="bw-source-card__line">
            {{ source.line }}
          </p>
        </article>
      </div>
    </section>

    <section
      id="download"
      class="bw-content bw-section bw-section--tight"
      data-testid="landing-download-cta"
    >
      <div
        class="bw-download"
        data-animate="reveal"
      >
        <h2 class="bw-section-title">
          {{ landingDownload.headline }}
        </h2>
        <p class="bw-section-line">
          {{ landingDownload.subhead }}
        </p>
        <div class="bw-download__actions">
          <a
            href="#"
            class="bw-btn bw-btn--primary"
            data-animate="press"
          >{{ landingDownload.android }}</a>
          <a
            href="#"
            class="bw-btn bw-btn--secondary"
            data-animate="press"
          >{{ landingDownload.ios }}</a>
          <a
            href="#"
            class="bw-btn bw-btn--secondary"
            data-animate="press"
          >{{ landingDownload.macos }}</a>
        </div>
      </div>
    </section>

    <footer class="bw-content bw-footer">
      <p>© {{ year }} BW Player</p>
      <p>{{ landingFooter.tagline }}</p>
      <p class="bw-footer__credit">
        {{ landingFooter.builtBy.prefix }}
        <span
          class="bw-footer__heart"
          aria-hidden="true"
        >♥</span>
        {{ landingFooter.builtBy.by }}
        <a
          :href="landingFooter.builtBy.authorUrl"
          class="bw-footer__link"
          rel="noopener noreferrer"
        >{{ landingFooter.builtBy.author }}</a>
      </p>
    </footer>
  </div>
</template>
