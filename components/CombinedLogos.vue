<template>
  <div class="logos" :class="alignment">
    <div class="logo">
      <nuxt-img width="90" :alt="$site.name" src="/favicon.svg" />
    </div>
    <mdicon
      :name="icon"
      class="text-ui-secondary-200 font-semibold mx-4"
    ></mdicon>
    <div class="logo">
      <div v-if="data.featured_image || img" class="h-full">
        <img
          v-if="
            (data.featured_image
              ? getExt(data.featured_image.filename)
              : getSanityImageExtension(img)) !== 'svg'
          "
          :src="
            data.featured_image ? data.featured_image.filename : $urlFor(img)
          "
          :alt="data.featured_image ? data.featured_image.alt : data.title"
          width="96"
          height="96"
          quality="70"
          loading="lazy"
        />
        <img
          v-else
          :src="
            data.featured_image ? data.featured_image.filename : $urlFor(img)
          "
          :alt="data.featured_image ? data.featured_image.alt : data.title"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import getExt, { getSanityImageExtension } from '~/helpers/get_extension'

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    align: {
      type: String,
      default: 'left',
    },
    icon: {
      type: String,
      default: 'plus',
    },
  },
  setup(props) {
    const alignment = computed(() => {
      let classes = ''

      switch (props.align) {
        case 'center':
          classes += 'justify-center'
          break
        case 'left':
          classes += 'justify-left'
          break
        case 'right':
          classes += 'justify-right'
          break
        default:
          classes += 'justify-center'
      }

      return classes
    })

    const img = computed(() => {
      return props.data.logo || props.data.logoImage
    })

    return {
      img,
      alignment,
      getExt,
      getSanityImageExtension,
    }
  },
})
</script>

<style lang="postcss" scoped>
.logos {
  @apply flex items-center  mb-10;
}

.logo {
  @apply w-12 h-12 border-2 border-ui-border p-2 rounded-md bg-white;
}

.logo img {
  @apply object-contain w-full h-full;
}
</style>
