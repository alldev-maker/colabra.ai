<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">
        Mobile electronic lab<br class="hidden sm:inline" />
        notebook for Android & iOS
      </h1>
      <p class="page-subhead">
        Lab notes, tasks, protocols — Colabra is your team’s<br
          class="hidden lg:inline"
        />
        all-in-one lab information management system on the go.
      </p>
      <nuxt-link to="/demo/" class="primary-btn mt-8 inline-flex h-12 px-6">
        Request demo
      </nuxt-link>
    </PageSection>
    <PageSection spacing="mt-20">
      <nuxt-img
        src="/illustrations/mobile.svg"
        alt="Mobile science"
        width="500"
        class="pb-2"
      />
      <h2 class="sub-heading">Science — across all your devices</h2>
      <p class="lead">
        Access your notes and research tasks whenever you need them.
      </p>
    </PageSection>
    <AppCompatibility />
    <PageSection spacing="mt-20">
      <h2 class="sub-heading">Integrate paper notes</h2>
      <p class="lead">
        Take your lab notes however you're used to. Then, use the Colabra
        document<br class="hidden lg:inline" />
        scanner to digitize your lab notebook for search and collaboration.
      </p>
    </PageSection>
    <NarrowImg class="mt-4">
      <nuxt-img
        width="700"
        src="/screenshots/mobile-scan.png"
        alt="Mobile lab notebook scanning"
      />
    </NarrowImg>
    <PageSection spacing="pt-20 mt-20">
      <h2 class="page-head">Get started with Colabra today</h2>
      <p class="page-subhead">
        Bring your whole lab together in a collaborative smartphone research app
        you'll actually enjoy using every day.
      </p>
      <nuxt-link to="/demo/" class="primary-btn mt-8 inline-flex h-12 px-6">
        Request demo
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
      query: `*[_type=="page" && slug.current=="mobile"]`,
      single: true,
      useMeta: true
    })

    return { page }
  },
  head: {},
})
</script>
