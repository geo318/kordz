import { imgSchema } from './shared'
import z from 'zod'

export const postSchemaBase = ({ partial = false }) =>
  z.object({
    location: z
      .string()
      .nonempty('image name is empty')
      .min(3, 'image name is too short')
      .max(50, 'image name is too long'),
    description: z
      .string()
      .nonempty('shouldn`t be empty')
      .min(10, 'description is too short')
      .max(100, 'description is too long'),
    date: z.coerce.date(),
    year: z.coerce
      .number()
      .positive('should be more then 0')
      .min(1900, 'should be more then 1900')
      .max(
        new Date().getFullYear(),
        `shouldn't be more then ${new Date().getFullYear()}`
      ),
    img: partial ? z.any() : imgSchema,
  })

export const uploadSchemaPartial = postSchemaBase({
  partial: true,
}).partial()
