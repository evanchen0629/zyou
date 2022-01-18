import clearFile from './clearFile'
import generateDefinitions from './generateDefinitions'
import getConfig from './getConfig'
import requestData from './requestData'
import colors from 'colors'

async function generateAll() {
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
export default generateAll
