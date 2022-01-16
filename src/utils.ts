export const formatParamsName = (name: string) => {
  return `I${name}Request`
}
export const formatResponseName = (name: string) => {
  return `I${name}Response`
}

export const search = (object: Record<string, any>, value: string): any => {
  for (let key in object) {
    if (key === value) return [key]
    if (typeof object[key] === 'object') {
      let temp = search(object[key], value)
      if (temp) return [key, temp].flat()
    }
  }
}
