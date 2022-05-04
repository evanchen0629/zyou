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
      if (!definitionsKey) return {}
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
 * 读取路径信息
 * @param {string} path 路径
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
 * 创建路径
 * @param {string} dir 路径
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
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
export async function dirExists(dir: string) {
  let isExists = (await getStat(dir)) as any
  //如果该路径且不是文件，返回true
  if (isExists && isExists.isDirectory()) {
    return true
  } else if (isExists) {
    //如果该路径存在但是文件，返回false
    return false
  }
  //如果该路径不存在
  let tempDir = path.parse(dir).dir //拿到上级路径
  //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
  let status = await dirExists(tempDir)
  let mkdirStatus
  if (status) {
    mkdirStatus = await mkdir(dir)
  }
  return mkdirStatus
}

//删除所有的文件(将所有文件夹置空)
export function emptyDir(filePath: string) {
  const files = fs.readdirSync(filePath) //读取该文件夹
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

//删除所有的空文件夹
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
    //删除母文件夹下的所有字空文件夹后，将母文件夹也删除
    if (tempFiles === files.length) {
      fs.rmdirSync(filePath)
    }
  }
}
