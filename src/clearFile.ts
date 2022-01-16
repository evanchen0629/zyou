import fs from 'fs'
export default function clearFile() {
  if (fs.existsSync('./params.ts')) {
    fs.writeFileSync('./params.ts', '', { flag: 'w' })
  }
  if (fs.existsSync('./response.ts')) {
    fs.writeFileSync('./response.ts', '', { flag: 'w' })
  }
}
