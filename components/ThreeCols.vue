<template>
  <div class="grid-container">
    <div class="p-2 md:p-8">
      <div class="max-w-md text-center">
        <div class="img-wrapper">
          <slot name="img1"></slot>
        </div>
        <h6 class="mb-2 leading-5 text-xl">
          <slot name="head1"></slot>
        </h6>
        <p class="mb-3">
          <slot name="para1"></slot>
        </p>
      </div>
    </div>
    <div class="p-2 md:p-8 lg:border-r">
      <div class="max-w-md text-center">
        <div class="img-wrapper">
          <slot name="img2"></slot>
        </div>
        <h6 class="mb-2 leading-5 text-xl">
          <slot name="head2"></slot>
        </h6>
        <p class="mb-3">
          <slot name="para2"></slot>
        </p>
      </div>
    </div>
    <div class="p-2 md:p-8">
      <div class="max-w-md text-center">
        <div class="img-wrapper">
          <slot name="img3"></slot>
        </div>
        <h6 class="mb-2 leading-5 text-xl">
          <slot name="head3"></slot>
        </h6>
        <p class="mb-3">
          <slot name="para3"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.grid-container {
  @apply px-0 py-8 mx-auto md:px-24 lg:px-8 lg:py-10 grid gap-y-8 sm:gap-y-0 sm:grid-cols-3 sm:divide-x;
}
.img-wrapper {
  @apply flex items-center justify-center mx-auto mb-4;
}
</style>
