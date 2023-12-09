<template>
  <div class="w-full h-full p-3 group">
    <p class="text-sm font-medium uppercase text-ui-secondary-500 mb-1">
      <!-- NOTE: no need for this span, title is already being displayed -->
      <span v-if="!$route.params.slug">{{ data.show.title }} · </span>
      <span>episode </span>{{ data.number || '' }}
    </p>
    <nuxt-link
      :to="`/podcasts/${data.show.slug.current}/${data.slug.current}/`"
    >
      <h3 class="text-xl my-2 font-medium">
        {{ data.title }}
        <div
          class="
            border border-ui-primary
            inline-block
            text-sm
            font-medium
            py-1
            px-2
            ml-3
            rounded-sm
            text-ui-primary
            hover:bg-gray-100
          "
        >
          <mdicon class="mr-1" name="play-circle-outline" size="16" /> Listen
        </div>
      </h3>
    </nuxt-link>
    <p v-if="data.summary" class="text-md text-ui-secondary-400">
      {{ shorten({ paragraph: data.summary, threshold: 100 }) }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import shorten from '~/helpers/shortened_paragraph.js'
export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    // NOTE: these props can be derived from the prop above
    // podcastSlug: {
    //   type: String,
    //   default: '',
    // },
    // podcastTitle: {
    //   type: String,
    //   default: '',
    // },
  },
  setup: () => ({ shorten }),
})
</script>