<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="grid-container">
          <div class="col-1">
            <a
              href="/"
              aria-label="Go home"
              :title="$site.name"
              class="site-logo"
            >
              <nuxt-img width="26" :alt="$site.name" src="/favicon.svg" />
            </a>
            <div class="site-info">
              <p class="font-medium text-black">
                Increasing the world's scientific output.
              </p>
              <p class="terms-privacy">
                © Colabra Inc. <span>|</span>
                <nuxt-link to="/terms/">Terms & Privacy</nuxt-link>
              </p>
            </div>
          </div>
          <div class="col-2">
            <div>
              <p class="footer-col-title">Product</p>
              <ul class="mt-2">
                <li
                  v-for="link in $site.settings.footer.product"
                  :key="link.path"
                  class="pb-2"
                >
                  <nuxt-link v-if="link.path.startsWith('/')" :to="link.path" class="footer-link-item">
                    {{ link.title }}
                  </nuxt-link>
                  <a
                    v-else
                    :href="link.path"
                    :target="link.target ? '_blank' : null"
                    class="footer-link-item"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="footer-col-title">Resources</p>
              <ul class="mt-2">
                <li
                  v-for="link in $site.settings.footer.resources"
                  :key="link.path"
                  class="pb-2"
                >
                  <nuxt-link v-if="link.path.startsWith('/')" :to="link.path" class="footer-link-item">
                    {{ link.title }}
                  </nuxt-link>
                  <a
                    v-else
                    :href="link.path"
                    :target="link.target ? '_blank' : null"
                    :refl="link.rel ? 'noreferrer' : null"
                    class="footer-link-item"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="footer-col-title">Help & contact</p>
              <ul class="mt-2">
                <li
                  v-for="link in $site.settings.footer.help_contact"
                  :key="link.path"
                  class="pb-2"
                >
                  <nuxt-link v-if="link.path.startsWith('/')" :to="link.path" class="footer-link-item">
                    {{ link.title }}
                  </nuxt-link>
                  <a
                    v-else
                    :href="link.path"
                    :target="link.target ? '_blank' : null"
                    class="footer-link-item"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply w-full border-t bg-ui-background border-ui-border;
}
.wrapper {
  @apply pt-16 mx-auto;
}
.grid-container {
  @apply grid gap-16 gap-y-10 mb-8 lg:grid-cols-6;
}
.col-1 {
  @apply md:max-w-md lg:col-span-2;
}
.col-2 {
  @apply grid grid-cols-2 gap-5 gap-y-8 lg:col-span-4 md:grid-cols-3;
}
.site-logo {
  @apply inline-flex items-start;
}
.site-info {
  @apply mt-4 lg:max-w-sm;
}
.terms-privacy {
  @apply text-sm text-ui-typo-lighter;
}
.terms-privacy span {
  @apply text-ui-secondary-400 mx-1;
}
.col-2 p {
  @apply font-semibold tracking-wide text-black;
}
.col-2 a {
  @apply text-ui-typo-lighter transition-colors duration-300;
}
.col-2 a:hover {
  @apply text-ui-primary;
}

.footer-col-title{
  @apply font-semibold tracking-wide
}

.footer-link-item{
  @apply font-medium;
}
</style>
