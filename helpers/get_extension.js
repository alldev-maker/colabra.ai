const getExt = (filename) => {
  return (
    filename.substring(filename.lastIndexOf('.') + 1, filename.length) ||
    filename
  )
}

export const getSanityImageExtension = img => {
  if (img._type === "image"){
    const name = img.asset._ref
    return name.split('-').slice(-1)[0]
  }
  throw new Error("asset should be an image")
}

export default getExt
