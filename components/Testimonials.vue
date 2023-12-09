<template>
  <div class="grid-container">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="card p-6 shadow-md"
    >
      <div>
        <p class="mb-3 text-xl italic">
          {{ testimonial.txt }}
        </p>
        <div class="flex justify-between items-center">
          <div>
            <div class="font-semibold">{{ testimonial.author }}</div>
            <div>{{ testimonial.occupation }}</div>
          </div>
          <div>
            <nuxt-img width="90" :src="testimonial.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const testimonials = ref([
      {
        txt: '”I was impressed by the power of a good collaborative tool. One outcome I noticed right away was increased efficiency. [An experiment] that would have taken me a month was completed within two weeks.”',
        author: 'Irene Park',
        occupation: 'Human Genetics PhD',
        img: '/logos/jstor-daily.png',
      },
      {
        txt: '“COVID really was what made us commit [to digitizing lab notebooks]. All of us being alone and needing access to former students’ experiments so we can write grants and plan our next experiments.”',
        author: 'Andrew Mann',
        occupation: 'Lab researcher',
        img: '/logos/nature.svg',
      },
    ])

    return {
      testimonials,
    }
  },
})
</script>

<style lang="postcss" scoped>
.grid-container {
  @apply my-2 flex flex-col items-center max-w-4xl mx-auto sm:max-w-4xl md:max-w-4xl grid max-w-screen-lg gap-8 gap-y-10 mx-auto lg:grid-cols-2;
}
</style>
