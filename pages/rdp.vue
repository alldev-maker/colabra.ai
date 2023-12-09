<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Responsible disclosure</h1>
      <p class="page-subhead">
        Data security is a top priority for Colabra, and we believe in
        working<br class="hidden lg:inline" />
        with skilled security researchers to identify any weaknesses.
      </p>
      <nuxt-img
        src="/illustrations/outsourcing.svg"
        alt="Security audit"
        width="500"
        class="pb-2"
      />
    </PageSection>
    <PageSection align="left">
      <div v-if="page && page.body">
        <SanityRichText :blocks="page.body"/>
      </div>
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="rdp"]`,
      single: true,
      useMeta: true
    })

    return { page }
  },
  head: {},
})
</script>
