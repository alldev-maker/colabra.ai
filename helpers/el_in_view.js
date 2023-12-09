const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect()
  const offsetTop = ele.offsetTop - 32
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

const inView = (id) => {
  const el = document.getElementById(id)

  const { height: headerHeight, offsetBottom, offsetTop } = getDimensions(el)
  const scrollPosition = window.scrollY + headerHeight

  return scrollPosition > offsetTop && scrollPosition < offsetBottom
}

export const objectInView = ({query, el, innerText}) => {
  if (!el){
    const elements = document.querySelectorAll(query)
    el = [...elements].filter(el => el.innerText.startsWith(innerText))[0]
  }

  const { height: headerHeight, offsetBottom, offsetTop } = getDimensions(el)
  const scrollPosition = window.scrollY + headerHeight

  return scrollPosition > offsetTop && scrollPosition < offsetBottom
}

export default inView
