<template>
  <div class="container pb-24">
    <div v-if="caseStudy">
      <CombinedLogos :data="caseStudy" />
      <div class="max-w-4xl mb-12 md:mb-20">
        <h1 class="text-4xl lg:text-5xl">{{ caseStudy.title }}</h1>
        <p class="text-lg lg:text-xl mt-6 lg:mt-10">
          {{ caseStudy.description }}
        </p>
      </div>
      <ContentList :data="caseStudy" nested>
        <template #before-body>
          <div class="pb-5 mb-10 border-b border-gray-300">
            <h4 class="text-lg lg:text-xl font-medium">Challenge</h4>
            <p class="text-md lg:text-lg">{{ caseStudy.challenge }}</p>
            <h4 class="text-lg lg:text-xl font-medium pt-6">Solution</h4>
            <p class="text-md lg:text-lg">{{ caseStudy.solution }}</p>
          </div>
        </template>
        <template #after-nav>
          <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
          <p class="mt-4 text-ui-secondary-400">
            Get your whole lab on the same page today.
          </p>
          <nuxt-link to="/" class="text-ui-primary font-semibold"
            >Learn more <mdicon name="arrow-right" width="16"
          /></nuxt-link>
        </template>
      </ContentList>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  async validate({ app, params }) {
    try {
      await app.$sanity.fetch(`*[_type=="case_study_page" && slug.current=="${params.slug}"]{}`)

      return true
    } catch (err) {
      return false
    }
  },
  setup() {
    const route = useRoute().value
    const params = route.params
    const caseStudy = useSanity({
      query: `*[_type=="case_study_page" && slug.current=="${params.slug}"]`,
      single: true,
      useMeta: true
    })

    return { caseStudy }
  },
  head: {},
})
</script>

<style lang="postcss">
blockquote {
  font-family: adelle;
  background: none;
  border: none;
  font-size: 28px;
  font-style: italic;
  line-height: 1.2;
  color: var(--color-ui-primary);
  border-left: 5px solid #eee;
  padding-right: 20%;
  padding-left: 18px;
}
</style>
