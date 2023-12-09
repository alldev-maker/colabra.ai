<template>
  <div class="app">
    <Banner />
    <TheHeader />
    <main>
      <section>
        <div class="container pb-24">
          <h1 class="text-4xl lg:text-5xl">Podcasts</h1>
          <p
            class="text-lg lg:text-xl my-6 mb-10 md:mb-20 text-ui-secondary-400"
          >
            Conversations with the doers and thinkers at
            <br class="hidden lg:inline" />
            the forefront of biotech and materials science.
          </p>
          <ContentGrid blog>
            <template #sidebar>
              <div class="block md:hidden mb-12 md:mb-20">
                <Dropdown
                  :links="[
                    { text: 'Latest', to: '/podcasts/' },
                    ...podcasts.map((item) => {
                      return {
                        text: item.title,
                        to: '/podcasts/' + item.slug.current + '/',
                      }
                    }),
                  ]"
                >
                </Dropdown>
              </div>
              <ul class="hidden md:block mb-12 md:mb-20">
                <li
                  class="sidebar-link"
                  :class="{
                    'text-ui-primary font-semibold': !$route.params.slug,
                  }"
                >
                  <nuxt-link to="/podcasts/">Latest</nuxt-link>
                </li>
                <li
                  v-for="podcast in podcasts"
                  :key="podcast._id"
                  class="sidebar-link"
                  :class="{
                    'text-ui-primary font-semibold':
                      podcast.slug.current === $route.params.slug,
                  }"
                >
                  <nuxt-link :to="'/podcasts/' + podcast.slug.current + '/'">
                    {{ podcast.title }}</nuxt-link
                  >
                </li>
              </ul>

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
              <Nuxt />
              <div class="block md:hidden mt-16">
                <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
                <p class="mt-4 text-ui-secondary-400">
                  Get your whole lab on the same page today.
                </p>
                <nuxt-link to="/" class="text-ui-primary font-semibold"
                  >Learn more <mdicon name="arrow-right" width="16"
                /></nuxt-link></div
            ></template>
          </ContentGrid>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'
export default defineComponent({
  setup() {
    const podcasts = useSanity({
      query: '*[_type=="podcast_show"] | order(title asc)',
    })
    return {
      podcasts,
    }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply mt-4 cursor-pointer hover:text-ui-primary;
}
.podcast {
  @apply text-xl lg:text-2xl text-center md:text-left;
}
section {
  @apply w-full pt-8 md:pt-16;
}
</style>