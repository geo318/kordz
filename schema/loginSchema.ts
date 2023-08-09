import z from 'zod'

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'username is required')
    .max(50, 'username is too long'),
  password: z
    .string()
    .min(3, 'password is too short')
    .max(50, 'password is too long'),
})
