<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'BW Player',
    description: 'Listen in black and white',
  },
)
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1200px;
      height: 630px;
      padding: 72px;
      background: linear-gradient(160deg, #faf9fe 0%, #f4f3f8 55%, #e3e2e7 100%);
      font-family: Newsreader, Georgia, serif;
      color: #1a1b1f;
    "
  >
    <div style="display: flex; flex-direction: column; gap: 16px">
      <p
        style="
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4c4546;
        "
      >
        Monochrome Studio
      </p>
      <h1
        style="
          margin: 0;
          font-size: 64px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.05;
          max-width: 900px;
        "
      >
        {{ title }}
      </h1>
      <p
        style="
          margin: 0;
          font-size: 32px;
          line-height: 1.35;
          color: #4c4546;
          max-width: 820px;
        "
      >
        {{ description }}
      </p>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <p style="margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.02em; font-family: 'DM Sans', system-ui, sans-serif">
        BW Player
      </p>
      <p style="margin: 0; font-size: 20px; color: #4c4546; font-family: 'DM Sans', system-ui, sans-serif">
        Android · iOS · macOS
      </p>
    </div>
  </div>
</template>
