<template>
  <div class="wrapper">
    <p
      class="w-full text-sm font-semibold uppercase text-ui-typo-lighter mb-1"
      :class="{
        'text-center md:text-left': leftAligned,
        'text-center': !leftAligned,
      }"
    >
      Used by hyper-productive labs at
    </p>
    <div
      class="logos"
      :class="{
        'justify-center md:justify-start': leftAligned,
        'justify-center': !leftAligned,
      }"
    >
      <nuxt-img alt="Berkeley" src="/logos/berkeley.svg" height="32" />
      <nuxt-img alt="MIT" src="/logos/mit.svg" height="32" />
      <nuxt-img
        alt="Vanderbilt"
        src="/logos/vanderbilt.svg"
        height="32"
        class="md:hidden lg:block"
      />
      <nuxt-img
        alt="University of Pennsylvania"
        src="/logos/upenn.svg"
        height="32"
      />
      <nuxt-img alt="Stanford" src="/logos/stanford.svg" height="32" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
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
  @apply flex flex-col pt-3;
}
.logos {
  @apply my-2 w-full flex flex-wrap gap-4 max-w-md;
}
img {
  max-height: 32px;
  @apply flex-1 flex-grow-0 flex-shrink-0;
}
</style>
