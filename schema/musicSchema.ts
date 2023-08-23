import z from 'zod'
import { imgSchema } from './shared'

export const musicSchema = ({ partial = false } = {}) =>
  z.object({
    title: z.string(),
    thumbnail: partial ? z.union([imgSchema, z.undefined()]) : imgSchema,
    url: z.string().url('link should start with https://'),
  })

export const musicSchemaApi = z.array(
  z.object({
    id: z.coerce.number(),
    title: z.string(),
    thumbnail: z.string(),
    url: z.string().url(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
)
