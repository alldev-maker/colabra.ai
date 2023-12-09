<template>
  <div class="overflow-x-hidden">
    <div class="container">
      <PageSection :max-width="5">
        <div
          class="
            flex flex-col
            md:flex-row
            pb-16
            md:pb-16
            items-center
            md:items-left
          "
        >
          <div
            class="
              flex-1
              md:pr-8
              flex flex-col
              items-center
              text-center
              max-w-lg
              md:text-left md:block
            "
          >
            <div class="logo mb-6">
              <nuxt-img alt="Microsoft 365" src="/logos/microsoft/solutions-partner.png" />
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl lg:leading-normal">
              Enterprise-ready AI Copilot for R&D decision makers
            </h1>
            <p class="text-xl">
              Eliminate data silos and translate scattered data into actionable insights.
            </p>
            <div class="inline-flex gap-4">
              <nuxt-link
                to="/demo/"
                class="primary-btn mt-8 inline-flex h-12 px-6 mb-24"
                >
                Request a demo
              </nuxt-link>
              <a
                href="/docs/Enterprise-ready AI Copilot for R&D decision makers.pdf"
                target="_blank"
                class="outline-btn mt-8 inline-flex h-12 px-6"
              >
                <mdicon name="file-document-outline" class="mr-2" /> Download whitepaper
              </a>
            </div>
          </div>
          <div class="md:max-w-md lg:max-w-lg m-auto mt-4 md:mt-12 md:pl-12">
            <nuxt-img
              src="/ai-copilot.png"
              alt="Scientific R&D cloud"
            />
          </div>
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
            Activate unstructured data with AI
          </h2>
          <Accordion
            v-model="accordion.selection"
            :data-list="accordion.list"
          />
          <nuxt-link
            to="/pricing/#features"
            class="outline-btn mt-8 hidden md:inline-flex h-12 px-6"
          >
            Discover all features →
          </nuxt-link>
        </div>
        <div class="flex-2 order-1 md:order-2">
          <PreloadedImage
            :src="screenshots[accordion.selection]"
            :alt="accordion.selection"
            :srcs="Object.values(screenshots)"
            :image-class="['border', 'border-ui-border', 'rounded-md']"
          />
        </div>
      </div>
    </div>
    <div class="py-16 md:py-24">
      <div class="container mb-8">
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-center">
          The single source of truth
        </h2>
        <p class="page-subhead">
          Embed data into experimental notes, and integrate research workflows
          <br class="hidden lg:inline" />
          with support for
          <nuxt-link to="/integrations/" class="text-ui-primary hover:underline"
            >100+ integrations</nuxt-link
          >
          and scientific file formats.
        </p>
      </div>
      <IntegrationSlides :integrations="integrations" />
    </div>
    <div class="py-16 md:py-24 mt-12 bg-ui-secondary-25">
      <div class="container">
        <PageSection :max-width="4">
          <h2 class="page-head text-2xl md:text-3xl lg:text-4xl">
            Your enterprise AI advantage
          </h2>
          <p class="page-subhead mb-8">
            With private AI deployment on your own Azure tenant, Colabra ensures SOC 2 Type 2 compliance along with enterprise-grade security features and privacy protections.
          </p>
          <ComplianceBadges />
        </PageSection>
      </div>
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
          Deploy your private AI Copilot today
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
            href="/docs/Enterprise-ready AI Copilot for R&D decision makers.pdf"
            target="_blank"
            class="outline-btn mt-8 inline-flex h-12 px-6"
          >
            <mdicon name="file-document-outline" class="mr-2" /> Download whitepaper
          </a>
        </div>
      </PageSection>
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
              “Colabra has the opportunity to speed up productivity and insights
              across industry, startups, and some of the most important research
              organizations on the planet.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — Matt De Silva. Founder, Notable Labs
            </p>
            <nuxt-link to="/case-studies/" class="outline-btn mt-8 inline-flex h-12 px-6">
              Meet our customers →
            </nuxt-link>
          </div>
          <nuxt-img
            src="/mattdesilva.jpg"
            alt="Matt De Silva"
            width="220"
            class="rounded-md object-contain order-1 md:order-2"
          />
        </div>
      </PageSection>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: '*[_type=="page" && slug.current=="ai-copilot"]',
      single: true,
      useMeta: true,
    })

    const integrations = useSanity({
      query:
        '*[_type=="integration_page" && comingSoon!=true]{..., category -> {title}, "body": null}',
    })

    const accordion = ref({
      selection: 'Monitor research progress across all projects',
      list: [
        {
          label: 'Monitor research progress across all projects',
          description:
            'Achieve greater transparency with interdisciplinary collaboration and communication. Aggregate progress across all connected hardware and software tools.',
          screenshot: '/screenshots/ai-copilot.png',
        },
        {
          label: 'Assess risk and devise mitigation strategies',
          description:
            'Identify areas of inefficiency or bottlenecks in the laboratory workflow and propose solutions to streamline processes. Assess the effectiveness of current SOPs and propose updates or modifications based on observed results and team feedback.',
          screenshot: '/screenshots/ai-copilot.png',
        },
        {
          label: 'Plan future research and resource needs',
          description:
            'Prioritize and allocate resources across stakeholders and teams effectively to minimize blockers. Assess project feasibility and potential impact to uncover synergies with other ongoing or previous projects.',
          screenshot: '/screenshots/ai-copilot.png',
        },
        {
          label: 'NLP search based on context and intent',
          description:
            'Search queries based on natural language, making advanced search capabilities accessible to everyone. Understand the context and intent of search queries, providing more relevant results.',
          screenshot: '/screenshots/ai-copilot.png',
        },
      ],
    })

    const screenshots = ref({})
    accordion.value.list.forEach((i) => {
      screenshots.value[i.label] = i.screenshot
    })

    const quoteLogos = ref({
      featured_image: {
        filename: '/logos/notablelabs.svg',
        alt: 'Notable Labs',
      },
    })

    return {
      page,
      integrations,
      quoteLogos,
      accordion,
      screenshots,
    }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.logo {
  @apply h-14 border-2 border-ui-border p-2 rounded-md bg-white;
  max-width: 200px;
}

.logo img {
  @apply object-contain w-full h-full;
}
</style>
