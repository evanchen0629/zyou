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

export function mkdirsSync(dirname: string) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      if (dirname.endsWith('ts')) {
        fs.writeFileSync(dirname, '', { flag: 'w' })
      } else {
        fs.mkdirSync(dirname)
      }
      return true
    }
  }
}

export const params2jsonschema = (
  params: any[],
  definitions: any,
  methods: string,
  path: any
) => {
  if (methods === 'post') {
    try {
      const definitionsKey = params[0].schema.$ref
      if (!definitionsKey) {
        return {
          definitions,
          $ref: params[0].schema.items.$ref,
        }
      }
      return {
        definitions,
        $ref: definitionsKey,
      }
    } catch (error) {
      return {}
    }
  }
  if (methods === 'get') {
    return getParams2jsonschema(params)
  }
}

export const getParams2jsonschema = (params: any[]) => {
  if (!params) return {}
  const properties = params.reduce((acc, cur) => {
    acc[cur.name] = {
      type: cur.type,
      format: cur.format,
      description: cur.description,
      allowEmptyValue: false,
    }
    return acc
  }, {})
  return {
    type: 'object',
    properties,
  }
}

export const response2jsonschema = (response: any, definitions: any) => {
  try {
    const definitionsKey = response.schema.$ref
    if (!definitionsKey) return {}
    return {
      definitions,
      $ref: definitionsKey,
    }
  } catch (error) {
    return {}
  }
}

/**
 * ??????????????????
 * @param {string} path ??????
 */
function getStat(path: string) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false)
      } else {
        resolve(stats)
      }
    })
  })
}

/**
 * ????????????
 * @param {string} dir ??????
 */
function mkdir(dir: string) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (err) => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * ???????????????????????????????????????
 * @param {string} dir ??????
 */
export async function dirExists(dir: string) {
  let isExists = (await getStat(dir)) as any
  //???????????????????????????????????????true
  if (isExists && isExists.isDirectory()) {
    return true
  } else if (isExists) {
    //??????????????????????????????????????????false
    return false
  }
  //????????????????????????
  let tempDir = path.parse(dir).dir //??????????????????
  //???????????????????????????????????????????????????????????????????????????????????????????????????????????????
  let status = await dirExists(tempDir)
  let mkdirStatus
  if (status) {
    mkdirStatus = await mkdir(dir)
  }
  return mkdirStatus
}

//?????????????????????(????????????????????????)
export function emptyDir(filePath: string) {
  const files = fs.readdirSync(filePath) //??????????????????
  files.forEach((file) => {
    const nextFilePath = `${filePath}/${file}`
    const states = fs.statSync(nextFilePath)
    if (states.isDirectory()) {
      emptyDir(nextFilePath)
    } else {
      fs.unlinkSync(nextFilePath)
    }
  })
}

//???????????????????????????
export function rmEmptyDir(filePath: string) {
  const files = fs.readdirSync(filePath)
  if (files.length === 0) {
    fs.rmdirSync(filePath)
  } else {
    let tempFiles = 0
    files.forEach((file) => {
      tempFiles++
      const nextFilePath = `${filePath}/${file}`
      rmEmptyDir(nextFilePath)
    })
    //???????????????????????????????????????????????????????????????????????????
    if (tempFiles === files.length) {
      fs.rmdirSync(filePath)
    }
  }
}
