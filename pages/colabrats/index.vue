<template>
  <div>
    <div class="flex flex-wrap">
      <blog-item
        v-for="(blog, index) in blogs"
        :key="blog._id"
        :data="blog"
        :featured="index === 0"
        :comics="true"
        :category-name="false"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  layout: 'blog',
  setup() {
    const blogs = useSanity({
      query: `
          *[_type=="cartoon" && slug != null]{
            _id,
            _type,
            coverImage,
            cartoonImage,
            publishedAt,
            title,
            slug,
            featured,
            number,
            description,
            category -> {
              title,
              slug
            }
          } | order(publishedAt desc)[0...100]
        `
      })

    const page = useSanity({
      query: `*[_type=="page" && slug.current=="colabrats"]`,
      single: true,
      useMeta: true
    })

    return {blogs, page}
  },
  head: {},
})
</script>
