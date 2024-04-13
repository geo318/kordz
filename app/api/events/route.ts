import { EventApi } from '@/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const PATCH = async (req: Request) => {
  const events = (await req.json()) as EventApi

  try {
    await prisma.$transaction(
      events.map((event, i) =>
        prisma.event.update({
          where: { id: Number(event.id) },
          data: { ...event, order: i },
        })
      )
    )
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }

  return new Response('ok', { status: 201 })
}
