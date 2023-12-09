<template>
  <div class="pb-24">
    <PageSection class="container" spacing="mb-12 md:mb-20">
      <h1 class="page-head">Colabra Partner Network</h1>
      <p class="page-subhead">
        Our partners provide customized, industry-focused solutions to help you take your research to the next level. Harness the full power of Colabra by working with trusted experts to mitigate risk and drive business value.
      </p>
    </PageSection>
    <ContentGrid class="container">
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
        <div class="mt-16 hidden md:block">
          <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
          <p class="mt-4 text-ui-secondary-400">
            Get your whole lab on the same page today.
          </p>
          <nuxt-link to="/" class="text-ui-primary font-semibold"
            >Learn more <mdicon name="arrow-right" width="16"
          /></nuxt-link>
        </div>
      </template>
      <template #text>
        <div v-for="category in categories" :key="category._id" class="mb-10">
          <h2 :id="category._id" class="font-sans">
            {{ category.title }}
          </h2>
          <p
            v-if="
              partners.filter(
                (item) => item.category && item.category.title === category.title
              ).length === 0
            "
            class="text-black"
          >
            Coming soon.
          </p>
          <Card
            v-for="item in partners.filter(
              (item) => item.category && item.category.title === category.title
            )"
            :key="item._id"
            :data="item"
            logo
            :link="`/partners/${item.slug.current}/`"
          />
        </div>
      </template>
    </ContentGrid>
    <div class="mt-16 py-16 md:py-24 bg-ui-secondary-25">
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
              “Colabra allowed our customers to get the most out of Labfront by connecting their biometric data with the rest of their tools and research workflows.”
            </h1>
            <p class="text-ui-typo-light text-xl">
              — Chris Peng, CEO, Labfront
            </p>
          </div>
          <nuxt-img
            src="/chrispeng.jpg"
            alt="Chris Peng"
            width="220"
            class="rounded-md object-contain order-1 md:order-2"
          />
        </div>
      </PageSection>
    </div>
    <PageSection spacing="pt-12 md:pt-20">
      <nuxt-img
        src="/illustrations/collaboration.svg"
        alt="Team"
        width="500"
        class="pb-2"
      />
      <h2 class="page-head">Become a partner</h2>
      <p class="page-subhead">
        Discover how we can work together to achieve more.
      </p>
      <a
        href="mailto:hello@colabra.ai"
        target="_blank"
        class="primary-btn mt-8 inline-flex h-12 px-6"
      >
        Get in touch
      </a>
    </PageSection>
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

    const partners = useSanity({
      query: '*[_type=="partner_page"]{..., category -> {title}, "body": null}',
    })

    const categories = useSanity({
      query: '*[_type=="partner_category"] | order(orderRank)'
    })

    const page = useSanity({
      query: '*[_type=="page" && slug.current=="partners"]',
      single: true,
      useMeta: true
    })

    const quoteLogos = ref({
      featured_image: {
        filename: '/logos/labfront.jpg',
        alt: 'Labfront',
      },
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
      partners,
      categories,
      page,
      quoteLogos,
      scroll,
      selectedContent,
    }
  },
  head: {},
})
</script>
