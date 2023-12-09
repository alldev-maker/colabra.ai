<template>
  <div>
    <ChangeLog v-for="changelog in changelogs" :key="changelog._id" :data="changelog"/>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useSanity from '~/hooks/useSanity'

export default defineComponent({
    layout: 'changelog',
    setup() {
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
          query: `*[_type=="changelog_post" && publishedAt != null] | order(publishedAt desc){
            ...,
            "_publishedAt": publishedAt
          }`,
          resolveData: (list) => {
            return list.filter(i => typeof i.publishedAt === 'string')
          }
        })

        return {page, changelogs}
    },
    head: {}
})
</script>


