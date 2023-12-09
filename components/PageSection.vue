<template>
  <section :class="classList"><slot /></section>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    align: {
      type: String,
      default: 'center',
    },
    spacing: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const classList = computed(() => {
      let classes = ''

      switch (props.align) {
        case 'center':
          classes += 'items-center'
          break
        case 'left':
          classes += 'items-start'
          break
        case 'right':
          classes += 'items-end'
          break
        default:
          classes += 'items-start'
      }

      switch (props.maxWidth) {
        case 2:
          classes += ' max-w-2xl'
          break
        case 3:
          classes += ' max-w-3xl'
          break
        case 4:
          classes += ' max-w-4xl'
          break
        case 5:
          classes += ' max-w-5xl'
          break
        default:
          classes += ' max-w-3xl'
      }

      if (props.spacing !== '') {
        classes += ` ${props.spacing}`
      }

      return classes
    })

    return {
      classList,
    }
  },
})
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-col mx-auto;
}
</style>
