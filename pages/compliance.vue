<template>
  <div class="container pb-24">
    <PageSection :max-width="4">
      <h1 class="page-head">Trust & compliance</h1>
      <p class="page-subhead">
        Committed to staying compliant and keeping your data private & secure.
      </p>
      <ComplianceBadges />
    </PageSection>
    <PageSection spacing="mt-20">
      <nuxt-img
        src="/illustrations/security.svg"
        alt="Lab security and compliance"
        class="pb-2"
        width="500"
      />
      <h2 class="sub-heading">Your compliant electronic lab software</h2>
      <p class="lead">
        Colabra follows the strictest industry standards to protect your rights
        and help<br class="hidden lg:inline" />
        you meet global and regional privacy and compliance obligations.
      </p>
    </PageSection>
    <Compliances />
    <PageSection spacing="mt-20">
      <h2 class="sub-heading">Enterprise-ready security</h2>
      <p class="lead">
        Our enterprise plan provides all the advanced security features you need
        to<br class="hidden lg:inline" />
        manage access across your research organization.
      </p>
    </PageSection>
    <SecurityFeatures />
    <PageSection spacing="mt-20">
      <nuxt-img
        src="/illustrations/looking-up.svg"
        alt="Lab data backup"
        width="500"
        class="pb-2"
      />
      <h2 class="sub-heading">Safely backed-up</h2>
      <p class="lead">
        We make backups of all your notes and data on an hourly basis (stored
        for 5<br class="hidden lg:inline" />
        weeks), and additional snapshots on a weekly basis (stored forever).
      </p>
    </PageSection>
    <PageSection spacing="pt-10 mt-20">
      <h1 class="page-head">Questions or concerns?</h1>
      <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
        Reach out to our security team at
        <a href="mailto:trust@colabra.ai" class="text-ui-primary"
          >trust@colabra.ai</a
        >
        for more information on data privacy and security at Colabra.
      </p>
      <a
        href="/docs/Security at Colabra.pdf"
        target="_blank"
        class="primary-btn mt-8 inline-flex h-12 px-6"
      >
        <mdicon name="file-lock-outline" class="mr-2" /> Security whitepaper
      </a>
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="compliance"]`,
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
