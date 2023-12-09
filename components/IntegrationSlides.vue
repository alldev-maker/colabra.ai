<template>
  <div>
    <Slider direction="reverse">
      <div
        v-for="item in integrations.slice(
          0,
          Math.ceil(integrations.length / 2)
        )"
        :key="item._id"
        class="slide"
      >
        <Card :link="`/integrations/${item.slug.current}/`" :data="item" logo hidden-desc left-aligned />
      </div>
      <div
        v-for="item in integrations.slice(
          0,
          Math.ceil(integrations.length / 2)
        )"
        :key="item._id + ' duplicate'"
        class="slide"
      >
        <Card :link="`/integrations/${item.slug.current}/`" :data="item" logo hidden-desc left-aligned />
      </div>
    </Slider>
    <div class="mt-8">
      <Slider>
        <div
          v-for="item in integrations.slice(
            -Math.floor(integrations.length / 2)
          )"
          :key="item._id"
          class="slide"
        >
          <Card :link="`/integrations/${item.slug.current}/`" :data="item" logo hidden-desc left-aligned />
        </div>
        <div
          v-for="item in integrations.slice(
            -Math.floor(integrations.length / 2)
          )"
          :key="item._id + ' duplicate'"
          class="slide"
        >
          <Card :link="`/integrations/${item.slug.current}/`" :data="item" logo hidden-desc left-aligned />
        </div>
      </Slider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    integrations: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.slide {
  @apply px-4 flex-shrink-0 h-44 md:h-52;
  width: 300px;
}

@media (min-width: 768px) {
  .slide {
    width: 460px;
  }
}
</style>
