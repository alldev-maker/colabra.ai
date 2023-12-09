<template>
  <div class="grid-container">
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="timer-outline" /> Built for
        speed
      </h6>
      <p class="mb-3">
        Autosaved and synchronized in real-time across all users. No spinners or
        waiting.
      </p>
    </div>
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="apple-keyboard-command" />
        Keyboard-first design
      </h6>
      <p class="mb-3">
        Optimized for efficiency with extensive, intuitive keyboard shortcuts.
      </p>
    </div>
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="cellphone-lock" />
        Mobile-optimized
      </h6>
      <p class="mb-3">
        Your data is safe and always accessible across all of your devices.
      </p>
    </div>
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="hexagon-multiple-outline" />
        Multiple workspaces
      </h6>
      <p class="mb-3">
        Granular permissions for experiments, projects, or organizations.
      </p>
    </div>
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="image-filter-center-focus" />
        Paper note scanning
      </h6>
      <p class="mb-3">
        Take lab notes the way you're used to, then scan them for search and
        collaboration.
      </p>
    </div>
    <div>
      <h6>
        <mdicon class="mr-2 text-ui-primary" name="certificate-outline" />
        Regulatory compliance
      </h6>
      <p class="mb-3">
        Your data is secure with FDA 21 CFR Part 11, GDPR, ePrivacy, CCPA, LGPD,
        PECR, and SOC 2 Type 2.
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.grid-container {
  @apply py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-10 grid gap-8 gap-y-5 sm:gap-y-8 sm:grid-cols-2 lg:grid-cols-3;
}

h6 {
  @apply mb-2 leading-5 text-xl;
}
</style>
