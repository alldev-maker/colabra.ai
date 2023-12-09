import sanityClient from '@sanity/client'
import sanityJson from './sanity.json'

export const getRoutes = async () => {
	// NOTE: this is used to fetch all the link lists, for static site generation
	// NOTE: this is because the pages in this project are server side rendered.
	try {
		
		const client = sanityClient({
			projectId: sanityJson.api.projectId,
			dataset: sanityJson.api.dataset,
			apiVersion: '2021-10-21',
			useCdn: false
		})

		// query map and resultant link
		const queries = [
			[ // alternatives
				`*[_type=="alternative_page"][].slug.current`,	// this is the query to get all slugs of a single type
				s=>[`/alternatives/${s}`]	// this is how we return each slug, making it a url
			],
			
			[ // blog pages
				`*[_type=="blog_post"][].slug.current`,
				s=>[`/blog/${s}`]
			],

			[ // cartoon/colabrats
				`*[_type=="cartoon"][].slug.current`,
				(s) => [`/colabrats/${s}`]
			],

			[ // courses
				`*[_type=="course_lesson"][].slug.current`,
				s=>[`/course/${s}`]
			],
			
			[ // integrations
				`*[_type=="integration_page"][].slug.current`,
				s=>[`/integrations/${s}`]
			],
			
			[ // podacst shows
				`*[_type=="podcast_show"][].slug.current`,
				async s=>{
					// get all the episode under this podcast
					const res = await client.fetch(`*[_type=="podcast_episode" && show->slug.current=="${s}"][].slug.current`)
					return [`/podcasts/${s}`, ...res.map((episode) => `/podcasts/${s}/${episode}`)]
				}
			],
			
			[ // blog categories
				`*[_type=="blog_category"][].slug.current`,
				s=>[`/blog/topic/${s}`]
			],
			
			[ // podcast host
				`*[_type=="podcast_host"][].slug.current`,
				s=>[`/podcasts/host/${s}`]
			],

			[ // case studies
				`*[_type=="case_study_page"][].slug.current`,
				s=>[`/case-studies/${s}`]
			],

			[ // startups
				`*[_type=="perk_page"][].slug.current`,
				s=>[`/startups/${s}`]
			],

			[ // changlogs
				`*[_type=="changelog_post" && publishedAt != null][].slug.current`,
				s=>[`/changelog/${s}`]
			],

			[ // changelog timelines
				`*[
					_type=="changelog_post" &&
					publishedAt != null &&
					publishedAt != ''
				] | order(publishedAt desc)[].publishedAt`,
				date => [`/changelog/timeline/${date.split('-')[0]}`]
			]
		]

		let routes = []

		for (let i=0; i<queries.length; i+=1){
			const [query, resolve] = queries[i]
			
			let res = await client.fetch(query)
			res = res.filter(slug=>(slug!==null && slug !== undefined))

			for (let j=0; j<res.length; j+=1){
				const slug = res[j]
				if (resolve.constructor.name === "AsyncFunction"){
					// if the resolving function is async
					const links = await resolve(slug)
					routes = [...routes, ...links]
				}else{
					routes = [...routes, ...resolve(slug)]
				}
			}
		}

		return routes
	} catch (error) {
		console.error(`Couldn't generate routes: ${error}`)
		return []
	}
}
