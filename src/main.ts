import requestData from './requestData'
import generateDefinitions from './generateDefinitions'
import clearFile from './clearFile'

async function main() {
  clearFile()
  const data = await requestData(
    'http://wework-scrm-operation.test.za-tech.net/v2/api-docs'
  )

  generateDefinitions(data)
}
main()
// async function main() {
//   const { lines } = await quicktypeJSONSchema(
//     'TypeScript',
//     'aaa',
//     JSON.stringify({})
//   )
//   console.log(lines)
// }
