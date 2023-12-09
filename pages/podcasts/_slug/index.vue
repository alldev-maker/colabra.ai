<template>
  <div>
    <div v-if="podcast">
      <h2>{{ podcast.title }}</h2>
      <p v-if="podcast.hosts" class="text-ui-secondary-600">
        <span v-for="host in podcast.hosts" :key="host._id">
          <template v-if="host.slug">
            With
            <nuxt-link :to="`/podcasts/host/${host.slug.current}`">
              {{ host.name }}
            </nuxt-link>
            {{
              host.slug.current ===
              podcast.hosts[podcast.hosts.length - 1].slug.current
                ? ''
                : ','
            }}
          </template>
        </span>
        · {{ podcast.socialProof }}
      </p>
      <p class="text-ui-secondary-400">{{ podcast.description || '' }}</p>
      <p class="text-ui-secondary-400 mb-12">
        Interested in joining our podcast?
        <a class="text-ui-primary" href="mailto:pods@colabra.ai"
          >Get in touch -></a
        >
      </p>
      <iframe
        v-if="podcast.slug"
        width="100%"
        height="390"
        frameborder="no"
        scrolling="no"
        seamless
        :src="`https://share.transistor.fm/e/${podcast.slug.current}/playlist/light`"
      ></iframe>
      <div class="flex justify-center my-12">
        <a v-if="podcast.linkApple" :href="podcast.linkApple">
          <nuxt-img src="/apple-podcasts.png" alt="Apple podcasts link" />
        </a>
        <a v-if="podcast.linkGoogle" :href="podcast.linkGoogle">
          <nuxt-img src="/google-podcasts.png" alt="Google podcasts link" />
        </a>
        <a v-if="podcast.spotifyLink" :href="podcast.spotifyLink">
          <nuxt-img src="/spotify.png" alt="Spotify podcasts link" />
        </a>
      </div>
      <div v-if="episodes" class="flex flex-wrap mt-4 md:mt-8">
        <episode-item
          v-for="episode in episodes"
          :key="episode._id"
          :data="episode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  layout: 'podcast',
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(
        `*[_type=="podcast_show" && slug.current =="${params.slug}"]{}`
      )
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params

    const podcast = useSanity({
      query: `*[_type=="podcast_show" && slug.current =="${params.slug}"]{
        ...,
        hosts[]->{
          _id,
          name,
          slug
        }
      }`,
      single: true,
      useMeta: true,
    })

    const episodes = useSanity({
      query: `*[_type=="podcast_episode" && show->slug.current=="${params.slug}"]{
        ...,
        show->{
          slug,
          title
        }
      } | order(publishedAt desc)`,
    })

    return {
      podcast,
      episodes,
    }
  },
  head: {},
})
</script>
