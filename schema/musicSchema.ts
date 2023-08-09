import z from 'zod'
import { imgSchema } from './shared'

export const musicSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  thumbnail: imgSchema,
  url: z.string().url(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
})
