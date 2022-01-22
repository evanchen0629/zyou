import inquirer from 'inquirer'
import getConfig from '../generateAll/getConfig'
import requestData from '../generateAll/requestData'
import generate from './generate'
import colors from 'colors'
import writeData from './writeData'

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
  const data = await requestData(config.path)
  try {
    const { paramsJsonSchema, responseJsonSchema } = await generate(
      data,
      path,
      methods
    )
    await writeData('params', path, paramsJsonSchema)
    await writeData('response', path, responseJsonSchema)
    console.log(colors.green('成功生成: )'))
  } catch (error) {
    console.log(colors.red(error as string))
  }
}
