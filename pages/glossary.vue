<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Scientific R&D digital transformation glossary</h1>
      <p class="page-subhead">
        A comprehensive list of scientific IT terms and definitions.
      </p>
      <nuxt-img
        src="/illustrations/looking-up.svg"
        alt="R&D digital transformation glossary"
        width="500"
        class="pb-2"
      />
    </PageSection>

    <PageSection align="left" spacing="mt-10">
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
  async validate({ app }) {
    try {
      await app.$sanity.fetch(`*[_type=="page" && slug.current=="method"]{}`)

      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="glossary"]`,
      single: true,
      useMeta: true
    })

    return {
      page,
    }
  },
  head: {},
})
</script>
