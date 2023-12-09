<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">You're in great company</h1>
      <p class="page-subhead">
        Researchers at leading academic and commercial R&D labs choose Colabra
        to manage research and share knowledge across their teams.
      </p>
    </PageSection>
    <PageSection spacing="mt-12" :max-width="2">
      <Card
        v-for="caseStudy in caseStudies"
        :key="caseStudy._id"
        :data="caseStudy"
        :link="`/case-studies/${caseStudy.slug.current}`"
        logo
      />
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const caseStudies = useSanity({
      query: `*[_type=="case_study_page"]`,
    })

    const page = useSanity({
      query: `*[_type=="page" && slug.current=="case-studies"]`,
      single: true,
      useMeta: true
    })

    return {
      caseStudies,
      page,
    }
  },
  head: {},
})
</script>
