<script setup lang="ts">
import LandingAppMockup from '~/components/landing/LandingAppMockup.vue'
import LandingFeaturesShowcase from '~/components/landing/LandingFeaturesShowcase.vue'
import {
  landingDownload,
  landingFooter,
  landingHero,
  landingMoods,
  landingNav,
  landingPlatforms,
  landingSeo,
  landingSources,
} from '~/content/landing'

const year = new Date().getFullYear()

useSeoMeta({
  title: landingSeo.title,
  titleTemplate: '%s',
  description: landingSeo.description,
  ogTitle: landingSeo.ogTitle,
  ogDescription: landingSeo.ogDescription,
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebSite({
    name: 'BW Player',
    description: landingSeo.description,
  }),
  defineWebPage({
    name: landingSeo.title,
    description: landingSeo.description,
  }),
  defineSoftwareApp({
    name: 'BW Player',
    applicationCategory: 'MusicApplication',
    operatingSystem: 'Android, iOS, macOS',
    description: landingSeo.description,
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
          >{{ landingNav.cta }}</a>
        </div>
      </div>
    </nav>

    <header
      class="bw-content bw-hero"
      data-testid="landing-hero"
    >
      <div>
        <p class="bw-hero-tag">
          {{ landingHero.eyebrow }}
        </p>
        <h1 class="bw-hero-head">
          {{ landingHero.headline }}
        </h1>
        <p class="bw-hero-sub">
          {{ landingHero.subhead }}
        </p>
        <div class="bw-hero-actions">
          <a
            href="#download"
            class="bw-btn bw-btn--primary"
            data-testid="landing-hero-download"
          >{{ landingHero.primaryCta }}</a>
          <a
            href="#features"
            class="bw-btn bw-btn--secondary"
          >{{ landingHero.secondaryCta }}</a>
        </div>
      </div>
      <LandingAppMockup
        screen="discover"
        variant="hero"
        :caption="landingHero.mockupLabel"
        test-id="landing-hero-mockup"
      />
    </header>

    <div class="bw-content bw-platforms">
      <span
        v-for="platform in landingPlatforms"
        :key="platform"
        class="bw-platform-chip"
      >{{ platform }}</span>
    </div>

    <section
      id="features"
      class="bw-content"
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

    <section class="bw-content">
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
          v-for="mood in landingMoods"
          :key="mood.id"
          class="bw-mood-card"
          :class="`bw-mood-card--${mood.id}`"
          :data-testid="`landing-mood-${mood.id}`"
        >
          <div
            class="bw-mood-card__art"
            aria-hidden="true"
          />
          <h3 style="margin: 0 0 0.25rem; font-size: 1.125rem; font-weight: 700">
            {{ mood.title }}
          </h3>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-ink-2)">
            {{ mood.line }}
          </p>
        </article>
      </div>
    </section>

    <section class="bw-content">
      <div class="bw-section-head">
        <h2 class="bw-section-title">
          {{ landingSources.title }}
        </h2>
      </div>
      <div class="bw-sources">
        <article
          v-for="source in landingSources.items"
          :key="source.id"
          class="bw-source-card"
        >
          <h3 class="bw-source-card__name">
            {{ source.name }}
          </h3>
          <p class="bw-source-card__line">
            {{ source.line }}
          </p>
        </article>
      </div>
    </section>

    <section
      id="download"
      class="bw-content bw-download"
      data-testid="landing-download-cta"
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
        >{{ landingDownload.android }}</a>
        <a
          href="#"
          class="bw-btn bw-btn--secondary"
        >{{ landingDownload.ios }}</a>
        <a
          href="#"
          class="bw-btn bw-btn--secondary"
        >{{ landingDownload.macos }}</a>
      </div>
    </section>

    <footer class="bw-content bw-footer">
      <p style="margin: 0 0 0.5rem">
        © {{ year }} BW Player
      </p>
      <p style="margin: 0">
        {{ landingFooter.tagline }}
      </p>
    </footer>
  </div>
</template>
