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
  date: z.string(),
  url: z.string().url('link should start with https://'),
})

export const eventSchemaApi = z.array(
  eventSchema.extend({
    id: z.coerce.number(),
    date: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
)
