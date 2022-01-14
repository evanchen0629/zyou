import requestData from './requestData'
import generateDefinitions from './generateDefinitions'

async function main() {
  const data = await requestData(
    'http://117874-wework-scrm-operation.test.za-tech.net/v2/api-docs'
  )
  generateDefinitions(data)
}
main()
