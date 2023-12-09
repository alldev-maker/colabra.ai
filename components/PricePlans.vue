<template>
  <div class="grid-container">
    <div v-for="(plan, index) in plans" :key="index" class="card pricing">
      <div>
        <div>
          <h2 class="text-4xl mb-0" :class="{ 'text-ui-primary': index === 1 }">
            {{ plan.title }}
          </h2>
        </div>
        <div class="py-6">
          <nuxt-link
            v-if="plan.btn.link.startsWith('/')"
            :to="plan.btn.link"
            class="inline-flex w-full h-12 px-6"
            :class="index === 1 ? 'primary-btn' : 'outline-btn'"
          >
            {{ plan.btn.txt }}
          </nuxt-link>
          <a
            v-else
            :href="plan.btn.link"
            class="inline-flex w-full h-12 px-6"
            :class="index === 1 ? 'primary-btn' : 'outline-btn'"
          >
            {{ plan.btn.txt }}
          </a>
        </div>
        <div>
          <p v-if="index === 0">Get started with:</p>
          <p v-else>Everything in {{ plans[index - 1].title }}, plus:</p>

          <ul class="space-y-2">
            <li
              v-for="(item, childIndex) in plan.features"
              :key="childIndex"
              class="flex items-center"
            >
              <p class="text-ui-typo">
                <mdicon class="mr-2" name="check" :width="20" />
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const plans = ref([
      {
        title: 'Starter',
        btn: {
          link: '/demo/',
          txt: 'Request a demo',
        },
        features: [
          'Unlimited projects',
          '5 editors, unlimited viewers',
          '25 MB file upload size limit',
          'All core product features',
          'Basic integrations',
        ],
      },
      {
        title: 'Pro',
        description: 'billed annually',
        btn: {
          link: '/demo/',
          txt: 'Request a demo',
        },
        features: [
          'Unlimited editors and viewers',
          '100 MB file upload size limit',
          '30 day version history',
          'Groups and access permissions',
          'Witness & review (e-signatures)',
          '21 CFR Part 11 compliance',
          'Priority support',
        ],
      },
      {
        title: 'Enterprise',
        btn: {
          link: '/demo/',
          txt: 'Request a demo',
        },
        features: [
          'Unlimited file upload size',
          'Unlimited version history',
          'SCIM, SAML and SSO',
          'Advanced security & controls',
          'SOC 2 Type 2 compliance',
          'Virtual Private Cloud',
          'GPT-powered AI Copilot',
          'Dedicated success manager',
        ],
      },
    ])

    return {
      plans,
    }
  },
})
</script>

<style lang="postcss" scoped>
.grid-container {
  @apply mt-16 grid max-w-xl gap-10 gap-y-5 sm:gap-y-10 lg:max-w-screen-xl  lg:grid-cols-3 sm:mx-auto;
}
.pricing {
  @apply flex flex-col justify-between p-5 bg-white border-ui-border;
}
</style>
