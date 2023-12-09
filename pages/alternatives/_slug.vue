<template>
  <div class="container pb-24">
    <div v-if="alternative">
      <CombinedLogos :data="alternative" align="center" icon="close" />
      <PageSection spacing="mb-12 md:mb-20">
        <h1 class="page-head">{{ $site.name }} vs. {{ alternative.title || alternative.name }}</h1>
        <p class="page-subhead">
          Understand the differences between {{ alternative.title || alternative.name }} and Colabra
          to choose an ELN and project management software that's right
          for your team's needs and budget.
        </p>
      </PageSection>
      <ContentList :data="alternative" nested>
        <template #after-nav>
          <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
          <p class="mt-4 text-ui-secondary-400">
            Get your whole lab on the same page today.
          </p>
          <nuxt-link to="/" class="text-ui-primary font-semibold"
            >Learn more <mdicon name="arrow-right" width="16"
          /></nuxt-link>
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
      await app.$sanity.fetch(`*[_type=="alternative_page" && slug.current=="${params.slug}"]{}`)
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute()
    const alternative = useSanity({
      query: `*[_type=="alternative_page" && slug.current=="${route.value.params.slug}"]{...}`,
      single: true,
      useMeta: true
    })

    return { alternative }
  },
  head: {},
})
</script>
