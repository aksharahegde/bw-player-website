<template>
  <div class="bw-mock-ui">
    <div style="font-weight: 700; font-size: 10px; margin-bottom: 4px">Library</div>
    <div style="display: flex; gap: 4px; margin-bottom: 6px">
      <span
        style="font-size: 5px; padding: 3px 8px; border-radius: 99px; background: #000; color: #fff"
      >Recents</span>
      <span
        style="font-size: 5px; padding: 3px 8px; border-radius: 99px; background: #f4f3f8"
      >Favorites</span>
    </div>
    <div
      v-for="i in 3"
      :key="i"
      class="bw-mock-row"
      style="margin-bottom: 5px"
    >
      <div class="bw-mock-thumb" />
      <div style="flex: 1">
        <div class="bw-mock-bar" style="width: 75%; margin-bottom: 3px" />
        <div class="bw-mock-bar" style="width: 50%; height: 5px" />
      </div>
    </div>
    <div class="bw-mock-card" style="margin-top: auto">
      <div style="font-weight: 600">+ Create playlist</div>
    </div>
    <nav class="bw-mock-nav" aria-hidden="true">
      <span />
      <span />
      <span class="is-active" />
      <span />
    </nav>
  </div>
</template>
