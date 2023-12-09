<template>
  <div>
    <div v-if="lesson">
      <div class="max-w-2xl">
        <h1 class="text-4xl lg:text-5xl">{{ lesson.title }}</h1>
        <p
          class="
            text-lg
            lg:text-xl
            mt-6
            lg:mt-6
            text-ui-secondary-400
            mb-12
            md:mb-20
          "
        >
          {{ lesson.description }}
        </p>
      </div>
      <ContentList :data="lesson" />
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  layout: 'course',
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(`*[_type=="course_lesson" && slug.current=="${params.slug}"]{}`)
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const params = useRoute().value.params
    const lesson = useSanity({
      query: `*[_type=="course_lesson" && slug.current=="${params.slug}"]`,
      single: true,
      useMeta: true
    })
    return { lesson }
  },
  head: {},
})
</script>
