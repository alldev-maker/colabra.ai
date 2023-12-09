const scroll = (id) => {
  const yOffset = -164
  const element = document.getElementById(id)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}

export const scrollToObject = ({query, innerText}) => {
  const elements = document.querySelectorAll(query)
  const el = [...elements].filter(el => el.innerText.startsWith(innerText))[0]

  if (el){
    const yOffset = -164
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default scroll
