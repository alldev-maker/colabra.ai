<template>
    <div class="app">
        <Banner/>
        <TheHeader/>
        <main>
            <section>
                <div class="container pb-24">
                    <!-- heading -->
                    <h1 class="text-4xl lg:text-5xl">Changelog</h1>
                    <p class="text-lg lg:text-xl my-6 mb-10 md:mb-20 text-ui-secondary-400">
                        Latest updates and improvements to Colabra.
                    </p>

                    <!-- grid -->
                    <ContentGrid blog>
                        
                        <!-- sidebar -->
                        <template #sidebar>

                            <!-- mobile dropdown -->
                            <div class="block md:hidden">
                                <Dropdown :links="[
                                    {
                                        text: 'Latest',
                                        to: '/changelog/'
                                    },
                                    ...years.map((year) => ({
                                        text: year,
                                        to: '/changelog/timeline/'+year+'/'
                                    }))
                                ]" />
                            </div>

                            <!-- desktop side -->
                            <ul class="hidden md:block">
                                <!-- ... -->
                                <li class="sidebar-link"
                                    :class="{
                                        'text-ui-primary font-semibold': !$route.params.year,
                                    }">
                                    <nuxt-link to="/changelog/">
                                        Latest
                                    </nuxt-link>
                                </li>
                                <!-- ... -->
                                <li
                                    v-for="year in years"
                                    :key="year"
                                    class="sidebar-link"
                                    :class="{
                                        'text-ui-primary font-semibold':
                                        year === $route.params.year,
                                    }">
                                    <nuxt-link :to="'/changelog/timeline/' + year + '/'">
                                        {{ year }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </template>

                        <!-- content -->
                        <template #text>
                            <nuxt/>
                        </template>
                    </ContentGrid>
                </div>
            </section>
        </main>
        <TheFooter/>
    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
    setup() {
        const years = useSanity({
            // query returns all the dates 'yyyy-mm-ddTHH:MM:SS.t' of all the change logs
            query: `*[
                _type=="changelog_post" &&
                publishedAt != null
            ] | order(publishedAt desc)[]{
                "datetime": publishedAt
            }`,
            // we'll use the transform option to turn the result in to a
            // list of uniqely ordered years
            resolveData: (_list) => {
                let yrs = _list.filter(i => typeof i.datetime === 'string')
                yrs = yrs.map(i => i.datetime.split('-')[0])
                return [...new Set(yrs)]
            },
        })

        return {years,}
    },
})
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply mt-4 cursor-pointer hover:text-ui-primary;
}
.category {
  @apply text-xl lg:text-2xl text-center md:text-left;
}
section {
  @apply w-full pt-8 md:pt-16;
}
</style>
