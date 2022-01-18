import fs from 'fs'
import path from 'path'
import { mkdirsSync } from '../utils'
export default function clearFile(config: any) {
  if (!fs.existsSync(path.resolve(process.cwd(), config.output))) {
    mkdirsSync(path.resolve(process.cwd(), config.output))
  }

  if (
    fs.existsSync(
      `${path.resolve(process.cwd(), config.output)}/${config.paramsAlias}.ts`
    )
  ) {
    fs.writeFileSync(
      `${path.resolve(process.cwd(), config.output)}/${config.paramsAlias}.ts`,
      '',
      { flag: 'w' }
    )
  }
  if (
    fs.existsSync(
      `${path.resolve(process.cwd(), config.output)}/${config.responseAlias}.ts`
    )
  ) {
    fs.writeFileSync(
      `${path.resolve(process.cwd(), config.output)}/${
        config.responseAlias
      }.ts`,
      '',
      { flag: 'w' }
    )
  }
}
