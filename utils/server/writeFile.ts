'use server'

import fs from 'fs'
// import { generateFileName } from '@/utils'

export const writeFile = async (file: Blob) => {
  const buffer = Buffer.from(await file.arrayBuffer())
  const path = `/images/${file.name}`

  fs.writeFileSync(path, buffer)

  return { path }
}
