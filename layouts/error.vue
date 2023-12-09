<template>
  <div class="wrapper">
    <div class="msg-wrap">
      <h1 v-if="error.statusCode === 404" class="msg">
        Oh no! There is nothing here.
      </h1>
      <h1 v-else class="msg">Something went wrong.</h1>
    </div>
    <div class="backbtn-wrap">
      <nuxt-link to="/" class="back-btn active">Go back</nuxt-link>.
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const statusCode = props.error.statusCode
    let title = `Error ${props.error.statusCode}`

    if (statusCode === 404) {
      title = `404: Page not found`
    }

    useMeta({
      title,
    })
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply w-full pb-24;
}

.msg-wrap {
  @apply pt-8 md:pt-16;
}

.msg {
  @apply text-center font-semibold text-4xl text-ui-primary;
}

.backbtn-wrap {
  @apply mb-10 flex items-center justify-center;
}

.back-btn {
  @apply font-semibold border-b border-ui-primary text-xl;
}
</style>
