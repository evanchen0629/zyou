import { quicktypeJSONSchema } from './quickType'
import { formatParamsName, formatResponseName } from './utils'
import fs from 'fs'

export default async function writeData(
  type: 'params' | 'response',
  path: string,
  data: any
) {
  const { lines } = await quicktypeJSONSchema(
    'TypeScript',
    typeMapping[type].format(path),
    JSON.stringify(data)
  )
  fs.writeFileSync(typeMapping[type].writePath, lines.join('\n'), {
    flag: 'a+',
  })
}

export const typeMapping = {
  params: {
    format: formatParamsName,
    writePath: './params.ts',
  },
  response: {
    format: formatResponseName,
    writePath: './response.ts',
  },
}
