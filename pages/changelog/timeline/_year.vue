<template>
    <div>
        <ChangeLog v-for="changelog in changelogs" :key="changelog._id" :data="changelog"/>
    </div>
</template>

<script>
import { defineComponent,  useRoute} from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
    layout: 'changelog',
    setup() {
        const route = useRoute().value
        const params = route.params

        const page = useSanity({
            query: `*[_type=="page" && slug.current=="changelog"]{
                ...,
                (*[_type=="changelog_post" && @.publishedAt != null] | order(publishedAt desc)[0].title) != null => {
                "subtitle": subtitle + " Most recent update: " + *[_type=="changelog_post" && @.publishedAt != null] | order(publishedAt desc)[0].title
                },
                (*[_type=="changelog_post" && @.publishedAt != null] | order(publishedAt desc)[0].title) == null => {
                "subtitle": subtitle
                },
            }`,
            single: true,
            useMeta: true
        })

        const changelogs = useSanity({
          query: `*[_type=="changelog_post" && publishedAt != null] | order(publishedAt desc){..., "_datetime": publishedAt}{
            ...,
            "_publishedAt": publishedAt
          }`,
          resolveData: (list) => {
            return list.filter(i => {
                return (
                    typeof i._datetime === 'string' &&
                    i._datetime.startsWith(params.year)
                )
            })
          }
        })

        return {page, changelogs}
    },
    head: {}
})
</script>


