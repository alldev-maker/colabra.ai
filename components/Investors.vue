<template>
  <div class="wrapper">
    <p
      v-if="!headingHidden"
      class="text-sm font-semibold uppercase text-ui-typo-lighter mb-1"
    >
      Backed by top investors
    </p>
    <div
      class="logos"
      :class="{
        'justify-center md:justify-start': leftAligned,
        'justify-center': !leftAligned,
      }"
    >
      <nuxt-img alt="INOVIA" src="/logos/inovia.svg" height="32" />
      <nuxt-img alt="Builders" src="/logos/builders.svg" height="32" />
      <nuxt-img alt="Box 1" src="/logos/box1.svg" height="32" />
      <nuxt-img alt="Village Global" src="/logos/village.svg" height="32" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Investors',
  props: {
    headingHidden: {
      type: Boolean,
      default: false,
    },
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
  @apply my-2 w-full flex flex-wrap gap-6 max-w-xl;
}
img {
  max-height: 32px;
  @apply flex-1 flex-grow-0 flex-shrink-0;
}
</style>
