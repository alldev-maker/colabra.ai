import { useMeta, computed } from '@nuxtjs/composition-api'

export default function (title, description, cover) {
  useMeta(
    computed(() => ({
      title: title.value || title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description.value || description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title.value || title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description.value || description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: cover.value || cover || 'https://www.colabra.ai/share-general.png',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: cover.value || cover || 'https://www.colabra.ai/share-general.png',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@ColabraHQ',
        },
      ],
    }))
  )
}
