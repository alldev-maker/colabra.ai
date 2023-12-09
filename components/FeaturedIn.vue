<template>
  <div class="wrapper">
    <p class="text-sm font-semibold uppercase text-ui-typo-lighter mb-1">
      As featured in
    </p>
    <div
      class="logos"
      :class="{
        'justify-center md:justify-start': leftAligned,
        'justify-center': !leftAligned,
      }"
    >
      <nuxt-img alt="On Deck" src="/logos/ondeck.svg" height="32" />
      <nuxt-img alt="Wall Street Journal" src="/logos/wsj.svg" height="32" />
      <nuxt-img alt="Forbes" src="/logos/forbes.svg" height="32" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedIn',
  props: {
    leftAligned: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col items-center;
}
.logos {
  @apply my-2 w-full flex flex-wrap gap-4 max-w-xl;
}
img {
  max-height: 32px;
  @apply flex-1 flex-grow-0 flex-shrink-0;
}
</style>
