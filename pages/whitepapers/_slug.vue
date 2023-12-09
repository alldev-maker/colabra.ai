<template>
  <div class="container pb-24">
    <div v-if="whitepaper">
      <PageSection spacing="mb-12 md:mb-20" align="left">
        <nuxt-link
          to="/whitepapers"
          class="mb-6 lg:mb-6 text-ui-secondary-300"
        >
          <mdicon name="arrow-left" width="12" class="mr-1" />All whitepapers
        </nuxt-link>
        <h1 class="text-4xl lg:text-5xl">{{ whitepaper.title }}</h1>
        <p class="text-lg lg:text-xl text-ui-secondary-400">
          {{ whitepaper.description }}
        </p>
        <SanityFile :asset-id="whitepaper.pdfFile.asset._ref">
          <template #default="{ src }">
            <a
              :href="src"
              target="_blank"
              class="primary-btn mt-8 inline-flex w-fit h-12 px-6">
              <mdicon name="file-document-outline" class="mr-2" /> Download whitepaper
            </a>
          </template>
        </SanityFile>
      </PageSection>
      <PageSection spacing="mb-6" align="left">
        <SanityRichText v-if="whitepaper && whitepaper.body" :blocks="whitepaper.body" class="text-lg"/>
      </PageSection>
      <PageSection spacing="py-16 md:py-24">
        <nuxt-img
          src="/illustrations/remote.svg"
          alt="Remote collaboration between labs"
          width="500"
          class="pb-2"
        />
        <h2 class="page-head text-2xl md:text-3xl lg:text-4xl">
          Work with a trusted partner
        </h2>
        <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
          Schedule a personalized demo of Colabra's capabilities and how it would fit with your research workflows and tooling.
        </p>
        <div class="inline-flex gap-4">
          <nuxt-link
            to="/demo/"
            class="primary-btn mt-8 inline-flex h-12 px-6 mb-24"
            >
            Request a demo
          </nuxt-link>
        </div>
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
    const whitepaper = useSanity({
      query: `*[_type=="whitepaper_page" && slug.current == '${param.slug}']`,
      single: true,
      useMeta: true
    })

    return {
      whitepaper,
    }
  },
  head: {},
})
</script>
