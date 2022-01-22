import path from 'path'
import fs from 'fs'
import colors from 'colors'

export default () => {
  const typesConfig = fs.readFileSync(
    path.join(path.dirname(__dirname), '../typesConfig.json'),
    { encoding: 'utf8' }
  )
  fs.writeFileSync(
    path.join(path.resolve(process.cwd()), 'typesConfig.json'),
    typesConfig
  )
  console.log(colors.green('初始化配置文件成功'))
}
