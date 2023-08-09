import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const music = await prisma.music.create({
      data: {
        thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
        title: 'Test',
        url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      },
    })
    return new Response(JSON.stringify(music))
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData()
  const formDataEntries = Array.from(formData.entries())
  const mapped = formDataEntries.reduce(
    (acc: Record<string, string | Blob>, [name, value]) => {
      acc[name] = value
      return acc
    },
    {}
  )
  console.log(mapped,formData)
  return new Response(JSON.stringify(mapped))
}
