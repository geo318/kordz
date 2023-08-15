import { Music } from '@/types'
import { getFormValues, writeFile } from '@/utils'
import { PrismaClient } from '@prisma/client'
import { NextApiResponse } from 'next'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const musicList = await prisma.music.findMany()
    return new Response(JSON.stringify(musicList))
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

export const POST = async (req: Request, res: NextApiResponse) => {
  const formData = await req.formData()
  const [mapped, file] = getFormValues<Music, 'thumbnail'>(formData)

  if (!file) return new Response('file not uploaded')

  try {
    const { path } = await writeFile(file)
    console.log(path, mapped)
    await prisma.music.create({
      data: {
        ...mapped,
        thumbnail: path,
      },
    })
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response(JSON.stringify(mapped))
}
