const pick = function (attrs, allowed) {
  if (!attrs) {
    return null
  }
  const h = {}
  for (const key in attrs) {
    const value = attrs[key]
    if (allowed.includes(key) > -1 && value !== null) {
      h[key] = value
    }
  }
  return h
}

const isEmailLinkType = (type) => type === 'email'

const schema = {
  nodes: {
    horizontal_rule(node) {
      return {
        singleTag: 'hr',
      }
    },
    blockquote(node) {
      return {
        tag: 'blockquote',
      }
    },
    bullet_list(node) {
      return {
        tag: 'ul',
      }
    },
    code_block(node) {
      return {
        tag: [
          'pre',
          {
            tag: 'code',
            attrs: node.attrs,
          },
        ],
      }
    },
    hard_break(node) {
      return {
        singleTag: 'br',
      }
    },
    heading(node) {
      let attrs = {}

      if (
        node.content &&
        node.content.length === 1 &&
        node.content[0].marks &&
        node.content[0].marks.length === 1 &&
        node.content[0].marks[0].type === 'styled'
      ) {
        attrs = node.content[0].marks[0].attrs
        delete node.content[0].marks
      }

      return {
        tag: [
          {
            tag: `h${node.attrs.level}`,
            attrs,
          },
        ],
      }
    },
    image(node) {
      return {
        singleTag: [
          {
            tag: 'img',
            attrs: pick(node.attrs, ['src', 'alt', 'title']),
          },
        ],
      }
    },
    list_item(node) {
      return {
        tag: 'li',
      }
    },
    ordered_list(node) {
      return {
        tag: 'ol',
      }
    },
    paragraph(node) {
      return {
        tag: 'p',
      }
    },
  },
  marks: {
    bold() {
      return {
        tag: 'b',
      }
    },
    strike() {
      return {
        tag: 'strike',
      }
    },
    underline() {
      return {
        tag: 'u',
      }
    },
    strong() {
      return {
        tag: 'strong',
      }
    },
    code() {
      return {
        tag: 'code',
      }
    },
    italic() {
      return {
        tag: 'i',
      }
    },
    link(node) {
      const attrs = { ...node.attrs }
      const { linktype = 'url' } = node.attrs

      if (isEmailLinkType(linktype)) {
        attrs.href = `mailto:${attrs.href}`
      }

      if (attrs.anchor) {
        attrs.href = `${attrs.href}#${attrs.anchor}`
        delete attrs.anchor
      }

      return {
        tag: [
          {
            tag: 'a',
            attrs,
          },
        ],
      }
    },
    styled(node) {
      return {
        tag: [
          {
            tag: 'span',
            attrs: node.attrs,
          },
        ],
      }
    },
  },
}

export default schema
