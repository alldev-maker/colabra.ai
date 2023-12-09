<template>
  <div class="wrapper">
    <div
      class="logos"
      :class="{
        'justify-center md:justify-start': leftAligned,
        'justify-center': !leftAligned,
      }"
    >
      <nuxt-link to="/integrations/office-365/">
        <nuxt-img alt="Microsoft 365" src="/logos/microsoft/microsoft365.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/office-365/">
        <nuxt-img alt="Excel" src="/logos/microsoft/excel.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/office-365/">
        <nuxt-img alt="PowerPoint" src="/logos/microsoft/powerpoint.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/azure/">
        <nuxt-img alt="Azure" src="/logos/microsoft/azure.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/github/">
        <nuxt-img alt="GitHub" src="/logos/microsoft/github.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/microsoft-teams/">
        <nuxt-img alt="Teams" src="/logos/microsoft/teams.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/microsoft-outlook/">
        <nuxt-img alt="Outlook" src="/logos/microsoft/outlook.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/power-bi/">
        <nuxt-img alt="PowerBI" src="/logos/microsoft/powerbi.svg" width="32" height="32"/>
      </nuxt-link>
      <nuxt-link to="/integrations/dynamics-365/">
        <nuxt-img alt="Dynamics 365" src="/logos/microsoft/dynamics365.svg" width="32" height="32"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  props: {
    leftAligned: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex w-full flex-col pt-3;
}
.logos {
  @apply my-2 w-full flex flex-wrap gap-4;
}
img {
  max-height: 32px;
  @apply flex-1 flex-grow-0 flex-shrink-0;
}
</style>
