import { Music } from '@/types'
import { getFormValues, writeFile } from '@/utils'
import { PrismaClient } from '@prisma/client'

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

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const [mapped, file] = getFormValues<Music>(formData)

  if (!file) return new Response('file not uploaded')

  try {
    const { path } = await writeFile(file)

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


export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const formData = await req.formData()

  try {
    await prisma.music.update({
      where: {
        id: Number(id),
      },
      data: formData,
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response('ok', { status: 201 })
}

export const DELETE = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  try {
    await prisma.music.delete({
      where: {
        id: Number(id),
      },
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response('deleted', { status: 202 })
}