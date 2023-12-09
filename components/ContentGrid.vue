<template>
  <div class="content">
    <div class="sidebar" :class="{ hidden: !guides && !blog }">
      <slot name="sidebar"></slot>
    </div>
    <div class="text" :class="{ hidden: guides }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guides: {
      type: Boolean,
      default: false,
    },
    blog: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.content {
  @apply flex flex-col md:flex-row;
}

.sidebar {
  @apply md:block md:sticky top-24 self-start w-full md:w-60 lg:w-96 md:pr-10;
}

.text {
  @apply md:block flex-1 md:pl-20 md:border-ui-secondary-50 md:border-l;
}
</style>
