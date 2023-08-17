import { EventApi } from '@/types'
import { getFormValues } from '@/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const musicList = await prisma.event.findMany()
    return new Response(JSON.stringify(musicList), { status: 200 })
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const [mapped] = getFormValues<EventApi>(formData)

  try {
    await prisma.event.create({
      data: {
        ...mapped,
      },
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response('updated', { status: 201 })
}

export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const formData = await req.formData()

  try {
    await prisma.event.update({
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
    await prisma.event.delete({
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
