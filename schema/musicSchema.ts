import z from 'zod'
import { imgSchema, imgSchemaOptional } from './shared'

export const musicSchema = ({ partial = false } = {}) =>
  z.object({
    title: z.string(),
    thumbnail: partial ? imgSchemaOptional.or(z.string()) : imgSchema,
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
