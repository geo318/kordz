import { musicSchema } from '@/schema'
import { z } from 'zod'

export type Music = z.infer<typeof musicSchema>

export type FormSubmitFunction<T extends { [K in keyof T]: T[K] }> = (
  data: T
) => Promise<void>
