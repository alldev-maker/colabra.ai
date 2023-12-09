import sanityJson from '../sanity.json'

const projectId = sanityJson.api.projectId
const dataset = sanityJson.api.dataset

export default ({asset, _type}) => {
    // takes sanity image object and turnes it into url
    if (_type !== "image") return null

    const [assetName, imgSize, imgExtension] = asset._ref.split('-').slice(1)
    const baseurl = `https://cdn.sanity.io/images`
    const url = `${baseurl}/${projectId}/${dataset}`
    
    return `${url}/${assetName}-${imgSize}.${imgExtension}`
}