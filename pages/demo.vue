<template>
  <div class="container pb-24">
    <div
      class="flex flex-col md:flex-row pb-16 md:pb-16 text-left md:items-left"
    >
      <div class="flex-1 md:pr-8 flex flex-col items-start max-w-lg md:block">
        <nuxt-img
          src="/illustrations/remote.svg"
          alt="Business deal"
          width="500"
          class="pb-2"
        />
        <h1 class="text-2xl md:text-3xl lg:text-4xl lg:leading-normal">Schedule a demo</h1>
        <p class="text-md lg:text-lg">Let’s explore how Colabra can work for you.</p>
        <div class="p-6 bg-ui-secondary-25 rounded-md mb-5">
          <ul class="space-y-1 text-md lg:text-lg mb-0">
            <li
              class="flex items-start"
            >
              <mdicon class="mr-2" name="check" :width="20" />
              <p class="text-ui-typo">
                A single source of truth for all your communication, processes, and data.
              </p>
            </li>
            <li
              class="flex items-start"
            >
              <mdicon class="mr-2" name="check" :width="20" />
              <p class="text-ui-typo">
                GxP compliance, enterprise-grade security, and granular access controls.
              </p>
            </li>
            <li
              class="flex items-start"
            >
              <mdicon class="mr-2" name="check" :width="20" />
              <p class="text-ui-typo mb-0">
                Dedicated support to help you integrate your unique research workflows.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1 mt-4 md:mt-0">
        <div class="form">
          <iframe
            src="https://tally.so/embed/nPRDd3?hideTitle=1&alignLeft=1"
            width="100%"
            height="900"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Request a demo"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const page = useSanity({
      query: `*[_type=="page" && slug.current=="demo"]{..., "body":null}`,
      single: true,
      useMeta: true
    })

    return { page }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.form {
  @apply px-4 mx-auto sm:max-w-sm md:max-w-sm lg:max-w-screen-sm md:px-24 lg:px-8;
}
</style>
