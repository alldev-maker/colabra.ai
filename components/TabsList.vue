<template>
  <div class="wrapper">
    <div class="list">
      <div v-for="(item, index) in list" :key="index">
        <nuxt-link
          v-if="item.link && item.link.startsWith('/')"
          :to="item.link"
        >
          <div
            class="
              tab
              justify-between
              transform
              transition
              hover:shadow-md hover:scale-102
            "
          >
            <span class="icon">
              <mdicon class="mr-2 text-ui-primary" :name="item.icon" />
              {{ item.text }}
            </span>
            <span v-if="!item.link.startsWith('/')" class="icon-tab"
              ><mdicon class="mr-2" name="open-in-new" width="18"
            /></span>
          </div>
        </nuxt-link>
        <a
          v-else-if="item.link && !item.link.startsWith('/')"
          :href="item.link"
          target="_blank"
        >
          <div
            class="
              tab
              justify-between
              transform
              transition
              hover:shadow-md hover:scale-102
            "
          >
            <span class="icon">
              <mdicon class="mr-2 text-ui-primary" :name="item.icon" />
              {{ item.text }}
            </span>
            <span v-if="!item.link.startsWith('/')" class="icon-tab"
              ><mdicon class="mr-2" name="open-in-new" width="18"
            /></span>
          </div>
        </a>
        <div v-else class="tab">
          <span class="icon">
            <mdicon class="mr-2 text-ui-primary" :name="item.icon" />
            {{ item.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8;
}

.list {
  @apply max-w-lg space-y-3 sm:mx-auto lg:max-w-xl;
}

.tab {
  @apply mb-2 flex items-center p-2 duration-200 border rounded shadow group;
}

.tab .icon {
  @apply text-ui-secondary-800 transition-colors duration-200;
}

.icon-tab {
  @apply text-xs text-ui-typo-light;
}
</style>
