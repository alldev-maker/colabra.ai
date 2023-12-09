<template>
  <div class="overflow-x-hidden">
    <div class="container pb-24">
      <PageSection>
        <h1 class="page-head">R&D cloud for Academics</h1>
        <p class="page-subhead">
          LIMS/ELN for individual scientists and academic labs, university
          departments and classrooms.
        </p>
        <Clients />
        <nuxt-link to="/demo/" class="primary-btn mt-8 inline-flex h-12 px-6">
          Request a demo
        </nuxt-link>
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
            Unified platform for academic science
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
          Centralize all data and integrate your research workflows with<br
            class="hidden lg:inline"
          />
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
              We use Colabra for nearly everything. It replaced our paper notebooks, making it easy to search, reference and index experiments. It also improved our project management with real-time comments and task assignments.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — Chris Jeffrey, Associate Professor, University of Nevada, Reno
            </p>
            <nuxt-link to="/case-studies/" class="outline-btn mt-8 inline-flex h-12 px-6">
              Meet our customers →
            </nuxt-link>
          </div>
          <nuxt-img
            src="/chris-jeffrey.jpg"
            alt="Matt De Silva"
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
          Get started today
        </h2>
        <p class="page-subhead max-w-xl mx-auto sm:max-w-lg md:max-w-xl">
          Try Colabra risk-free now, add your whole lab as you grow.
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
import { defineComponent, ref } from '@nuxtjs/composition-api'
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
        }
      ],
    })

    const screenshots = ref({})
    accordion.value.list.forEach((i) => {
      screenshots.value[i.label] = i.screenshot
    })

    const quoteLogos = ref({
      featured_image: {
        filename: '/logos/nevadareno.png',
        alt: 'University of Nevada, Reno',
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
