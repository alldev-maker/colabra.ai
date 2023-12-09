<template>
  <div class="container pb-24">
    <div v-if="startup">
      <CombinedLogos :data="startup" align="center" />
      <PageSection spacing="mb-12 md:mb-20">
        <h1 class="page-head">{{ $site.name }} × {{ startup.name || startup.title }}</h1>
        <p class="page-subhead whitespace-pre-line">
          <!-- <span>{{ startup.top_hero[0].body }}</span> -->
          Level up your science startup with real-time collaboration,
          integration of all data, and agile project management.
        </p>
        <Clients />
        <!-- <nuxt-link
          v-if="startup.top_hero[0].link_to.url.startsWith('/')"
          :to="startup.top_hero[0].link_to.url"
          class="primary-btn mt-8 inline-flex h-12 px-6"
        >
          {{ startup.top_hero[0].link_label }}
        </nuxt-link>
        <a
          v-else
          :href="startup.top_hero[0].link_to.url"
          class="primary-btn mt-8 inline-flex h-12 px-6"
        >
          {{ startup.top_hero[0].link_label }}
        </a> -->
        <nuxt-link
          to="/demo/"
          class="primary-btn mt-8 inline-flex h-12 px-6">
          Request demo
        </nuxt-link>
      </PageSection>
      <PageSection spacing="mb-12" align="center" :max-width="2">
        <nuxt-img
          src="/illustrations/remote.svg"
          alt="Remote startup deals"
          width="500"
          class="pb-2"
        />
      </PageSection>
      <PageSection spacing="mb-6" align="left" :max-width="2">
        <SanityRichText v-if="startup && startup.body" :blocks="startup.body"/>
      </PageSection>
      <PageSection spacing="mb-12 md:mb-20" align="left" :max-width="2">
        <iframe
          src="https://tally.so/embed/3NYLpm?hideTitle=1&alignLeft=1"
          width="100%"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Perk application"
        ></iframe>
      </PageSection>
      <PageSection spacing="mb-12" align="center" :max-width="2">
        <nuxt-img
          src="/illustrations/clarity.svg"
          alt="Science lab management"
          width="500"
          class="pb-2"
        />
      </PageSection>
      <PageSection>
        <!-- <h2 v-if="startup.bottom_hero[0].head" class="page-head">
          {{ startup.bottom_hero[0].head }}
        </h2>
        <p class="page-subhead whitespace-pre-line">
          <span>{{ startup.bottom_hero[0].body }}</span>
        </p>
        <nuxt-link
          v-if="startup.bottom_hero[0].link_to.url.startsWith('/')"
          :to="startup.bottom_hero[0].link_to.url"
          class="primary-btn mt-8 inline-flex h-12 px-6"
        >
          {{ startup.bottom_hero[0].link_label }}
        </nuxt-link>
        <a
          v-else
          :href="startup.top_hero[0].link_to.url"
          class="primary-btn mt-8 inline-flex h-12 px-6"
        >
          {{ startup.top_hero[0].link_label }}
        </a> -->
        <h2 class="page-head">Modern Lab Community</h2>
        <p class="page-subhead whitespace-pre-line">
          Join our community of modern scientists and get the advice, resources and network you need to do better scientific research.
        </p>
        <nuxt-link to="/community" class="primary-btn mt-8 inline-flex h-12 px-6">
          Learn more
        </nuxt-link>
      </PageSection>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const route = useRoute().value
    const param = route.params
    const startup = useSanity({
      query: `*[_type=="perk_page" && slug.current == '${param.slug}']`,
      single: true,
      useMeta: true
    })

    return {
      startup,
    }
  },
  head: {},
})
</script>
