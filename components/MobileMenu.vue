<template>
  <div class="">
    <div v-if="$site.settings.nav.links.length > 0" class="main-links">
      <template v-for="(link, index) in $site.settings.nav.links">
        <nuxt-link
          v-if="link.path"
          :key="link.slug"
          :to="link.path"
          class="nav-link"
          :class="{ 'mb-2': index + 1 !== $site.settings.nav.links.length }"
          @click.native="toggleMenu"
        >
          {{ link.title }}
        </nuxt-link>
        <MobileNavDropdownItem
          v-else-if="!link.path && !!link.children"
          :key="link.slug + '-'"
          :opened="selectedItem === link.title"
          class="font-medium text-lg"
          @click="toggleItem(link.title)"
          @signal:close="$emit('close')"
        >
          {{ link.title }}
          <template #popup>
            <NavDropdownContent
              class="border border-gray-200 mt-2 bg-white"
              :data="link.children"
              @request:close="$emit('close')"
            />
          </template>
        </MobileNavDropdownItem>
      </template>
    </div>
    <div class="bottom-links">
      <a href="https://lab.colabra.ai" class="nav-link"> Login </a>
      <nuxt-link to="/demo/" class="text-ui-primary text-lg font-medium px-1">
        Contact sales
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    toggleMenu: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const selectedItem = ref(null)
    const toggleItem = (item) => {
      if (item === selectedItem.value) selectedItem.value = null
      else selectedItem.value = item
    }

    return { selectedItem, toggleItem }
  },
})
</script>

<style lang="postcss" scoped>
.main-links {
  @apply flex flex-col py-4 gap-2;
}

.bottom-links {
  @apply flex flex-col py-4 gap-4;
}
.main-links {
  @apply border-b border-ui-border;
}
.nav-link {
  @apply text-lg;
}
</style>
