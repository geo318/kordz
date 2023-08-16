import z from 'zod'
import { imgSchema } from './shared'

export const musicSchema = z.object({
  title: z.string(),
  thumbnail: imgSchema,
  url: z.string().url('link should start with https://'),
})

export const musicSchemaApi = z.array(
  z.object({
    id: z.coerce.number(),
    title: z.string(),
    thumbnail: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
)
