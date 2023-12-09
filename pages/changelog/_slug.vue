<template>
    <div class="container pb-24">
        <div v-if="changelog">
            <nuxt-link
                to="/changelog"
                class="mb-6 lg:mb-6 text-ui-secondary-300 flex items-center">
                <mdicon name="arrow-left" width="12" class="mr-1" />Changelog
            </nuxt-link>
            <div class="max-w-3xl">
                <h1 class="text-4xl lg:text-5xl">{{ changelog.title }}</h1>
            </div>
            <p class="text-ui-secondary-300 mb-12 md:mb-20">
                {{ changelog.publishedAt }}
            </p>

            <ContentList :data="changelog">
                <template #after-nav>
                    <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
                    <p class="mt-4 text-ui-secondary-400">
                        Get your whole lab on the same page today.
                    </p>
                    <nuxt-link to="/" class="text-ui-primary font-semibold"
                        >Get Started <mdicon name="arrow-right" width="16"
                    /></nuxt-link>
                </template>
                <template #after-body>
                <div class="block md:hidden">
                    <nuxt-img width="72" :alt="$site.name" src="/logo.svg" />
                    <p class="mt-4 text-ui-secondary-400">
                    Get your whole lab on the same page today.
                    </p>
                    <nuxt-link to="/" class="text-ui-primary font-semibold"
                    >Get Started <mdicon name="arrow-right" width="16"
                    /></nuxt-link>
                </div>
                </template>
            </ContentList>
        </div>
    </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
    async validate({app, params}) {
        // check if changelog exists
        try {
            const _slug = params.slug
            await app.$sanity.fetch(
                `*[_type=="changelog_post" && slug.current == "${_slug}"]{}`
            )
            return true
        }catch (e) {
            return false
        }
    },
    setup() {
        const route = useRoute()
        const _slug = route.value.params.slug

        const changelog = useSanity({
            query: `*[_type=="changelog_post" && slug.current == "${_slug}"]`,
            single: true,
            useMeta: true
        })

        return {changelog}
    },
    head: {}
})
</script>
