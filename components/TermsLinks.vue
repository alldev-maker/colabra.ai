<template>
  <TabsList :list="links" />
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const links = ref([
      {
        icon: 'shield-account-outline',
        text: 'Privacy policy',
        link: 'https://www.iubenda.com/privacy-policy/87819536/full-legal',
      },
      {
        icon: 'cookie-outline',
        text: 'Cookie policy',
        link: 'https://www.iubenda.com/privacy-policy/87819536/cookie-policy',
      },
      {
        icon: 'file-document-outline',
        text: 'Terms of service',
        link: 'https://www.iubenda.com/terms-and-conditions/87819536',
      },
      {
        icon: 'shield-bug-outline',
        text: 'Responsible disclosure',
        link: '/rdp/',
      },
    ])

    return { links }
  },
})
</script>
