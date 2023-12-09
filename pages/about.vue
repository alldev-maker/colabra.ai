<template>
  <div>
    <div class="container pb-16 md:pb-24">
      <PageSection>
        <h1 class="page-head">
          Our mission is to increase<br class="hidden lg:inline" />
          the world's scientific output
        </h1>
        <p class="page-subhead">
          Science should be at the cutting edge, but the way it's done has
          barely<br class="hidden lg:inline" />
          changed in decades. We're here to upgrade the scientific method.
        </p>
        <Clients />
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
              “As a scientist and entrepreneur, I've experienced firsthand the
              lack of tools designed for researchers to plan, execute, and
              analyze experiments. I see Colabra becoming their go-to platform.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — Milad Alucozai, Head of Bio & Deep Tech, BoxOne Ventures
            </p>
          </div>
          <nuxt-img
            src="/miladalucozai.jpg"
            alt="Milad Alucozai"
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
          alt="Remote collaboration"
          width="500"
          class="pb-8"
        />
        <h2 class="sub-heading">Backed by brilliant investors</h2>
        <p class="lead mb-8">
          Village Global, Builders, Box One, Inovia, Jude Gomila, the
          Technical<br class="hidden lg:inline" />
          Director of OpenAI, and founders of biotech startups.
        </p>
        <Investors heading-hidden />
      </PageSection>
    </div>
    <div class="py-16 md:py-24 bg-ui-secondary-25">
      <div class="container">
        <PageSection :max-width="4">
          <h2 class="page-head">Serious about security</h2>
          <p class="page-subhead mb-8">
            Colabra keeps your IP safe and admissible in the court of law with
            enterprise-grade security features, regular third-party audits and
            privacy protections.
          </p>
          <ComplianceBadges />
        </PageSection>
      </div>
    </div>
    <div class="container pb-16 md:pb-24">
      <PageSection spacing="pt-16 md:pt-24">
        <h2 class="sub-heading">Manifesto</h2>
        <p class="lead">Our stance on building software for better science.</p>
      </PageSection>
      <PageSection align="left" spacing="mt-10 pb-12 md:pb-20">
        <h2>Build for the scientists</h2>
        <p>
          Scientific software tools should be built with the end users — the
          scientists — in mind. Making scientists productive is more important
          than keeping managers happy.
        </p>

        <h2>Opinionated software</h2>
        <p>
          Scientific software products should be opinionated. It's the only way
          the product can truly do the heavy lifting for you. Flexible products
          let everyone invent their own workflows, which leads to avoidable
          errors and unreproducible science.
        </p>

        <h2>Aim for clarity</h2>
        <p>
          Don’t add unnecessary features, and keep the interface simple. Don’t
          invent terms, don’t add complexity where it didn’t exist before. Make
          scientists’ lives easier.
        </p>

        <h2>Write a changelog</h2>
        <p>
          Consistent changelogs communicate to the user new features, the value
          they get from your product, and your commitment to improving it.
        </p>

        <h2>Create magical experiences</h2>
        <p>
          Many scientists are used to having to use the lowest common
          denominator of tools for many years, if not decades. Create magical
          experiences for these scientists, and allow them to do things they
          never thought possible.
        </p>
      </PageSection>
      <FeaturedIn />
      <PageSection spacing="pt-12 md:pt-20">
        <nuxt-img
          src="/illustrations/collaboration.svg"
          alt="Team"
          width="500"
          class="pb-2"
        />
        <h2 class="page-head">Join our team</h2>
        <p class="page-subhead">
          We're a remote-first team passionate about the potential of<br
            class="hidden lg:inline"
          />
          design and science to change the world to the better.
        </p>
        <a
          href="https://jobs.colabra.ai/"
          target="_blank"
          class="primary-btn mt-8 inline-flex h-12 px-6"
        >
          Job openings
        </a>
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
      query: `
        *[_type=="page" && slug.current=="about"]{
          ...,
          "body": null
        }`,
      single: true,
      useMeta: true
    })

    const quoteLogos = ref({
      featured_image: {
        filename: '/logos/box1.svg',
        alt: 'Box 1',
      },
    })

    return { page, quoteLogos }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.img-wrapper {
  @apply px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6;
}

.img {
  @apply flex flex-col max-w-screen-md overflow-hidden bg-white border rounded shadow-md mx-auto;
}
</style>
