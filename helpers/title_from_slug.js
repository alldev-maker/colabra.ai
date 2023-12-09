const titleFromSlug = (slug, beginning, ending) => {
  const title = slug
    .substring(slug.indexOf(beginning) + 1, slug.lastIndexOf(ending))
    .replace('-', ' ')

  return title
}

export default titleFromSlug
