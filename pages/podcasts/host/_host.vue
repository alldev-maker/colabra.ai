<template>
  <div class="container pb-24">
    <div v-if="host">
      <nuxt-link
        to="/podcasts"
        class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center"
      >
        <mdicon name="arrow-left" width="12" class="mr-1" />All podcasts
      </nuxt-link>
      <div class="max-w-3xl">
        <h1 class="text-4xl lg:text-5xl">{{ host.name }}</h1>
        <p class="text-lg lg:text-xl my-6 lg:my-6 text-ui-secondary-400">
          {{ host.description }}
        </p>
      </div>
      <p v-if="host.podcasts && host.podcasts.length>0" class="text-ui-secondary-300 mb-12 md:mb-20">
        Host of Colabra's
        <nuxt-link
          v-for="podcast in host.podcasts"
          :key="podcast._id"
          class="text-ui-primary"
          :to="'/podcasts/' + podcast.slug.current">
          {{ podcast.title }}{{podcast.slug.current === host.podcasts[host.podcasts.length-1].slug.current ? '' : ','}}&nbsp;
        </nuxt-link>
        podcast{{host.podcasts.length>1 ? 's' : ''}}
      </p>
      <ContentList :data="host">
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
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(`*[_type=="podcast_host" && slug.current=="${params.host}"]{}`)
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params

    const host = useSanity({
      query: `*[_type=="podcast_host" && slug.current=="${params.host}"]{
        ...,
        "body": bio,
        "bio": null,
        "podcasts": *[_type=="podcast_show" && references(^._id)][0...3]{
          _id,
          title,
          slug
        }
      }`,
      single: true,
      useMeta: true
    })

    return { host }
  },
  head: {},
})
</script>
