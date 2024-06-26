import z from 'zod'

export const eventSchema = z.object({
  location: z
    .string()
    .nonempty('location name is empty')
    .min(1, 'location name is too short')
    .max(50, 'location name is too long'),
  description: z
    .string()
    .nonempty('shouldn`t be empty')
    .min(1, 'description is too short')
    .max(200, 'description is too long'),
  date: z.string().min(3, 'location name is too short'),
  url: z
    .string()
    .max(0, 'link should start with https:// and have url format')
    .or(z.string().url()),
})

export const eventSchemaApi = z.array(
  eventSchema.extend({
    id: z.coerce.number(),
    date: z.string(),
    order: z.coerce.number(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
)
