import path from 'path'
import fs from 'fs'

export const formatParamsName = (name: string) => {
  return `I${name}Request`
}
export const formatResponseName = (name: string) => {
  return `I${name}Response`
}

export const formatAlias = (name: string) => {
  const list = name.split('/')
  const tempname = list.reduce((acc, cur, i) => {
    if (i === 0) {
      return (acc += cur)
    }
    return (acc += firstUpperCase(cur.split('')))
  }, '')
  return firstLowerCase(tempname.split(''))
}

export const formatParamsInterface = (
  name: string,
  type: 'params' | 'response'
) => {
  const list = name.split('/')
  const tempname = list.reduce((acc, cur, i) => {
    if (i === 0) {
      return (acc += cur)
    }
    return (acc += firstUpperCase(cur.split('')))
  }, '')
  return `I${tempname}${type === 'params' ? 'Request' : 'Response'}`
}

export const firstUpperCase = ([first, ...rest]: string[]) =>
  first.toUpperCase() + rest.join('')

export const firstLowerCase = ([first, ...rest]: string[]) =>
  first.toLowerCase() + rest.join('')

export const search = (object: Record<string, any>, value: string): any => {
  for (let key in object) {
    if (key === value) return [key]
    if (typeof object[key] === 'object') {
      let temp = search(object[key], value)
      if (temp) return [key, temp].flat()
    }
  }
}

export function mkdirsSync(dirname: any) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}
