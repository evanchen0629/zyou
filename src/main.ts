import requestData from './requestData'
import generateDefinitions from './generateDefinitions'
import clearFile from './clearFile'
import getConfig from './getConfig'

async function main() {
  const config = getConfig()
  clearFile(config)
  const data = await requestData(config.path)
  generateDefinitions(data)
  process.on('exit', function () {
    console.log('Goodbye!')
  })
}
main()
