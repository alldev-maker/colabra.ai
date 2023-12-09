<template>
  <div v-if="episodes">
    <div class="flex flex-wrap">
      <episode-item
        v-for="episode in episodes"
        :key="episode._id"
        :data="episode"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  layout: 'podcast',
  setup() {
    const page = useSanity({
      query: '*[_type=="page" && slug.current == "podcasts"]',
      single: true,
      useMeta: true
    })

    // get the last 100 podcasts
    const episodes = useSanity({
      query: `
      *[_type=="podcast_episode"] | order(publishedAt desc)[0...100]{
        _id,
        _type,
        _createdAt,
        publishedAt,
        number,
        title,
        summary,
        slug,
        show -> {
          title,
          slug
        }
      }`
    })

    return {
      page,
      episodes,
    }
  },
  head: {},
})
</script>
