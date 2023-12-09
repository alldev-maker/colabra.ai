<template>
  <component :is="tag" :id="attrs.id">
    <slot />
  </component>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'CustomHeading',
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  setup({ attrs }) {
    const tag = ref(`h${attrs.level}`)

    return {
      tag,
      uuidv4,
    }
  },
})
</script>
