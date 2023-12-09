<template>
  <ContentGrid>
    <template #sidebar>
      <div v-if="$slots['before-nav']" class="mb-16">
        <slot name="before-nav"></slot>
      </div>


      <!-- before -->
      <div v-if="page.comingSoon && page.title && page._type === 'integration_page'">
        <ul>
          <li
            class="cursor-pointer sidebar-head"
            :class="`depth-1 ${
              (selectedContent === 'Request integration' || selectedContent === '')
                ? 'active-head'
                : 'in-active-head'
            }`"
            @click="scrollToObject({query: `div#sanity-content h2`, innerText: 'Request integration'})"
          >
            Request integration
          </li>
        </ul>
      </div>
      <!-- after -->
      <template v-else>
        <div
          v-for="(content, index) in page.body.filter(
            (content) => headingList.includes(content.style)
          )"
          :key="index"
        >
          <ul class=" mb-2">
            <li
              class="cursor-pointer sidebar-head"
              :class="`depth-${headingList.indexOf(content.style)+1} ${
                (selectedContent === content._key || (selectedContent==='' && index===0))
                  ? 'active-head'
                  : 'in-active-head'
              }`"
              @click="scrollToObject({query: `div#sanity-content ${content.style}`, innerText: content.children[0].text})"
            >
              {{ content.children.map(i => i.text).join(' ') }}
            </li>
          </ul>
        </div>
      </template>

      <div v-if="$slots['after-nav']" class="mt-16">
        <slot name="after-nav"></slot>
      </div>

    </template>

    <template #text>

      <div v-if="$slots['before-body']">
        <slot name="before-body"></slot>
      </div>

      <SanityRichText :blocks="page.body">
        <template v-if="page.comingSoon && page.title && page._type === 'integration_page'" #before>
          <h2>Request integration</h2>
          <p>Tell us how your lab uses {{page.title}}, and how you’d imaging the integration with Colabra to work, and we will consider it for our next release.</p>
        </template>
      </SanityRichText>

      <iframe
        v-if="page.comingSoon && page.title && page._type === 'integration_page'"
        :src="`https://tally.so/embed/m6kMA3?hideTitle=1&alignLeft=1&Google=${page.title.replace(
          / /g,
          ''
        )}`"
        width="100%"
        height="1000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Request a demo"
        class="mt-12"
      ></iframe>

      <div v-if="$slots['after-body']" class="mt-16">
        <slot name="after-body"></slot>
      </div>

    </template>
  </ContentGrid>
</template>

<script>
import { defineComponent, ref, onBeforeMount, onBeforeUnmount, computed } from '@nuxtjs/composition-api'
import { scrollToObject } from '~/helpers/scroll_to_el'
import { objectInView } from '~/helpers/el_in_view'

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    nested: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectedContent = ref('')
    const headingList = ref(['h1', 'h2', 'h3', 'h4'])

    const page = computed(() => ({
      ...props.data,
      body: (props.data.body || []).map(item => {
        if (headingList.value.includes(item.style))
          return {
            ...item,
            children: item.children.map(i => ({
              ...i,
              _id: i._key
            }))
          }
        return item
      })
    }))

    const handleScroll = () => {
      const contentList = page.value.body

      contentList.forEach((content) => {
        if (headingList.value.includes(content.style)){
          if (objectInView({query: `div#sanity-content ${content.style}`, innerText: content.children[0].text})) {
            selectedContent.value = content._key
          }
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
      selectedContent,
      scrollToObject,
      page,
      headingList
    }
  },
})
</script>

<style lang="postcss" scoped>
.active-head {
  @apply text-ui-primary;
}

.in-active-head {
  @apply text-ui-typo;
}

li:hover {
  @apply text-ui-primary;
}

.depth-1 {
  @apply text-lg pt-3;
}

.depth-2 {
  @apply text-base pt-2;
}

.depth-3 {
  @apply text-sm text-ui-secondary-500;
  &.active-head {
    @apply text-ui-primary;
  }
}
</style>
