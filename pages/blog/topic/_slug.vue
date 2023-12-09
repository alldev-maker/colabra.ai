<template>
  <div>
    <div class="flex flex-wrap">
      <blog-item
        v-for="(blog, index) in blogs"
        :key="blog._id"
        :data="blog"
        :featured="index === 0"
        :comics="blog._type === 'cartoon'"
        :category-name="false"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { groq } from '@nuxtjs/sanity'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  layout: 'blog',
  async validate({ app, params }) {
    // checks if the category exist
    try {
      const categorySlug = params.slug
      await app.$sanity.fetch(groq`*[_type=="blog_category" && slug != null && slug.current=="${categorySlug}"]`)
      return true
    } catch (err) {
      // return error when theres a 404
      return false
    }
  },
  setup() {
    const route = useRoute()
    const categorySlug = route.value.params.slug
    const blogs = useSanity({
      query: (categorySlug==='cartoon') ?
        groq`
          *[_type=="cartoon" && slug != null]{
            _id,
            _type,
            coverImage,
            cartoonImage,
            publishedAt,
            title,
            slug,
            featured,
            description,
            category -> {
              title,
              slug
            }
          } | order(publishedAt desc)[0...100]
        ` :
        groq`
          *[_type=="blog_post" && slug != null && category->slug.current=="${categorySlug}"]{
            _id,
            _type,
            coverImage,
            cartoonImage,
            publishedAt,
            title,
            slug,
            featured,
            description,
            category -> {
              title,
              slug
            }
          } | order(publishedAt desc)[0...100]`})

    const category = useSanity({
      query: groq`*[_type=="blog_category" && slug.current=="${categorySlug}"]`,
      single: true,
      useMeta: true
    })

    return {
      blogs,
      category,
    }
  },
  head: {},
})
</script>
