import {
  ref,
  ssrRef,
  useContext,
  useFetch,
  onBeforeMount,
} from '@nuxtjs/composition-api'
import formatDate from '../helpers/format_date'

export default function (path, query = {}) {
  const data = ref([])
  const serverErr = ssrRef(null)

  const { $storyapi, env, error } = useContext()

  useFetch(async () => {
    try {
      const res = await $storyapi.get('cdn/stories/', {
        version: env.sbVersion,
        ...query,
        starts_with: path,
      })

      const stories = res.data.stories

      data.value = stories.map((story) => ({
        uuid: story.uuid,
        name: story.name,
        ...story.content,
        first_published_at: formatDate(story.first_published_at),
        slug: story.slug,
        full_slug: story.full_slug,
      }))
    } catch (err) {
      if (!err.response) {
        serverErr.value = { statusCode: 404 }
      } else {
        serverErr.value = { statusCode: err.response.status }
      }
    }
  })

  onBeforeMount(() => {
    if (serverErr.value) {
      error(serverErr.value)
    }
  })

  return data
}
