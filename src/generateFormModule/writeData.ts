import { quicktypeJSONSchema } from '../quickType'
import { formatParamsName, formatResponseName, dirExists } from '../utils'
import fs from 'fs'
import path from 'path'
import colors from 'colors'
import getConfig from '../generateAll/getConfig'

export default async function writeData(
  type: 'params' | 'response',
  path: string,
  data: any
) {
  const config = getConfig()
  const { lines } = await quicktypeJSONSchema(
    'TypeScript',
    typeMapping(config)[type].format(
      path
        .split('')
        .map((item, i) => {
          if (i === 0) {
            return item.toUpperCase()
          }
          return item
        })
        .join('')
    ),
    JSON.stringify(data)
  )
  fs.writeFileSync(
    `${typeMapping(config)[type].writePath}/typings/${path}.ts`,
    lines.join('\n'),
    {
      flag: 'a+',
    }
  )
}

export const typeMapping = (config: any) => {
  return {
    params: {
      format: formatParamsName,
      writePath: path.resolve(process.cwd(), config.generateFormModule.path),
    },
    response: {
      format: formatResponseName,
      writePath: path.resolve(process.cwd(), config.generateFormModule.path),
    },
  }
}
