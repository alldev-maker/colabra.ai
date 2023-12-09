<template>
  <div class="grid-container">
    <div class="p-8 lg:border-r">
      <div class="max-w-md">
        <div class="flex justify-center mb-8">
          <slot name="img1"></slot>
        </div>
        <h6 class="mb-2 text-center leading-5 text-xl">
          <slot name="head1"></slot>
        </h6>
        <p class="mb-3 text-center">
          <slot name="para1"></slot>
        </p>
      </div>
    </div>
    <div class="p-8 sm:border-r lg:border-r-0">
      <div class="max-w-md">
        <div class="flex justify-center mb-8">
          <slot name="img2"></slot>
        </div>
        <h6 class="mb-2 text-center leading-5 text-xl">
          <slot name="head2"></slot>
        </h6>
        <p class="mb-3 text-center">
          <slot name="para2"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.grid-container {
  @apply px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 grid gap-y-8 sm:gap-y-0 sm:grid-cols-1 lg:grid-cols-2;
}
</style>
