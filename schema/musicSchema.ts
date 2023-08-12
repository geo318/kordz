import z from 'zod'
import { imgSchema } from './shared'

export const musicSchema = z.object({
  title: z.string(),
  thumbnail: imgSchema,
  url: z.string().url(),
})

export const musicSchemaApi = musicSchema.extend({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
