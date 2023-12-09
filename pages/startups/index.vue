<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Colabra for startups</h1>
      <p class="page-subhead">
        Level up your science startup with real-time collaboration,<br
          class="hidden lg:inline"
        />
        integration of all data, and agile project management.
      </p>
      <Clients />
      <nuxt-link to="/demo/" class="primary-btn mt-8 inline-flex h-12 px-6">
        Request demo
      </nuxt-link>
    </PageSection>
    <PageSection spacing="mt-12" align="left" :max-width="2">
      <h2 class="text-3xl lg:text-4xl">Startup perks</h2>
      <p class="text-lg mb-6">
        Colabra empowers science startups to accelerate their world-changing
        research. Select eligible startup programme to claim your discount:
      </p>

      <Card
        v-for="startup in startups"
        :key="startup._id"
        :data="startup"
        :link="`/startups/${startup.slug.current}`"
        logo />
    </PageSection>
    <PageSection spacing="mt-12" align="center" :max-width="2">
      <nuxt-img
        src="/illustrations/agreement.svg"
        alt="Partner deals"
        width="500"
        class="pb-2"
      />
    </PageSection>
    <PageSection spacing="mt-12" align="left" :max-width="2">
      <h2 class="text-3xl lg:text-4xl">Become a Colabra partner</h2>
      <p class="text-lg mb-6">
        Give your startups access to modern tools that will acelerate their
        research.
      </p>
      <iframe
        src="https://tally.so/embed/w2vrMw?hideTitle=1&alignLeft=1"
        width="100%"
        height="525"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Become a partner"
      ></iframe>
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const startups = useSanity({
      query: `*[_type=="perk_page"] | order(orderRank asc)`
    })

    const page = useSanity({
      query: `*[_type=="page" && slug.current=="startups"]`,
      single: true,
      useMeta: true
    })

    return {
      page,
      startups,
    }
  },
  head: {},
})
</script>
