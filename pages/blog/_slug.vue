<template>
  <div class="container pb-24">
    <div v-if="blog">
      <div v-if="blog._type === 'cartoon'">
        <ContentGrid blog>
          <template #sidebar>
            <nuxt-link
              to="/blog"
              class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center"
            >
              <mdicon name="arrow-left" width="12" class="mr-1" />All posts
            </nuxt-link>
            <h1 class="text-xl lg:text-2xl my-6 lg:my-6">
              <span v-if="!(blog.number === undefined || blog.number === null)">
                #{{ blog.number }}
              </span>
              <span>
                {{ blog.title }}
              </span>
            </h1>
            <p
              v-if="blog.author && blog.category"
              class="text-ui-secondary-300 mb-12 md:mb-20"
            >
              <nuxt-link :to="'/blog/topic/' + blog.category.slug.current">{{
                blog.category.title
              }}</nuxt-link>
              by {{ blog.author.name }}
            </p>
            <div class="hidden md:block">
              <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
              <p class="mt-4 text-ui-secondary-400">
                Get your whole lab on the same page today.
              </p>
              <nuxt-link to="/" class="text-ui-primary font-semibold"
                >Learn more <mdicon name="arrow-right" width="16"
              /></nuxt-link>
            </div>
          </template>
          <template #text>
            <img
              width="1800"
              :src="$urlFor(blog.cartoonImage)"
              :alt="blog.title"
              class="mt-10 sm:mt-0 w-full rounded-md border border-ui-border"
            />
            <div
              v-if="comicsList.length > 0"
              class="flex flex-row justify-center items-center mt-4"
            >
              <nuxt-link
                v-if="blog._id !== comicsList[0]._id"
                :to="'/blog/' + comicsList[0].slug.current + '/'"
                class="pagination-btn"
              >
                ↞
              </nuxt-link>
              <nuxt-link
                v-if="pagination(comicsList)"
                :to="'/blog/' + pagination(comicsList).slug.current + '/'"
                class="pagination-btn"
                >←<span class="hidden sm:inline ml-2">Prev</span></nuxt-link
              >
              <nuxt-link to="/blog/topic/cartoon" class="pagination-btn">
                All comics
              </nuxt-link>
              <nuxt-link
                v-if="pagination(comicsList, true)"
                :to="'/blog/' + pagination(comicsList, true).slug.current + '/'"
                class="pagination-btn"
                ><span class="hidden sm:inline mr-2">Next</span>→</nuxt-link
              >
              <nuxt-link
                v-if="blog._id !== comicsList[comicsList.length - 1]._id"
                :to="
                  '/blog/' +
                  comicsList[comicsList.length - 1].slug.current +
                  '/'
                "
                class="pagination-btn"
              >
                ↠
              </nuxt-link>
            </div>
            <div class="block md:hidden mt-16">
              <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
              <p class="mt-4 text-ui-secondary-400">
                Get your whole lab on the same page today.
              </p>
              <nuxt-link to="/" class="text-ui-primary font-semibold"
                >Learn more <mdicon name="arrow-right" width="16"
              /></nuxt-link>
            </div>
          </template>
        </ContentGrid>
      </div>
      <div v-else>
        <nuxt-link
          to="/blog"
          class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center"
        >
          <mdicon name="arrow-left" width="12" class="mr-1" />All posts
        </nuxt-link>
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-5xl">{{ blog.title }}</h1>
          <p class="text-lg lg:text-xl my-6 lg:my-6 text-ui-secondary-400">
            {{ blog.description }}
          </p>
        </div>
        <p
          v-if="blog.author && blog.category"
          class="text-ui-secondary-300 mb-12 md:mb-20"
        >
          By {{ blog.author.name }} in
          <nuxt-link :to="'/blog/topic/' + blog.category.slug.current">{{
            blog.category.title
          }}</nuxt-link>
        </p>
        <ContentList :data="blog">
          <template #after-nav>
            <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
            <p class="mt-4 text-ui-secondary-400">
              Get your whole lab on the same page today.
            </p>
            <nuxt-link to="/" class="text-ui-primary font-semibold"
              >Learn more <mdicon name="arrow-right" width="16"
            /></nuxt-link>
          </template>
          <template #after-body>
            <div class="block md:hidden">
              <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
              <p class="mt-4 text-ui-secondary-400">
                Get your whole lab on the same page today.
              </p>
              <nuxt-link to="/" class="text-ui-primary font-semibold"
                >Learn more <mdicon name="arrow-right" width="16"
              /></nuxt-link>
            </div>
          </template>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { groq } from '@nuxtjs/sanity'
import useSanity from '~/hooks/useSanity'
export default defineComponent({
  async validate({ app, params }) {
    // check if the story exists
    try {
      const _slug = params.slug
      await app.$sanity.fetch(
        groq`*[_type in ["cartoon", "blog_post"] && slug.current=="${_slug}"]{}`
      )
      return true
    } catch (err) {
      // 404 or somthing...
      return false
    }
  },
  setup() {
    const route = useRoute()
    const _slug = route.value.params.slug
    const blog = useSanity({
      query: groq`
				*[_type in ["cartoon", "blog_post"] && slug.current=="${_slug}"]{
					...,
					author -> {
						name,
						slug
					},
					category -> {
						title,
						slug
					}
				} | order(publishedAt desc)[0...100]`,
      single: true,
      useMeta: true,
      resolveTitle(data) {
        const value = data.value
        if (value._type === 'cartoon' && value.number)
          return `#${value.number} - ${value.title}`
        return null
      },
    })
    const pagination = (list, next) => {
      let currentIndex = list.findIndex((item) => item.slug.current === _slug)
      if (currentIndex === -1) {
        currentIndex += 1
      }
      const adjacentIndex = next ? currentIndex + 1 : currentIndex - 1
      return list[adjacentIndex] ? list[adjacentIndex] : null
    }
    const comicsList = useSanity({
      query: groq`*[_type == "cartoon"] | order(publishedAt desc)[0...100]`,
    })
    return { blog, comicsList, pagination }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.pagination-btn {
  @apply flex items-center  text-ui-primary font-semibold px-4 mx-1 py-2 border border-ui-primary rounded hover:bg-ui-primary hover:text-white transition-colors;
}
</style>
