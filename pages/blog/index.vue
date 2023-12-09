<template>
	<div v-if="blogs.length > 0">
		<div v-if="featuredPost(blogs)" class="flex flex-wrap">
			<blog-item :data="featuredPost(blogs)" featured />
		</div>
		<div class="flex flex-wrap mt-4 md:mt-8">
			<blog-item
				v-for="blog in sortedBlogList(blogs)"
				:key="blog._id"
				:data="blog"
				:comics="blog._type === 'cartoon'"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { groq } from '@nuxtjs/sanity'

import useSanity from '~/hooks/useSanity'
import arrayMove from '~/helpers/array_move'

export default defineComponent({
	layout: 'blog',
	setup() {
		// fetch all the blog posts, including cartoons here
		const blogs = useSanity({
			query: groq`
			*[(_type=="blog_post" || _type=="cartoon") && slug != null]{
				_id,
				_type,
				coverImage,
				cartoonImage,
				publishedAt,
				title,
				slug,
				featured,
				description,
				category -> {
					title,
					slug
				}
			} | order(publishedAt desc)[0...100]`})

		const featuredPost = (blogs) => {
			return blogs.filter((item) => item.featured)[0]
		}

		const sortedBlogList = (blogs) => {
			let arr = [...blogs]

			// remove the featured post
			const featured = featuredPost(blogs)
			if (featured){
				arr = arr.filter((item) => item._id !== featured._id)
			}

			// our comics
			let comicsList = [...arr].filter(
				(item) => item._type === 'cartoon'
			)

			const lastComics = comicsList[0]

			comicsList = comicsList.filter((item) => item._id !== lastComics._id)

			arr = arr.filter((item) => !comicsList.includes(item))

			if (lastComics) {
				const lastComicsIndex = arr.findIndex(
					(item) => item._id === lastComics._id
				)

				arr = arrayMove(arr, lastComicsIndex, 1)
			}

			return arr
		}

		// get description for this page
		const page = useSanity({
			query: groq`*[_type=="page" && slug.current=="blog"]{
				_type,
				"slug": slug.current,
				title,
				subtitle
			}`,
			single: true,
			useMeta: true,
		})

		return {
			blogs,
			featuredPost,
			sortedBlogList,
			page
		}
	},
	head: {},
})
</script>
