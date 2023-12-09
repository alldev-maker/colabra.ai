<template>
  <nuxt-link
    :to="(comics ? '/colabrats/' : '/blog/') + ((notNone(data.slug) && notNone(data.slug.current)) ? data.slug.current : '') + '/'"
    class="h-full p-3 group"
    :class="{
      'w-full md:w-1/2': !featured,
      'w-full': featured,
    }"
  >
    <p v-if="categoryName && data.category" class="text-sm font-semibold uppercase">
      {{ (data._type !== 'cartoon') ? data.category.title : "Cartoon" }}
    </p>
    <div :class="{ 'h-auto md:h-56': !featured && !comics, 'h-auto': comics }">
      <img
        v-if="data.coverImage || data.cartoonImage"
        loading="lazy"
        :src="$urlFor(data.coverImage || data.cartoonImage)"
        :alt="data.title"
        :width="featured ? '1800' : '880'"
        class="rounded-md w-full border-ui-border border group-hover:opacity-60"
        :class="{ 'h-full object-cover ': !featured }"
      />
    </div>
    <h2
      v-if="!comics"
      class="mt-8 mb-4 font-sans font-semibold"
      :class="{
        'text-xl lg:text-2xl md:w-2/3': featured,
        'text-lg': !featured,
      }"
    >
      {{ data.name || data.title }}
    </h2>
    <p
      v-if="!comics"
      :class="{
        'text-lg md:w-11/12': featured,
        'text-md': !featured,
      }"
    >
      {{ data.description || '' }}
    </p>
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    featured: {
      type: Boolean,
      default: false,
    },
    categoryName: {
      type: Boolean,
      default: true,
    },
    comics: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const notNone = (obj) => (obj !== null && obj !== undefined)
    return {notNone}
  },
})
</script>
