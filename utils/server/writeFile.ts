'use server'

import { generateFileName } from '@/utils'
import { staticPath, imagePaths } from '@/config'
import sharp from 'sharp'
import fs from 'fs'

export const writeFile = async (file: Blob) => {
  const buffer = Buffer.from(await file.arrayBuffer())
  const [publicDir, staticDir] = staticPath.split(/\//)
  const [filePath, blurPath] = [...imagePaths].map(
    (p) => `/${staticDir}${p}/${generateFileName(file.name)}`
  )

  imagePaths.forEach((p) => {
    const dir = `./${staticPath}${p}` as const
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  })

  const sharpBuffer = sharp(buffer)

  sharpBuffer
    .resize(800, 800, { fit: 'cover' })
    .toFile(`${publicDir}${filePath}`)

  sharpBuffer.resize(20, 20, { fit: 'cover' }).toFile(`${publicDir}${blurPath}`)

  const path = filePath.split(/\//).pop()
  return { path: `${imagePaths[0]}/${path}` }
}
