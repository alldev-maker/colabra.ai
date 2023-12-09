<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Lab software comparisons</h1>
      <p class="page-subhead">
        When it comes to electronic lab notebooks and inventory management
        systems,<br class="hidden lg:inline" />
        you have options. We've done the research to help you choose one that's
        right for<br class="hidden lg:inline" />
        your team's needs and budget (even if it's not us).
      </p>
    </PageSection>
    <PageSection spacing="mt-12" :max-width="2">
      <Card
        v-for="alternative in alternatives"
        :key="alternative._id"
        :data="alternative"
        logo
        comparison
        :link="`/alternatives/${alternative.slug.current}/`"
      />
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const alternatives = useSanity({
      query: '*[_type=="alternative_page"]{...,"body": null}' // remove 'body' reduce jitter
    })

    const page = useSanity({
      query: '*[_type=="page" && slug.current=="alternatives"] | order(orderRank)',
      single: true,
      useMeta: true
    })

    return {
      alternatives,
      page,
    }
  },
  head: {},
})
</script>
