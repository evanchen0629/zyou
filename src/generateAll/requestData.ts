import axios from 'axios'
import fs from 'fs'

export default async (url: string) => {
  const res = await axios.get(url)
  return res.data
}
