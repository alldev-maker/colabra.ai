<template>
  <div class="overflow-x-hidden">
    <div class="container">
      <PageSection :max-width="5">
        <div
          class="flex flex-col md:flex-row pb-16 md:pb-16 items-center md:items-left"
        >
          <div
            class="flex-1 md:pr-8 flex flex-col items-center text-center max-w-lg md:text-left md:block"
          >
            <nuxt-link to="/ai-copilot">
              <div class="mt-1 mb-5">
                <span
                  class="rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 px-3 pl-2 py-1 text-sm cursor-pointer"
                >
                  <mdicon
                    name="star-four-points-outline"
                    class="mr-1"
                    size="18"
                  />
                  Now with an enterprise-ready AI Copilot
                </span>
              </div>
            </nuxt-link>
            <h1 class="text-3xl md:text-4xl lg:text-5xl">
              Context-rich R&D documentation, on autopilot.
            </h1>
            <p class="text-xl">
              Colabra catalogs events and data throughout the research
              lifecycle, helping non-technical scientific teams turn siloed data
              into research insights.
            </p>
            <Clients left-aligned />
            <nuxt-link
              to="/demo/"
              class="primary-btn mt-8 inline-flex h-12 px-6"
            >
              Request a demo
            </nuxt-link>
          </div>
          <div class="md:max-w-sm lg:max-w-md m-auto mt-4 md:mt-0">
            <nuxt-img
              src="/illustrations/hero.svg"
              alt="Biology-first scientific R&D PLM"
            />
          </div>
        </div>
      </PageSection>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <div class="container flex flex-col md:flex-row">
        <div
          class="flex-1 order-2 md:order-1 pt-8 md:pt-0 md:pr-16 flex flex-col items-center text-left md:block"
        >
          <h2 class="text-2xl md:text-3xl lg:text-4xl lg:leading-normal mb-8">
            Monitor, narrate, and govern biotech R&D
          </h2>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="star-four-points-outline" class="mr-1" />
            Enterprise-ready AI Copilot
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="flask-outline" class="mr-1" />
            Agile project management
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="notebook-outline" class="mr-1" />
            Research knowledge management
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="map-marker-path" class="mr-1" />
            Workflow monitoring and logging
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="chart-box-outline" class="mr-1" />
            Business intelligence reporting
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="file-certificate-outline" class="mr-1" />
            Compliance administration
          </div>
          <div class="font-medium mb-4 w-full text-left">
            <mdicon name="shield-lock-outline" class="mr-1" />
            IP security governance
          </div>
          <nuxt-link
            to="/pricing/#features"
            class="outline-btn mt-8 md:inline-flex h-12 px-6 hidden"
          >
            Discover all features →
          </nuxt-link>
        </div>
        <div class="flex-2 order-1 md:order-2">
          <div
            class="card h-full transition-shadow flex shadow-lg overflow-hidden"
          >
            <video autoplay muted loop playsinline>
              <source src="/videos/teaser.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="py-16 md:py-24">
      <div class="container mb-8">
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-center">
          The single source of truth
        </h2>
        <p class="page-subhead">
          Centralize all data and integrate your research workflows with
          <br class="hidden lg:inline" />
          support for
          <nuxt-link to="/integrations/" class="text-ui-primary hover:underline"
            >100+ integrations</nuxt-link
          >
          and scientific file formats.
        </p>
      </div>
      <IntegrationSlides :integrations="integrations" />
      <div class="container pt-32">
        <PageSection>
          <FeaturedIn />
        </PageSection>
      </div>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <PageSection :max-width="5">
        <div
          class="container flex flex-col md:flex-row items-center md:items-start"
        >
          <div
            class="flex flex-col order-2 md:order-1 pt-12 md:pt-0 md:pr-16 items-center text-center md:text-left md:block"
          >
            <CombinedLogos :data="quoteLogos" align="left" />
            <h1
              class="text-ui-secondary-700 text-2xl md:text-4xl font-normal lg:leading-normal italic"
            >
              “Colabra is an intuitive tool to track, document, and organize lab
              work. It has increased visibility into our ongoing projects and
              allowed for more collaboration and less re-work.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — James Gaffney (Senior Research Associate, Native Microbials)
            </p>
            <nuxt-link
              to="/case-studies/"
              class="outline-btn mt-8 inline-flex h-12 px-6"
            >
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
          Discover Colabra today
        </h2>
        <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
          Bring your whole team together in a collaborative lab<br
            class="hidden lg:inline"
          />
          software you'll actually enjoy using every day.
        </p>
        <nuxt-link
          to="/demo/"
          class="primary-btn mt-8 inline-flex h-12 px-6 mb-24"
        >
          Request a demo
        </nuxt-link>
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
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: '*[_type=="page" && slug.current=="home"]',
      single: true,
      useMeta: true,
    })

    const integrations = useSanity({
      query:
        '*[_type=="integration_page" && comingSoon!=true]{..., category -> {title}, "body": null}',
    })

    const accordion = ref({
      selection: 'Project management',
      list: [
        {
          label: 'Project management',
          description:
            'Make sure your team has clarity and context to do their best. Share milestones, assign tasks, and gain a birds-eye-view into every experiment at your lab.',
          screenshot: '/screenshots/project.png',
        },
        {
          label: 'Electronic lab notebook',
          description:
            'Document and preserve experiments with a collaborative editor, integrations of experimental data, and compliant e-signatures.',
          screenshot: '/screenshots/experiment.png',
        },
        {
          label: 'Protocols & SOPs',
          description:
            'Standardize operating procedures and ensure reproducibility with templates, versioning, and organizational data governance.',
          screenshot: '/screenshots/protocols.png',
        },
      ],
    })

    const screenshots = ref({})
    accordion.value.list.forEach((i) => {
      screenshots.value[i.label] = i.screenshot
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
      quoteLogos,
      accordion,
      screenshots,
    }
  },
  head: {},
})
</script>
