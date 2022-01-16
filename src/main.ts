import requestData from './requestData'
import generateDefinitions from './generateDefinitions'
import clearFile from './clearFile'
import getConfig from './getConfig'
import colors from 'colors'

async function main() {
  const config = getConfig()
  clearFile(config)
  const data = await requestData(config.path)
  generateDefinitions(data)
  process.on('exit', function () {
    console.log(
      `The source code is at ${colors.green(
        'https://github.com/evanchen0629/zyou'
      )}. If you have any questions, please ask in issue, or you can email me at ${colors.green(
        'chenchengzuo@zhongan.com'
      )}`
    )
  })
}
main()
