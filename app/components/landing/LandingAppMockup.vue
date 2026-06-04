<script setup lang="ts">
import { landingMockupImages, type MockScreen } from '~/content/landing'
import MockScreenDiscover from './mockups/MockScreenDiscover.vue'
import MockScreenSmartMix from './mockups/MockScreenSmartMix.vue'
import MockScreenNowPlaying from './mockups/MockScreenNowPlaying.vue'
import MockScreenLibrary from './mockups/MockScreenLibrary.vue'

export type { MockScreen }

const props = withDefaults(
  defineProps<{
    screen: MockScreen
    variant?: 'hero' | 'card' | 'compact'
    presentation?: 'device' | 'overview'
    imageSrc?: string
    caption?: string
    testId?: string
  }>(),
  { variant: 'card', presentation: 'device' },
)

const ariaLabels: Record<MockScreen, string> = {
  discover: 'BW Player Discover screen preview',
  'smart-mix': 'BW Player Smart Mix screen preview',
  'now-playing': 'BW Player Now Playing screen preview',
  library: 'BW Player Library screen preview',
}

const resolvedImageSrc = computed(
  () => props.imageSrc ?? landingMockupImages[props.screen],
)

const frameAriaLabel = computed(() =>
  props.presentation === 'overview'
    ? 'BW Player app preview in light and dark mode'
    : ariaLabels[props.screen],
)

const screenComponent = computed(() => {
  switch (props.screen) {
    case 'discover':
      return MockScreenDiscover
    case 'smart-mix':
      return MockScreenSmartMix
    case 'now-playing':
      return MockScreenNowPlaying
    case 'library':
      return MockScreenLibrary
  }
})

const usesImageZoom = computed(
  () => !!resolvedImageSrc.value && props.presentation === 'device',
)
</script>

<template>
  <figure
    class="bw-mockup"
    :class="{
      'bw-mockup--hero': variant === 'hero',
      'bw-mockup--card': variant === 'card',
      'bw-mockup--compact': variant === 'compact',
      'bw-mockup--overview': presentation === 'overview',
      'bw-mockup--image-zoom': usesImageZoom,
    }"
    :data-testid="testId"
  >
    <div
      v-if="presentation === 'overview' && resolvedImageSrc"
      class="bw-mockup__overview"
      role="img"
      :aria-label="frameAriaLabel"
    >
      <img
        :src="resolvedImageSrc"
        :alt="frameAriaLabel"
        class="bw-mockup__overview-image"
      >
    </div>
    <div
      v-else
      class="bw-mockup__frame"
      role="img"
      :aria-label="frameAriaLabel"
    >
      <div
        class="bw-mockup__notch"
        aria-hidden="true"
      />
      <div class="bw-mockup__screen">
        <img
          v-if="resolvedImageSrc"
          :src="resolvedImageSrc"
          :alt="frameAriaLabel"
          class="bw-mockup__image"
        >
        <component
          :is="screenComponent"
          v-else
        />
      </div>
    </div>
    <figcaption
      v-if="caption"
      class="bw-mockup__caption"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.bw-mockup__screen:has(.bw-mockup__image) {
  padding: 22px 0 0;
}

.bw-mockup__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.bw-mockup--image-zoom .bw-mockup__notch {
  display: none;
}

.bw-mockup--image-zoom .bw-mockup__screen:has(.bw-mockup__image) {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bw-mockup--image-zoom .bw-mockup__image {
  --mockup-image-zoom: 1.48;
  position: relative;
  width: 100%;
  height: auto;
  max-width: none;
  flex-shrink: 0;
  object-fit: unset;
  object-position: unset;
  transform: scale(var(--mockup-image-zoom));
  transform-origin: center center;
}
</style>
