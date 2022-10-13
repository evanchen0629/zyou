import inquirer from 'inquirer'
import getConfig from '../generateAll/getConfig'
import requestData from '../generateAll/requestData'
import generate from './generate'
import colors from 'colors'
import writeData from './writeData'
import clear from './clear'
import fs from 'fs'
import pathTemp from 'path'

export default async () => {
  const { path, methods } = await inquirer.prompt([
    {
      type: 'input',
      message: '请求地址',
      name: 'path',
    },
    {
      type: 'list',
      message: '请求方法',
      name: 'methods',
      choices: ['get', 'post', 'put', 'delete'],
    },
  ])
  const config = getConfig()
  clear(config)
  let data
  if (config.type && config.type === 'zapi') {
    const configPath = pathTemp.resolve('swaggerApi.json')
    if (configPath && fs.existsSync(configPath)) {
      data = require(configPath)
    }
  }else {
    data = await requestData(config.path)
  }

  try {
    const { paramsJsonSchema, responseJsonSchema } = await generate(
      data,
      path,
      methods
    )
    await writeData('params', path, paramsJsonSchema)
    await writeData('response', path, responseJsonSchema)
    
  } catch (error) {
    
  }
}
