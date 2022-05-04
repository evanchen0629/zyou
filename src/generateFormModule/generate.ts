import { params2jsonschema, response2jsonschema } from '../utils'

export default (data: any, pathParams: string, methodsPatams: string) => {
  const hasPath = Reflect.ownKeys(data.paths).includes(pathParams)
  if (!hasPath) {
    return Promise.reject(
      `${pathParams}地址不正确, 请输入正确的请求地址,例如/abc/test`
    )
  }
  const hasMethods = Reflect.ownKeys(data.paths?.[pathParams] ?? {}).includes(
    methodsPatams
  )
  if (!hasMethods) {
    return Promise.reject('请选择正确的请求方法')
  }
  const params = data.paths[pathParams][methodsPatams]?.parameters
  const response = data.paths[pathParams][methodsPatams].responses['200']

  const paramsJsonSchema = params2jsonschema(
    params,
    data.definitions,
    methodsPatams,
    pathParams
  )

  const responseJsonSchema = response2jsonschema(response, data.definitions)
  return Promise.resolve({ paramsJsonSchema, responseJsonSchema })
}
