<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Modern Lab Community</h1>
      <p class="page-subhead">
        Join our community of modern scientists and get the advice, resources<br
          class="hidden lg:inline"
        />
        and network you need to do better scientific research.
      </p>
      <a
        href="https://modernlab.colabra.ai/join?invitation_token=bb1f1109234a29b15598db8b15cc187d8605bb98-ed4ed8de-e0b7-4171-9458-02d107fcfc0c"
        class="primary-btn mt-8 mb-12 inline-flex h-12 px-6"
      >
        Enter the community
      </a>
      <nuxt-img
        src="/illustrations/collaboration.svg"
        alt="Scientific community"
        width="500"
        class="pb-2"
      />
    </PageSection>
    <PageSection align="left" spacing="mt-10">
      <div v-if="page && page.body">
        <SanityRichText :blocks="page.body"/>
      </div>
    </PageSection>
    <PageSection spacing="pt-10">
      <nuxt-img
        src="/illustrations/remote.svg"
        alt="Remote scientific collaboration"
        width="500"
        class="pb-2"
      />
      <h2 class="page-head">Become a better scientist</h2>
      <p class="page-subhead">
        Join our mastermind community to learn best research<br
          class="hidden lg:inline"
        />
        practices from digital native scientists just like you.
      </p>
      <a
        href="https://modernlab.colabra.ai/join?invitation_token=bb1f1109234a29b15598db8b15cc187d8605bb98-ed4ed8de-e0b7-4171-9458-02d107fcfc0c"
        class="primary-btn mt-8 inline-flex h-12 px-6"
      >
        Join Modern Lab
      </a>
    </PageSection>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app }) {
    try {
      await app.$sanity.fetch(`*[_type=="page" && slug.current=="community"]{}`)

      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const page = useSanity({
      query: `
        *[_type=="page" && slug.current=="community"]
      `,
      single: true, 
      useMeta: true
    })

    return { page }
  },
  head: {},
})
</script>
