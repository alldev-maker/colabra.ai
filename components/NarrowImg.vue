<template>
  <div class="wrapper" :class="spacing">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    spacing: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col items-center max-w-md mx-auto sm:max-w-sm md:max-w-md;
}
</style>
