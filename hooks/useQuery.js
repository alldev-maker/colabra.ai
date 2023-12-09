import {
  computed,
  ref,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import formatDate from '../helpers/format_date'
import usePageHead from '~/hooks/usePageHead'

export default function (path, query = {}, customSlug, skipMetadata) {
  const data = ref(null)

  const { $storyapi, env } = useContext()
  const route = useRoute()

  useFetch(async () => {
    const slug = customSlug || route.value.params.slug || ''

    const res = await $storyapi.get(`cdn/stories/${path}/${slug}`, {
      version: env.sbVersion,
      ...query,
    })

    const story = res.data.story

    if (story.content.component === 'episode' && !story.is_startpage) {
      const podcast = await $storyapi.get(
        `cdn/stories/podcasts/${route.value.params.slug}`,
        {
          version: env.sbVersion,
          resolve_relations: 'podcast.hosts',
        }
      )

      story.content.podcast = podcast.data.story
    }

    data.value = {
      uuid: story.uuid,
      name: story.name,
      ...story.content,
      first_published_at: formatDate(story.first_published_at),
      is_startpage: story.is_startpage,
      slug: story.slug,
      full_slug: story.full_slug,
    }
  })

  const contentType = path.charAt(0).toUpperCase() + path.slice(1)

  const title = computed(() => {
    let value = contentType
    if (data.value) {
      const metadata = data.value.metadata
      const fullSlug = data.value.full_slug

      if (
        fullSlug.startsWith('integrations/') &&
        fullSlug !== 'integrations/'
      ) {
        value = `Colabra & ${data.value.name} integration`
      } else if (metadata && metadata.title) {
        value = metadata.title
      } else {
        value = data.value.name
      }
    }

    return value
  })

  const description = computed(() => {
    let value = ''
    if (data.value) {
      const metadata = data.value.metadata
      const fullSlug = data.value.full_slug

      if (
        fullSlug.startsWith('integrations/') &&
        fullSlug !== 'integrations/'
      ) {
        value = data.value.description
      } else if (metadata && metadata.description) {
        value = metadata.description
      } else {
        value = data.value.description || 'Page description'
      }
    }
    return value
  })

  const cover = computed(() => {
    let value = 'https://www.colabra.ai/share-general.png'
    if (data.value) {
      const metadata = data.value.metadata
      const featuredImg = data.value.featured_image
      const fullSlug = data.value.full_slug

      if (data.value.component === 'episode' && !data.value.is_startpage) {
        encodeURIComponent('')
        value = `https://ondemand.bannerbear.com/simpleurl/MGbP5XQdA5gdKAvLDO/image/podcast_title/text/${encodeURIComponent(
          data.value.podcast.name + ' #' + data.value.episode_number
        )}/episode_title/text/${encodeURIComponent(
          data.value.name
        )}/podcast_cover/image_url/${data.value.podcast.content.cover.filename}`
      } else if (
        fullSlug.startsWith('integrations/') &&
        fullSlug !== 'integrations/'
      ) {
        value = `https://ondemand.bannerbear.com/simpleurl/GemR14qkKqzBNODAZ2/image/title/text/${encodeURIComponent(
          'Colabra & ' + data.value.name
        )}/description/text/${encodeURIComponent(
          data.value.description
        )}/integration_logo/image_url/${featuredImg.filename}`
      } else if (featuredImg) {
        value = featuredImg.filename
      } else if (metadata && metadata.og_image) {
        value = metadata.og_image
      }
    }

    return value
  })

  if (!skipMetadata) {
    usePageHead(title, description, cover)
  }

  return data
}
