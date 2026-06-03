<script setup lang="ts">
import MockScreenDiscover from './mockups/MockScreenDiscover.vue'
import MockScreenSmartMix from './mockups/MockScreenSmartMix.vue'
import MockScreenNowPlaying from './mockups/MockScreenNowPlaying.vue'
import MockScreenLibrary from './mockups/MockScreenLibrary.vue'

export type MockScreen = 'discover' | 'smart-mix' | 'now-playing' | 'library'

const props = withDefaults(
  defineProps<{
    screen: MockScreen
    variant?: 'hero' | 'card' | 'compact'
    imageSrc?: string
    caption?: string
    testId?: string
  }>(),
  { variant: 'card' },
)

const ariaLabels: Record<MockScreen, string> = {
  discover: 'BW Player Discover screen preview',
  'smart-mix': 'BW Player Smart Mix screen preview',
  'now-playing': 'BW Player Now Playing screen preview',
  library: 'BW Player Library screen preview',
}

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
</script>

<template>
  <figure
    class="bw-mockup"
    :class="{
      'bw-mockup--hero': variant === 'hero',
      'bw-mockup--card': variant === 'card',
      'bw-mockup--compact': variant === 'compact',
    }"
    :data-testid="testId"
  >
    <div
      class="bw-mockup__frame"
      role="img"
      :aria-label="ariaLabels[screen]"
    >
      <div
        class="bw-mockup__notch"
        aria-hidden="true"
      />
      <div class="bw-mockup__screen">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          alt=""
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
.bw-mockup__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}
</style>
