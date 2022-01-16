import { quicktypeJSONSchema } from './quickType'
import { formatParamsName, formatResponseName } from './utils'
import fs from 'fs'
import getConfig from './getConfig'
import path from 'path'

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
  fs.writeFileSync(typeMapping(config)[type].writePath, lines.join('\n'), {
    flag: 'a+',
  })
}

export const typeMapping = (config: any) => {
  return {
    params: {
      format: formatParamsName,
      writePath: `${path.resolve(process.cwd(), config.output)}/${
        config.paramsAlias
      }.ts`,
    },
    response: {
      format: formatResponseName,
      writePath: `${path.resolve(process.cwd(), config.output)}/${
        config.responseAlias
      }.ts`,
    },
  }
}
