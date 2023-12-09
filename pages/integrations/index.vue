<template>
  <div class="container pb-24">
    <PageSection spacing="mb-12 md:mb-20">
      <h1 class="page-head">Scientific integrations</h1>
      <p class="page-subhead">
        Colabra fits into your existing workflows and centralizes your team's<br
          class="hidden lg:inline"
        />
        knowledge into a single source of truth for the whole lab.
      </p>
    </PageSection>
    <ContentGrid>
      <template #sidebar>
        <ul>
          <li
            v-for="category in categories"
            :key="category._id"
            class="mt-4 cursor-pointer font-semibold hover:text-ui-primary"
            :class="
              selectedContent === category._id
                ? 'text-ui-primary'
                : 'text-black'
            "
            @click="scroll(category._id)"
          >
            {{ category.title }}
          </li>
        </ul>
        <div class="mt-16">
          <p
            class="text-ui-primary cursor-pointer font-semibold"
            @click="scroll('request')"
          >
            Request integration<mdicon name="arrow-right" width="16" />
          </p>
        </div>
      </template>
      <template #text>
        <div v-for="category in categories" :key="category._id" class="mb-10">
          <h2 :id="category._id" class="font-sans">
            {{ category.title }}
          </h2>
          <p
            v-if="
              integrations.filter(
                (item) => item.category && item.category.title === category.title
              ).length === 0
            "
            class="text-black"
          >
            Coming soon.
          </p>
          <Card
            v-for="item in integrations.filter(
              (item) => item.category && item.category.title === category.title
            )"
            :key="item._id"
            :data="item"
            logo
            :link="`/integrations/${item.slug.current}/`"
          />
        </div>
        <div>
          <h2 id="request">Request integration</h2>
        </div>
        <div class="form">
          <iframe
            src="https://tally.so/embed/m6kMA3?hideTitle=1&alignLeft=1"
            width="100%"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Request a demo"
          ></iframe>
        </div>
      </template>
    </ContentGrid>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onBeforeUnmount,
} from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'
import scroll from '~/helpers/scroll_to_el'
import inView from '~/helpers/el_in_view'

export default defineComponent({
  setup() {
    const selectedContent = ref('')

    const integrations = useSanity({
      query: '*[_type=="integration_page"]{..., category -> {title}, "body": null}',
    })

    const categories = useSanity({
      query: '*[_type=="integration_category"] | order(orderRank)'
    })

    const page = useSanity({
      query: '*[_type=="page" && slug.current=="integrations"]',
      single: true,
      useMeta: true
    })

    const handleScroll = () => {
      categories.value.forEach((category) => {
        if (inView(category._id)) {
          selectedContent.value = category._id
        }
      })
    }

    onBeforeMount(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      integrations,
      categories,
      page,
      scroll,
      selectedContent,
    }
  },
  head: {},
})
</script>
