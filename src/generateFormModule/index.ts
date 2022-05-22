import getConfig from '../generateAll/getConfig'
import fs from 'fs'
import * as pathTemp from 'path'
import colors from 'colors'
import { dirExists, emptyDir, rmEmptyDir } from '../utils'
import generate from './generate'
import writeData from './writeData'
import requestData from '../generateAll/requestData'
const swc = require('@swc/core')

export default async () => {
  const {
    generateFormModule: { path, urlMapping },
  } = getConfig()
  const services = fs.readFileSync(`${path}/services.ts`, 'utf-8')
  // 如果目标目录下有配置文件则采用当前目录下的配置文件,如果没有采用全局的
  let urlMappingTemp = urlMapping
  const configPath = pathTemp.resolve(`${path}/typesConfig.json`)
  if (configPath && fs.existsSync(configPath)) {
    urlMappingTemp = require(configPath).urlMapping
  }
  // 解析目录下的service文件
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
  const urlMappingList = await Promise.all(
    Reflect.ownKeys(urlMappingTemp).map(async (item) => {
      const data = await requestData(urlMappingTemp[item]).catch((err) => {
        console.log(colors.red(err + '请确定url是否正确或接口地址能否正常访问'))
        process.exit()
      })
      return { key: item, data }
    })
  )

  if (fs.existsSync(`${path}/typings`)) {
    emptyDir(`${path}/typings`)
    rmEmptyDir(`${path}/typings`)
  }
  await dirExists(`${path}/typings`)
  configList.forEach(async (item: any) => {
    let scrmData
    if (item.prefix === 'Scrm') {
      scrmData = urlMappingList.find(
        (temp) => temp.key === item.url.split('/')[0]
      )?.data
    } else {
      scrmData = urlMappingList.find((item) => item.key === 'agent')?.data
    }
    try {
      const { paramsJsonSchema, responseJsonSchema } = await generate(
        scrmData,
        item.url.split('/').length === 3
          ? `${item.url.split('/').splice(1, 2).join('/')}`
          : item.url,
        item.method.toLocaleLowerCase()
      )
      await writeData('params', item.name, paramsJsonSchema)
      await writeData('response', item.name, responseJsonSchema)
    } catch (error) {
      console.log(
        colors.red(
          `${item.url},该接口是否存在或者是否将该接口请求url配置到urlMapping中`
        )
      )
      process.exit()
    }
  })

  console.log(colors.green(`生成成功: )`))
}
