<template>
  <div class="container pb-24">
    <div v-if="episode">
      <nuxt-link
        to="/podcasts"
        class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center">
        <mdicon name="arrow-left" width="12" class="mr-1" />All podcasts
      </nuxt-link>
      <div class="max-w-3xl">
        <h1 class="text-4xl lg:text-5xl">{{ episode.name || episode.title }}</h1>
        <p class="text-lg lg:text-xl my-6 lg:my-6 text-ui-secondary-400">
          {{ episode.summary }}
        </p>
      </div>
      <p v-if="episode.show" class="text-ui-secondary-300 mb-12 md:mb-20">
        {{ episode.publishedAt }}
        by
        <nuxt-link
          :to="`/podcasts/host/${episode.show.hosts[0].slug.current}`"
          >{{ episode.show.hosts[0].name }}</nuxt-link
        >
        in
        <nuxt-link :to="'/podcasts/' + episode.show.slug.current">{{
          episode.show.title
        }}</nuxt-link>
      </p>
      <div v-if="episode.showNotes">
        <ContentList :data="episode">
          <template #after-nav>
            <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
            <p class="mt-4 text-ui-secondary-400">
              Get your whole lab on the same page today.
            </p>
            <nuxt-link to="/" class="text-ui-primary font-semibold"
              >Learn more <mdicon name="arrow-right" width="16"
            /></nuxt-link>
          </template>
          <template #before-body>
            <iframe
              width="100%"
              height="180"
              frameborder="no"
              scrolling="no"
              seamless
              :src="`https://share.transistor.fm/e/${episode.playerId}`"
            ></iframe>
            <div class="flex justify-center my-12">
              <a v-if="episode.show.linkApple" :href="episode.show.linkApple">
                <nuxt-img src="/apple-podcasts.png" alt="Apple podcasts link" />
              </a>
              <a v-if="episode.show.linkGoogle" :href="episode.show.linkGoogle">
                <nuxt-img src="/google-podcasts.png" alt="Google podcasts link" />
              </a>
              <a v-if="episode.show.spotifyLink" :href="episode.show.spotifyLink">
                <nuxt-img src="/spotify.png" alt="Spotify podcasts link" />
              </a>
            </div>
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
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app, params }) {
    const show = params.slug
    const episode = params.episode

    try {
      await app.$sanity.fetch(`
        *[
          _type=="podcast_episode" &&
          slug.current=="${episode}" &&
          show->slug.current=="${show}"
        ]{}
      `)

      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params
    const show = params.slug
    const episodeSlug = params.episode

    const episode = useSanity({
      query: `*[
          _type=="podcast_episode" &&
          slug.current=="${episodeSlug}" &&
          show->slug.current=="${show}"
        ]{
          ...,
          "body": showNotes,
          "showNotes": null,
          show->{
            title,
            slug,
            linkApple,
            linkGoogle,
            spotifyLink,
            hosts[] -> {
              name,
              slug
            }
          }
        }
      `,
      single: true,
      useMeta: true
    })

    return { episode }
  },
  head: {},
})
</script>
