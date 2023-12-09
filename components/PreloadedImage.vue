<template>
  <div class=" overflow-hidden">
      <img :class="imageClass" :src="src" :alt="alt">
      <div class="hidden">
          <img v-for="source in srcs" :key="source" :src="source" alt="" rel="preload">
      </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ""
        },
        srcs: {
            type: Array,
            default: () => ([])
        },
        imageClass: {
            type: Array,
            default: () => ([])
        }
    },
    setup() {
        
    },
})
</script>
