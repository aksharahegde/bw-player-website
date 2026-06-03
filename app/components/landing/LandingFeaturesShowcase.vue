<script setup lang="ts">
import LandingAppMockup from '~/components/landing/LandingAppMockup.vue'
import {
  landingFeatureSpotlight,
  landingFeatureStatement,
  landingFeatureTiles,
} from '~/content/landing'
</script>

<template>
  <div class="bw-showcase">
    <article
      class="bw-showcase-spotlight"
      data-testid="landing-feature-discover"
    >
      <div class="bw-showcase-spotlight__copy">
        <span class="bw-showcase-index">01</span>
        <h3 class="bw-showcase-spotlight__title">
          {{ landingFeatureSpotlight.title }}
        </h3>
        <p class="bw-showcase-spotlight__line">
          {{ landingFeatureSpotlight.line }}
        </p>
      </div>
      <LandingAppMockup
        v-if="landingFeatureSpotlight.screen"
        :screen="landingFeatureSpotlight.screen"
        variant="hero"
        :test-id="`landing-mockup-${landingFeatureSpotlight.screen}`"
      />
    </article>

    <div class="bw-showcase-tiles">
      <article
        v-for="(feature, index) in landingFeatureTiles"
        :key="feature.id"
        class="bw-showcase-tile"
        :data-testid="`landing-feature-${feature.id}`"
      >
        <LandingAppMockup
          v-if="feature.screen"
          :screen="feature.screen"
          variant="compact"
          :test-id="`landing-mockup-${feature.screen}`"
        />
        <div class="bw-showcase-tile__copy">
          <span class="bw-showcase-index">{{ String(index + 2).padStart(2, '0') }}</span>
          <h3 class="bw-showcase-tile__title">
            {{ feature.title }}
          </h3>
          <p class="bw-showcase-tile__line">
            {{ feature.line }}
          </p>
        </div>
      </article>
    </div>

    <article
      class="bw-showcase-statement"
      data-testid="landing-feature-design"
    >
      <span class="bw-showcase-statement__index">05</span>
      <h3 class="bw-showcase-statement__title">
        {{ landingFeatureStatement.title }}
      </h3>
      <p class="bw-showcase-statement__line">
        {{ landingFeatureStatement.line }}
      </p>
    </article>
  </div>
</template>
