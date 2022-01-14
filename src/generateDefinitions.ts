import { quicktypeJSONSchema } from './quickType'
import fs from 'fs'
export default (data: any) => {
  Reflect.ownKeys(data.definitions).map(async (item, index) => {
    try {
      const { lines: swiftPerson } = await quicktypeJSONSchema(
        'TypeScript',
        item as string,
        JSON.stringify(data.definitions[item])
      )
      fs.writeFileSync('./interface.ts', swiftPerson.join('\n'), { flag: 'a+' })
    } catch (error) {
      console.log(item)
    }
  })
}
