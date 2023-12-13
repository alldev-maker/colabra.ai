<template>
  <div class="flex gap-8 md:flex-row flex-col">
    <div v-for="(childCol, i) in data" :key="i">
      <div class="flex flex-col gap-5">
        <div
          v-for="(body, j) in childCol"
          :key="j + 100"
          class="flex flex-col gap-3"
        >
          <p v-if="body.title" class="_col-category">{{ body.title }}</p>

          <div class="flex flex-col gap-1">
            <div
              v-for="item in body.items"
              :key="item.title"
              @click="animationFrame(() => $emit('request:close'))"
            >
              <a
                v-if="item.external"
                :href="item.path || '#'"
                class="popup-item"
              >
                <mdicon
                  v-if="item.icon"
                  class="text-ui-typo-lighter"
                  :name="item.icon"
                  width="18"
                />
                <div class="flex flex-grow flex-col gap-0">
                  <p class="_item-title">{{ item.title }}</p>
                  <p v-if="item.description" class="_item-description">
                    {{ item.description }}
                  </p>
                </div>
              </a>
              <nuxt-link
                v-else
                :key="item.title + '-'"
                :to="item.path || '#'"
                class="popup-item"
              >
                <mdicon
                  v-if="item.icon"
                  class="text-ui-typo-lighter"
                  :name="item.icon"
                  width="18"
                />
                <div class="flex flex-grow flex-col">
                  <p class="_item-title">{{ item.title }}</p>
                  <p v-if="item.description" class="_item-description">
                    {{ item.description }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>

          <nuxt-link
            v-if="body.bottom"
            :to="body.bottom.path"
            class="flex px-2 md:text-sm text-ui-typo-light md:text-ui-typo hover:text-ui-primary gap-1 items-center"
          >
            <span class="md:flex-grow-0 flex-grow">{{
              body.bottom.title
            }}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.17 13L13.59 15.59L15 17L20 12L15 7L13.59 8.41L16.17 11H4V13H16.17Z"
                fill="currentColor"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    data: { type: Array, required: true },
  },
  setup() {
    const animationFrame = (callback) => window.requestAnimationFrame(callback)
    return { animationFrame }
  },
})
</script>

<style scoped>
.popup-item {
  @apply flex py-2 px-2 flex-row gap-4 items-start transition-all;
}

.popup-item:hover {
  @apply bg-gray-100 rounded-md;
}

._item-title {
  @apply m-0 p-0 text-ui-typo font-medium;
}

._item-description {
  @apply m-0 p-0 text-sm text-ui-secondary-500;
}

._col-category {
  @apply px-2 uppercase text-xs pb-0 mb-0.5 pt-3 text-ui-secondary-500 font-medium;
}
</style>
