<template>
  <div class="overflow-x-hidden">
    <div class="container pb-24">
      <!-- <CombinedLogos :data="partner" align="center" icon="close" /> -->
      <PageSection>
        <div class="logo mb-6">
          <nuxt-img alt="Microsoft 365" src="/logos/microsoft/solutions-partner.png" />
        </div>
        <h1 class="page-head">
          The only R&D cloud platform built for the Microsoft ecosystem
        </h1>
        <p class="page-subhead">
          We partnered with Microsoft to accelerate your research with Microsoft 365,<br
            class="hidden lg:inline"
          />
          Azure, Teams, Outlook, GitHub, Power BI, OneDrive and Dynamics 365.
        </p>
        <MicrosoftIntegrations />
        <div class="inline-flex gap-4">
          <nuxt-link
            to="/demo/"
            class="primary-btn mt-8 inline-flex h-12 px-6 mb-24"
            >
            Request a demo
          </nuxt-link>
          <a
            href="/docs/Colabra Microsoft integration.pdf"
            target="_blank"
            class="outline-btn mt-8 inline-flex h-12 px-6"
          >
            <mdicon name="file-document-outline" class="mr-2" /> Download whitepaper
          </a>
        </div>
      </PageSection>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <div class="container flex flex-col md:flex-row">
        <div
          class="
            flex-1
            order-2
            md:order-1
            pt-8
            md:pt-0 md:pr-16
            flex flex-col
            items-center
            text-left
            md:block
          "
        >
          <h2 class="text-2xl md:text-3xl lg:text-4xl lg:leading-normal mb-8">
           Modern workplace for complex scientific R&D
          </h2>
          <!-- Increase R&D velocity with -->
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="flask-outline" class="mr-1" />
            Agile project management
          </button>
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="notebook-outline" class="mr-1" />
            Electronic lab notebook
          </button>
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="map-marker-path" class="mr-1" />
            Workflow orchestration
          </button>
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="chart-box-outline" class="mr-1" />
            Project status reporting
          </button>
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="file-certificate-outline" class="mr-1" />
            Compliance administration
          </button>
          <button
            class="font-medium mb-4 w-full text-left">
            <mdicon name="shield-lock-outline" class="mr-1" />
            IP security governance
          </button>
          <nuxt-link
            to="/pricing/#features"
            class="outline-btn mt-8 md:inline-flex h-12 px-6 hidden"
          >
            Discover all features →
          </nuxt-link>
        </div>
        <div class="flex-2 order-1 md:order-2">
          <div class="card h-full transition-shadow flex shadow-lg overflow-hidden">
            <video autoplay muted loop playsinline>
              <source src="/videos/teaser.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="py-16 md:py-24">
      <div class="container mb-8">
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-center">
          Integrate all your tools
        </h2>
        <p class="page-subhead">
          Embed data into experimental notes, and integrate research workflows
          <br class="hidden lg:inline" />
          across <nuxt-link to="/integrations/" class="text-ui-primary hover:underline"
            >100+ scientific tools</nuxt-link
          > your team already relies on.
        </p>
      </div>
      <IntegrationSlides :integrations="integrations" />
      <div class="container pt-32">
        <PageSection>
          <Clients />
        </PageSection>
      </div>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <PageSection :max-width="5">
        <div
          class="
            container
            flex flex-col
            md:flex-row
            items-center
            md:items-start
          "
        >
          <div
            class="
              flex flex-col
              order-2
              md:order-1
              pt-12
              md:pt-0 md:pr-16
              items-center
              text-center
              md:text-left md:block
            "
          >
            <CombinedLogos :data="quoteLogos" align="left" />
            <h1
              class="
                text-ui-secondary-700 text-2xl
                md:text-4xl
                font-normal
                lg:leading-normal
                italic
              "
            >
            “Colabra is an intuitive tool to track, document, and organize lab work.
              It has increased visibility into our ongoing projects and allowed for more collaboration and less re-work.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — James Gaffney (Senior Research Associate, Native Microbials)
            </p>
            <nuxt-link to="/case-studies/" class="outline-btn mt-8 inline-flex h-12 px-6">
              Meet our customers →
            </nuxt-link>
          </div>
          <nuxt-img
            src="/jamesgaffney.jpg"
            alt="James Gaffney"
            width="220"
            class="rounded-md object-contain order-1 md:order-2"
          />
        </div>
      </PageSection>
    </div>
    <div class="container">
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
          <a
            href="/docs/Colabra Microsoft integration.pdf"
            target="_blank"
            class="outline-btn mt-8 inline-flex h-12 px-6"
          >
            <mdicon name="file-document-outline" class="mr-2" /> Download whitepaper
          </a>
        </div>
        <Investors />
      </PageSection>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <div class="container">
        <PageSection :max-width="4">
          <h2 class="page-head text-2xl md:text-3xl lg:text-4xl">
            Stay secure and compliant
          </h2>
          <p class="page-subhead mb-8">
            Colabra keeps your IP safe and admissible in the court of law with
            enterprise-grade security features, regular third-party audits and
            privacy protections.
          </p>
          <ComplianceBadges />
        </PageSection>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: '*[_type=="page" && slug.current=="microsoft"]',
      single: true,
      useMeta: true,
    })

    const integrations = useSanity({
      query:
        '*[_type=="integration_page" && comingSoon!=true]{..., category -> {title}, "body": null}',
    })

    const partner = ref({
      featured_image: {
        filename: '/logos/microsoft/microsoft.svg',
        alt: 'Microsoft',
      },
    })

    const quoteLogos = ref({
      featured_image: {
        filename: '/logos/nativemicrobials.jpg',
        alt: 'Native Microbials',
      },
    })

    return {
      page,
      integrations,
      partner,
      quoteLogos,
    }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.logo {
  @apply h-14 border-2 border-ui-border p-2 rounded-md bg-white;
}

.logo img {
  @apply object-contain w-full h-full;
}
</style>
