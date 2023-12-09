// TODO: might need to remove this...

import Vue from 'vue'
import { Block } from '@marvr/storyblok-rich-text-types'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import HTMLMarkup from '~/components/HTMLMarkup.vue'
import CustomHeading from '~/components/CustomHeading.vue'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.HEADING]: CustomHeading,
    },
    components: {
      html: HTMLMarkup,
    },
  },
})
