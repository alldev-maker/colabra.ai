<template>
  <div class="app">
    <TheHeader />
    <main>
      <section>
        <div class="container pb-24">
          <nuxt-link
            to="/course"
            class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center"
          >
            <mdicon name="arrow-left" width="12" class="mr-1" />Lab management
            course
          </nuxt-link>

          <Nuxt />

          <div class="flex">
            <div class="w-auto md:w-60"></div>
            <div class="md:pl-20 flex-1">
              <div
                class="
                  flex flex-col
                  sm:flex-row
                  justify-between
                  items-center
                  mt-20
                "
              >
                <nuxt-link
                  v-if="pagination(lessons)"
                  :to="'/course/' + pagination(lessons).slug.current + '/'"
                  class="pagination-btn mb-4 sm:mb-0 mr-auto"
                  >← {{ pagination(lessons).name || pagination(lessons).title }}</nuxt-link
                >
                <nuxt-link
                  v-if="pagination(lessons, true)"
                  :to="'/course/' + pagination(lessons, true).slug.current + '/'"
                  class="pagination-btn ml-auto"
                  >{{ pagination(lessons, true).name || pagination(lessons, true).title }} →</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const lessons = useSanity({
      query: `*[_type=="course_lesson"]{
        _id,
        slug,
        title
      }`
    })

    const route = useRoute()

    const pagination = (list, next) => {
      let currentIndex = list.findIndex(
        (item) => item.slug.current === route.value.params.slug
      )

      if (currentIndex === -1) {
        currentIndex += 1
      }

      const adjacentIndex = next ? currentIndex + 1 : currentIndex - 1

      return list[adjacentIndex] ? list[adjacentIndex] : null
    }

    return {
      lessons,
      pagination,
    }
  },
})
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply mt-4 cursor-pointer hover:text-ui-primary;
}
.category {
  @apply text-xl lg:text-2xl text-center md:text-left;
}
section {
  @apply w-full pt-8 md:pt-16;
}

.pagination-btn {
  @apply flex items-center  text-ui-primary font-semibold px-4 py-2 border border-ui-primary rounded hover:bg-ui-primary hover:text-white transition-colors;
}
</style>
