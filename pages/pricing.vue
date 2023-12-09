<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">A plan for every lab</h1>
      <Clients />
    </PageSection>
    <PricePlans />
    <PageSection spacing="py-24" :max-width="4">
      <ComplianceBadges />
    </PageSection>
    <div id="features" class="pb-16 md:pb-24 hidden md:block">
      <h2 class="page-head mb-20">Compare plans & features</h2>
      <FeaturesTable />
    </div>
    <PageSection spacing="mb-20">
      <h2 class="page-head">Questions & answers</h2>
      <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
        More questions?
        <a href="mailto:hello@colabra.ai" class="text-ui-primary"
          >Contact support →</a
        >
      </p>
    </PageSection>
    <PageSection align="left">
      <div v-if="page && page.body">
        <SanityRichText :blocks="page.body"/>
      </div>
    </PageSection>
    <PageSection spacing="pt-16 md:pt-24">
      <FeaturedIn />
    </PageSection>
    <PageSection spacing="pt-20 my-5">
      <nuxt-img
        src="/illustrations/remote.svg"
        alt="Remote collaboration between labs"
        width="500"
        class="pb-2"
      />
      <h2 class="page-head">Get started with Colabra today</h2>
      <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
        Try Colabra risk-free today, add your whole team as you grow.
      </p>
      <nuxt-link
        to="/demo/"
        class="primary-btn mt-8 inline-flex h-12 px-6 mb-24"
      >
        Request a demo
      </nuxt-link>
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="pricing"]`,
      single: true,
      useMeta: true
    })

    return { page, }
  },
  head: {},
})
</script>
