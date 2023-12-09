<template>
  <TabsList :list="plans" />
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const plans = ref([
      {
        icon: 'account-circle-outline',
        text: 'SCIM API',
      },
      {
        icon: 'key-outline',
        text: 'SAML single sign-on (SSO)',
      },
      {
        icon: 'shield-lock-outline',
        text: 'Multi-factor authentication',
      },
      {
        icon: 'openid',
        text: 'OAuth 2.0 / OpenID Connect',
      },
      {
        icon: 'certificate-outline',
        text: 'Independent security audits',
      },
      {
        icon: 'briefcase-account-outline',
        text: 'Granular permission levels',
      },
      {
        icon: 'map-marker-path',
        text: 'IP range restrictions',
      },
      {
        icon: 'cloud-lock-outline',
        text: 'Secure cloud-based architecture',
      },
    ])

    return { plans }
  },
})
</script>
