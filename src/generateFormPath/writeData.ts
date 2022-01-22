import { quicktypeJSONSchema } from '../quickType'
import {
  formatParamsInterface,
  formatParamsName,
  formatResponseName,
  mkdirsSync,
} from '../utils'
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
    typeMapping(config)[type].format(path),
    JSON.stringify(data)
  )
  const isExistsFile = fs.existsSync(typeMapping(config)[type].writePath)
  if (!isExistsFile) mkdirsSync(typeMapping(config)[type].writePath)
  fs.writeFileSync(typeMapping(config)[type].writePath, lines.join('\n'), {
    flag: 'a+',
  })
}

export const typeMapping = (config: any) => {
  return {
    params: {
      format: formatParamsName,
      writePath: path.resolve(process.cwd(), config.generateFormPath),
    },
    response: {
      format: formatResponseName,
      writePath: path.resolve(process.cwd(), config.generateFormPath),
    },
  }
}
