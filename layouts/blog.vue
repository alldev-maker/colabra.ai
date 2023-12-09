<template>
  <div class="app">
    <Banner />
    <TheHeader />
    <main>
      <section>
        <div class="container pb-24">
          <h1 class="text-4xl lg:text-5xl">Modern Lab Blog</h1>
          <p
            class="text-lg lg:text-xl my-6 mb-10 md:mb-20 text-ui-secondary-400"
          >
            Colabra's blog on best practices in scientific research.
          </p>
          <ContentGrid blog>
            <template #sidebar>
              <div class="block md:hidden">
                <Dropdown
                  :links="[
                    {
                      text: 'Latest',
                      to: '/blog/',
                    },
                    ...categories.map((item) => {
                      return {
                        text: item.title,
                        to: '/blog/topic/' + item.slug.current + '/',
                      }
                    }),
                    {
                      text: 'Colabrats',
                      to: '/colabrats/',
                    },
                  ]"
                >
                </Dropdown>
              </div>
              <ul class="hidden md:block">
                <li
                  class="sidebar-link"
                  :class="{
                    'text-ui-primary font-semibold': !$route.params.slug && $route.path !== '/colabrats/',
                  }"
                >
                  <nuxt-link to="/blog/">Latest</nuxt-link>
                </li>
                <li
                  v-for="category in categories"
                  :key="category._id"
                  class="sidebar-link"
                  :class="{
                    'text-ui-primary font-semibold':
                      category.slug.current === $route.params.slug,
                  }"
                >
                  <nuxt-link :to="'/blog/topic/' + category.slug.current + '/'">{{
                    category.title
                  }}</nuxt-link>
                </li>

                <!-- Cartoons are now of diffrent type than 'blog',
                so i'm explicitly putting thins link here to route to catoon blogs and also in the dropdown (mobile view) above -->
                <!-- https://linear.app/colabra/issue/PRO-823#comment-9dd1f536 -->
                <li
                  class="sidebar-link"
                  :class="{
                    'text-ui-primary font-semibold':
                      $route.path === '/colabrats/',
                  }"
                >
                  <nuxt-link :to="'/colabrats/'">Colabrats</nuxt-link>
                </li>
              </ul>
            </template>
            <template #text>
              <Nuxt />
            </template>
          </ContentGrid>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import {groq} from '@nuxtjs/sanity'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const categories = useSanity({
      query: groq`*[_type=="blog_category"]`
    })
    
    return {categories}
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply mt-4 cursor-pointer hover:text-ui-primary;
}
.category {
  @apply text-xl lg:text-2xl text-center md:text-left;
}
section {
  @apply w-full pt-8 md:pt-16;
}
</style>
