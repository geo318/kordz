import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'geo',
        email: 'geo@prisma.io' + Math.random(),
      },
    })
    return new Response(JSON.stringify(user))
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request, response: Response) {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}
