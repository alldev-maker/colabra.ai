<template>
  <header :class="{ 'h-screen md:h-auto': mobileMenu }" class="">
    <div class="desktop">
      <div class="container md:py-3 py-4">
        <div class="wrapper px-2 md:px-4">
          <div class="left">
            <nuxt-link to="/" class="brand-link" :title="$site.name">
              <nuxt-img width="90" :alt="$site.name" src="/logo.svg" />
            </nuxt-link>

            <div v-if="$site.settings.nav.links.length > 0" class="page-links">
              <template v-for="link in $site.settings.nav.links">
                <template v-if="link.path !== null">
                  <nuxt-link
                    v-if="link.path"
                    :key="link.slug"
                    :to="link.path"
                    class="nav-link"
                  >
                    {{ link.title }}
                  </nuxt-link>
                </template>
                <template v-else-if="link.path === null && !!link.children">
                  <NavDropdownItem :key="link.slug">
                    {{ link.title }}
                    <template #popup>
                      <NavDropdownContent
                        v-if="link.children"
                        :data="link.children"
                      />
                    </template>
                  </NavDropdownItem>
                </template>
              </template>
            </div>
          </div>

          <!-- <div class="px-2 md:px-4 max-w-screen-xs"> -->
          <!-- <ClientOnly> -->
          <!-- <Search /> -->
          <!-- </ClientOnly> -->
          <!-- </div> -->

          <div class="right">
            <div class="btns">
              <button class="inline-flex md:hidden" @click="toggleMenu">
                <mdicon :name="mobileMenu ? 'close' : 'menu'"></mdicon>
              </button>
              <a
                href="https://lab.colabra.ai"
                class="nav-link hidden md:inline-flex"
              >
                Login
              </a>
              <nuxt-link
                to="/demo"
                class="primary-btn ml-4 hidden md:inline-flex h-8 px-4 text-sm"
              >
                Contact sales
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="mobileMenu" class="mobile h-full overflow-y-auto">
      <div class="container">
        <MobileMenu :toggle-menu="toggleMenu" @close="forceCloseMobileMenu" />
      </div>
    </div>
  </header>
</template>

<script>
// import { useRoute } from '@nuxtjs/composition-api'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const mobileMenu = ref(false)
    // const route = useRoute()

    const toggleMenu = () => {
      mobileMenu.value = !mobileMenu.value
    }

    const forceCloseMobileMenu = () => {
      mobileMenu.value = false
    }

    return {
      mobileMenu,
      toggleMenu,
      forceCloseMobileMenu,
    }
  },
})
</script>

<style lang="postcss" scoped>
header {
  @apply sticky top-0 z-10 bg-ui-background;
}
.desktop {
  @apply w-full border-b border-ui-border;
}
.mobile {
  @apply block md:hidden;
}
.wrapper {
  @apply flex items-center justify-between -mx-2 md:-mx-4;
}
.left {
  @apply flex flex-col items-center mr-auto md:flex-row;
}
.brand-link {
  @apply flex items-center text-ui-primary;
}
.page-links {
  @apply hidden ml-5 mr-5 md:flex md:ml-8 items-center gap-2;
}
.right {
  @apply max-w-screen-md flex items-center;
}
.btns {
  @apply flex items-center;
}
</style>
