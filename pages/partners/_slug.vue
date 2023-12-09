<template>
  <div class="container pb-24">
    <div v-if="partner">
      <CombinedLogos :data="partner" align="center" />
      <PageSection spacing="mb-12 md:mb-20">
        <h1 class="page-head">{{ $site.name }} & {{ partner.name || partner.title }}</h1>
        <p class="page-subhead">
          {{ partner.description }}
        </p>
      </PageSection>
      <ContentList :data="partner" nested />
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(`*[_type=="partner_page" && slug.current=="${params.slug}"]{}`)
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params
    const partner = useSanity({
      query: `*[_type=="partner_page" && slug.current=="${params.slug}"]{..., category -> {title}}`,
      single: true,
      useMeta: true,
      resolveTitle(data){
        const value = data.value
        return `${value.title} partner`
      }
    })

    return { partner }
  },
  head: {},
})
</script>
