import _ from 'lodash'
import { formatParamsInterface } from '../utils'
import writeData from './writeData'

export default (data: any) => {
  Reflect.ownKeys(data.paths).forEach(async (path, index) => {
    try {
      Reflect.ownKeys(data.paths[path]).forEach(async (methods) => {
        const params = data.paths[path][methods]?.parameters
        const paramsJsonSchema = params2jsonschema(
          params,
          data.definitions,
          methods as string,
          path
        )
        const response = data.paths[path][methods].responses['200']

        const responseJsonSchema = response2jsonschema(
          response,
          data.definitions
        )
        // const template = fs.readFileSync('./src/template.ts', {
        //   encoding: 'utf8',
        // })
        // const a = ejs.render(template, {
        //   alias: formatAlias(path as string),
        //   path,
        //   methods,
        //   params: formatParamsInterface(path as string, 'params'),
        //   response: formatParamsInterface(path as string, 'response'),
        // })
        // console.log(a)

        await writeData('params', path as string, paramsJsonSchema)
        await writeData('response', path as string, responseJsonSchema)
      })
    } catch (error) {
      console.log(path)
    }
  })
}

const params2jsonschema = (
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

const getParams2jsonschema = (params: any[]) => {
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

const response2jsonschema = (response: any, definitions: any) => {
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
