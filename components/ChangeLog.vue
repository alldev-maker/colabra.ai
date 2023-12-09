<template>
  <div class="mb-10">
    <div>
      <p class="text-sm font-medium text-ui-secondary-500 font-sans">
        {{ hyphenedDateFormat(data._publishedAt) || data.publishedAt }}
      </p>
      <nuxt-link v-if="data" :to="`/changelog/${data.slug.current}`">
        <h1 class="text-3xl font-semibold font-sans">{{ data.title }}</h1>
      </nuxt-link>
      <SanityRichText :blocks="data.body" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { hyphenedDateFormat } from '../helpers/format_date'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { hyphenedDateFormat }
  },
})
</script>
