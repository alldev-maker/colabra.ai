import {
	useContext,
	ref,
	computed,
	ssrRef,
	onBeforeMount,
	useFetch,
} from '@nuxtjs/composition-api'
import formatDate from '../helpers/format_date'
import sanityImgUrl from '../helpers/sanity_image_url'
import userPageHead from '~/hooks/usePageHead'

const toTitle = (string) => {
	if (string.length > 0) return string[0].toUpperCase()+string.slice(1)
	return ''
}

export default function ({
	query,
	single,
	useMeta,
	after,
	resolveTitle,
	resolveDescription,
	resolveCoverImage,
	resolveData,
	useError}) {
	
	/**
	 * Query content from sanity cms
	 */

	// whether we're getting a single item
	single = single || false

	// whether to set data in page meta
	useMeta = useMeta || false

	// dynamically resolve page title
	// if the result is null, title is automatically generated
	resolveTitle = resolveTitle || (() => null)
	
	// dynamically resolve page description
	// if the result is null, description is automatically generated
	resolveDescription = resolveDescription || (() => null)

	// dynamically resolve page cover image
	// if the result is null, cover image is automatically generated
	resolveCoverImage = resolveCoverImage || (() => null)

	// whether to trigger an error when unsuccessful
	useError = !!useError

	// morphes the result as per the rules in the function
	resolveData = resolveData || (_=>_)

	// ref our data
	const data = ref(single ? {} : [])
	const serverErr = ssrRef(null)

	// deconstruct from useContext
	const {$sanity, error, params} = useContext()

	// use the nuxt useFetch wrapper to get api data.
	// https://composition-api.nuxtjs.org/lifecycle/usefetch/
	useFetch(async () => {
		try{
			// fetch data from sanity using the groq query provided
			let res = await $sanity.fetch(query);
			
			// we'd get an array, and we'd want to format the dates in each of the items
			// typically the query always returns an array, so there shouldnt be any problems with data type here
			res = res.map(item=>{
				const morphed = {...item,}
				
				// alternate keys if they exist
				if (morphed._createdAt) morphed._createdAt = formatDate(morphed._createdAt)
				if (morphed._updatedAt) morphed._updatedAt = formatDate(morphed._updatedAt)

				// alternate specific keys of specific types
				if (morphed.publishedAt) morphed.publishedAt = formatDate(morphed.publishedAt)
				return morphed
			})

			if (single){
				// we need at least one item if we're getting a single
				if (res.length < 1) throw new Error('query has less than one re')
				data.value = resolveData(res[0])

			}else{
				data.value = resolveData(res)
			}
			
			// runs after the query is done
			if (after) after(data.value)
		}catch (e){
			if (useError){
				if (!e.response) serverErr.value = {statusCode:404}
				else serverErr.value = {statusCode: e.response.status}
			}
		}
	})

	onBeforeMount(()=>{
		if (serverErr.value) error(serverErr.value)
	})

	if (single && useMeta){
		// parse single data and feed to page meta
		const title = computed(() => {
			let value = null

			if (data.value){
				const rslv = resolveTitle(data)
				if (rslv===null){
					if (data.value.metadata && data.value.metadata.metaTitle){
						// first check if meta data is available
						value = data.value.metadata.metaTitle
					}else if (data.value.title || data.value.name){
						// then use other means
						value = data.value.title || data.value.name
					}
				}else{
					value = rslv
				}
			}

			// if we dont get the value here,
			// try the slug at param if it exists
			if (!value){
				if (params.value.slug){
					value = toTitle(params.value.slug)
				}
			}
			return value || "Colabra"
		})

		const descr = computed(() => {
			let value = null
			if (data.value){
				const rslv = resolveDescription(data)
				if (rslv===null){
					if (data.value.metadata && data.value.metadata.metaDescription){
						value = data.value.metadata.metaDescription
					}else if (data.value.description || data.value.subtitle)
						value = data.value.description || data.value.subtitle
				}else{
					value = rslv
				}
			}
			return value || "Colabra makes scientific teams more efficient with real-time collaboration, integration of all data and agile project management."
		})

		const cover = computed(() => {
			let value = 'https://www.colabra.ai/share-general.png'
			if (data.value){
				const rslv = resolveCoverImage(data)
				if (rslv===null){
					// get image from these keys
					const dv = data.value
					if (dv.metadata && dv.metadata.metaImage){
						value = sanityImgUrl(dv.metadata.metaImage)
					}else if (dv.coverImage || dv.cartoonImage || dv.logoImage || dv.mainImage) {
						value = sanityImgUrl(dv.coverImage || dv.cartoonImage || dv.logoImage || dv.mainImage)
					}
				}else{
					value = rslv
				}
			}
			return value
		})

		// set html::head
		userPageHead(title, descr, cover)
	}

	return data
}