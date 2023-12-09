<template>
  <div class="wrapper">
    <select v-model="selected" @change="onChange">
      <option disabled value="">Latest</option>
      <option v-for="(link, index) in links" :key="index" :value="link.to">
        {{ link.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const selected = ref('')

    const router = useRouter()

    const onChange = (e) => {
      router.push(e.target.value)
    }

    return { selected, onChange }
  },
})
</script>

<style lang="postcss" scoped>
select {
  @apply w-full block border border-ui-border px-1 py-2 rounded-sm mb-8;
}
</style>
