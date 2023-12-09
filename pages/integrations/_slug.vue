<template>
  <div class="container pb-24">
    <div v-if="integration">
      <CombinedLogos :data="integration" align="center" />
      <PageSection spacing="mb-12 md:mb-20">
        <h1 class="page-head">{{ $site.name }} & {{ integration.name || integration.title }}</h1>
        <p class="page-subhead">
          {{ integration.description }}
        </p>
      </PageSection>
      <ContentList :data="integration" nested />
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(`*[_type=="integration_page" && slug.current=="${params.slug}"]{}`)
      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params
    const integration = useSanity({
      query: `*[_type=="integration_page" && slug.current=="${params.slug}"]{..., category -> {title}}`,
      single: true,
      useMeta: true,
      resolveTitle(data){
        const value = data.value
        return `${value.title} integration`
      }
    })

    return { integration }
  },
  head: {},
})
</script>
