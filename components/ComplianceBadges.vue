<template>
  <div class="logos">
    <nuxt-img
      alt="SOC 2 Type II"
      src="/badges/compliance-soc2.png"
      height="256"
    />
    <nuxt-img
      alt="FDA CFR Part 11"
      src="/badges/compliance-fda.png"
      height="256"
    />
    <nuxt-img alt="GDPR" src="/badges/compliance-gdpr.png" height="256" />
    <nuxt-img alt="CCPA" src="/badges/compliance-ccpa.png" height="256" />
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply my-4 w-full flex flex-wrap justify-center gap-3;
}
img {
  max-height: 72px;
  @apply flex;
}
</style>
