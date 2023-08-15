import z from 'zod'

export const postSchema = z.object({
  location: z
    .string()
    .nonempty('location name is empty')
    .min(1, 'location name is too short')
    .max(50, 'location name is too long'),
  description: z
    .string()
    .nonempty('shouldn`t be empty')
    .min(1, 'description is too short')
    .max(100, 'description is too long'),
  date: z.coerce.date(),
})

export const postSchemaApi = postSchema.extend({
  id: z.coerce.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
