'use server'

import { generateFileName } from '@/utils'
import sharp from 'sharp'

export const writeFile = async (file: Blob) => {
  const buffer = Buffer.from(await file.arrayBuffer())

  const filePath = `/images/${generateFileName(file.name)}`

  sharp(buffer).resize(800, 800, { fit: 'cover' }).toFile(`public${filePath}`)

  return { path: filePath }
}
