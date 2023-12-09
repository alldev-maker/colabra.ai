<template>
  <div>
    <button
      class="font-semibold mb-2 w-full text-left"
      :class="{ 'text-ui-primary': opened }"
      @click="$emit('signal:click')">
      <!-- ... -->
      <mdicon :name="opened ? 'chevron-down' : 'chevron-right'" />
      {{ label }}
    </button>
    <p :class="{ hidden: !opened }" class="ml-2">
      <slot />
    </p>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CollapsibleText',
  props: {
    label: {
      type: String,
      default: '',
    },
    opened: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    
  },
})
</script>

<style></style>
