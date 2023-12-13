<template>
  sdf
  <div class="wrapper">
    <nuxt-link to="/course" role="alert">
      <span>
        Join Modern Lab, our lab management course featuring top industry
        experts
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply hidden md:block text-center border-b border-ui-border py-2 lg:px-4;
}

a {
  @apply py-1 px-2 bg-ui-primary-light text-ui-primary border-solid border-2 border-transparent items-center lg:rounded-full flex lg:inline-flex border-ui-primary;
}

span {
  @apply mx-2 text-left flex-auto;
}

svg {
  @apply fill-current opacity-75 h-4 w-4;
}
</style>
