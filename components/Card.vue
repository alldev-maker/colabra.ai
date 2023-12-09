<template>
  <nuxt-link :to="link" class="w-full">
    <div
      class="card h-full mt-6 transition-shadow p-4 md:p-2 flex hover:shadow-lg"
      :class="{
        'items-center md:items-start flex-col md:flex-row':
          logo && !leftAligned,
      }"
    >
      <div
        class="thumbnail"
        :class="{
          'w-16 h-16 mt-6 md:ml-6 md:my-6': logo,
          'w-full md:w-60': !logo,
          'mr-6': leftAligned,
        }"
      >
        <!-- currently i've only seen this component's use case on alternatives/index.vue
        the image conditions might need to be reviewed for other _types -->
        <div v-if="img" :class="{ 'h-full': logo }">
          <img
            v-if="getSanityImageExtension(img) !== 'svg'"
            class="larger-img"
            :src="$urlFor(img)"
            :alt="data.title"
            :fit="logo ? 'in' : null"
            :width="logo ? '96' : '240'"
            :height="logo ? '96' : '240'"
            :quality="logo ? '70' : '50'"
            loading="lazy"
          />
          <img
            v-else
            :src="$urlFor(img)"
            :alt="data.title"
            class="h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="text pt-6 md:py-6"
        :class="{
          'text-center md:text-left md:pr-6': logo && !leftAligned,
        }"
      >
        <h3 class="font-medium" :class="{ 'mb-1': data.subtitle }">
          <span v-if="comparison">{{ $site.name }} vs. {{ data.title }}</span>
          <span v-else>{{ data.title }}</span>
        </h3>
        <p class="font-medium text-ui-secondary-500">{{ data.subtitle }}</p>
        <p class="mb-0" :class="{ 'hidden md:block': hiddenDesc }">
          {{ data.description }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { getSanityImageExtension } from '~/helpers/get_extension'

export default defineComponent({
  props: {
    data: {
      type: Object,
      // default: () => ({}),
      required: true,
    },
    logo: {
      type: Boolean,
      default: false,
    },
    comparison: {
      type: Boolean,
      default: false,
    },
    hiddenDesc: {
      type: Boolean,
      default: false,
    },
    leftAligned: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const img = computed(() => {
      return props.data.logo || props.data.logoImage || props.data.mainImage
    })
    return {
      img,
      getSanityImageExtension,
    }
  },
})
</script>

<style lang="postcss" scoped>
.thumbnail {
  @apply md:mr-10;
}

.thumbnail img {
  @apply w-full;
}

.thumbnail .larger-img {
  @apply rounded-md;
}

.text {
  @apply flex-1;
}
</style>
