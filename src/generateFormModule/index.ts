import getConfig from '../generateAll/getConfig'
import fs from 'fs'
import colors from 'colors'
import { dirExists, emptyDir, rmEmptyDir } from '../utils'
import generate from './generate'
import writeData from './writeData'
import requestData from '../generateAll/requestData'
const swc = require('@swc/core')

export default async () => {
  const {
    generateFormModule: { path, scrm, agent },
  } = getConfig()
  const services = fs.readFileSync(`${path}/services.ts`, 'utf-8')
  const { body } = await swc.parse(services, {
    syntax: 'typescript',
  })
  const configList = body.map((item: any) => {
    return {
      name: item.declaration.declarations[0].id.value,
      prefix: item.declaration.declarations[0].init.properties[1].value.value,
      url: item.declaration.declarations[0].init.properties[0].value
        .properties[0].value.value,
      method:
        item.declaration.declarations[0].init.properties[0].value.properties[1]
          .value.value,
    }
  })
  const scrmData = await requestData(scrm)
  const agentData = await requestData(agent)
  if (fs.existsSync(`${path}/typings`)) {
    emptyDir(`${path}/typings`)
    rmEmptyDir(`${path}/typings`)
  }
  await dirExists(`${path}/typings`)
  configList.forEach(async (item: any) => {
    try {
      const { paramsJsonSchema, responseJsonSchema } = await generate(
        item.prefix === 'Scrm' ? scrmData : agentData,
        item.url.split('/').length === 4
          ? `/${item.url.split('/').splice(2, 2).join('/')}`
          : item.url,
        item.method.toLocaleLowerCase()
      )
      await writeData('params', item.name, paramsJsonSchema)
      await writeData('response', item.name, responseJsonSchema)
    } catch (error) {
      console.log(colors.red(error as string))
    }
  })

  console.log(colors.green(`生成成功: )`))
}
