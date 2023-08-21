'use server'

import { generateFileName } from '@/utils'
import sharp from 'sharp'
import fs from 'fs'

export const writeFile = async (file: Blob) => {
  const buffer = Buffer.from(await file.arrayBuffer())

  const filePath = `/images/${generateFileName(file.name)}`
  const blurPath = `/blur/${generateFileName(file.name)}`

  if (!fs.existsSync('./public/images')) fs.mkdirSync('./public/images')
  if (!fs.existsSync('./public/blur')) fs.mkdirSync('./public/blur')
  const sharpBuffer = sharp(buffer)

  sharpBuffer.resize(800, 800, { fit: 'cover' }).toFile(`public${filePath}`)
  sharpBuffer.resize(20, 20, { fit: 'cover' }).toFile(`public${blurPath}`)

  return { path: filePath }
}
