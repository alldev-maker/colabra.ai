<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">R&D whitepapers & guides</h1>
      <p class="page-subhead">
        Understand the business case for the digital transformation of scientific R&D<br
          class="hidden lg:inline"
        />
        and specific topics such as lab management, compliance, and data governance.
      </p>
    </PageSection>
    <PageSection spacing="mt-12" align="left" :max-width="2">
      <Card
        v-for="whitepaper in whitepapers"
        :key="whitepaper._id"
        :data="whitepaper"
        :link="`/whitepapers/${whitepaper.slug.current}`"
        logo />
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const whitepapers = useSanity({
      query: `*[_type=="whitepaper_page"] | order(orderRank asc)`
    })

    const page = useSanity({
      query: `*[_type=="page" && slug.current=="whitepapers"]`,
      single: true,
      useMeta: true
    })

    return {
      page,
      whitepapers,
    }
  },
  head: {},
})
</script>
