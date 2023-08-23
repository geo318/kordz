import { Music } from '@/types'
import { getFormValues, getImage, writeFile } from '@/utils'
import { PrismaClient } from '@prisma/client'
import { restartApp } from '@/utils'

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
    restartApp()
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response('ok', { status: 201 })
}

export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const formData = await req.formData()
  const [mapped, file] = getFormValues<Music>(formData)
  let pathName: string | undefined = undefined

  if (file) {
    const { path } = await writeFile(file)
    pathName = path
  }

  try {
    await prisma.music.update({
      where: {
        id: Number(id),
      },
      data: { ...mapped, ...(pathName ? { thumbnail: pathName } : {}) },
    })
    restartApp()
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
