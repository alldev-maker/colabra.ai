<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Terms and privacy</h1>
      <p class="page-subhead">
        TL;DR: Colabra does not own your data, or sell it to others.
      </p>
      <nuxt-img
        src="/illustrations/looking-up.svg"
        alt="Terms of service"
        width="500"
        class="pb-2"
      />
    </PageSection>
    <TermsLinks />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="terms"]`,
      single: true,
      useMeta: true
    })

    return { page }
  },
  head: {},
})
</script>
