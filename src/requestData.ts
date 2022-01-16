import axios from 'axios'
import fs from 'fs'

export default async (url: string) => {
  const res = await axios.get(url)
  // fs.writeFileSync('./swagger.json', JSON.stringify(res.data, null, '\t'))
  return res.data
}
