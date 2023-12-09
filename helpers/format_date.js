import {xDigits} from './digits'

export default function (dateString) {
  if (!dateString) {
    return null
  }

  const date = new Date(dateString)

  const month = date.toLocaleString('default', { month: 'short' })

  const year = date.getFullYear()

  const day = date.getDate()

  return `${month} ${day}, ${year}`
}


export const hyphenedDateFormat = (dateString) => {
  if (!dateString) return null
  const date = new Date(dateString)
  const month = xDigits(date.getMonth()+1, 2)
  const year = date.getFullYear()
  const day = xDigits(date.getDate(), 2)

  return `${year}-${month}-${day}`
}