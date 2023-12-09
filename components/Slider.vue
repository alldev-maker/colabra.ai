<template>
  <div
    class="slider flex"
    :style="{
      animationDuration: `${speed}s`,
      animationDirection: `${direction}`,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    speed: {
      type: Number,
      default: 256,
    },
    direction: {
      type: String,
      default: 'normal',
    },
  },
}
</script>

<style lang="postcss" scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-460px * 20));
  }
}

@keyframes scrollMobile {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 20));
  }
}

.slider {
  width: calc(300px * 40);
  animation: scrollMobile infinite linear;
}

@media (min-width: 768px) {
  .slider {
    width: calc(460px * 40);
    animation: scroll infinite linear;
  }
}
</style>
