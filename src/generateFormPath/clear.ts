import fs from 'fs'
import path from 'path'
import { mkdirsSync } from '../utils'

export default (config: any) => {
  if (!fs.existsSync(path.resolve(process.cwd(), config.generateFormPath))) {
    mkdirsSync(path.resolve(process.cwd(), config.generateFormPath))
  } else {
    fs.writeFileSync(path.resolve(process.cwd(), config.generateFormPath), '', {
      flag: 'w',
    })
  }
}
