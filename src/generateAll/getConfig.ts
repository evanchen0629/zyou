import path from 'path'
import fs from 'fs'

export default () => {
  const configPath = path.resolve('typesConfig.json')
  if (configPath && fs.existsSync(configPath)) {
    return require(configPath)
  }
  return require('../typesConfig.json')
}
