import {
  eventSchema,
  eventSchemaApi,
  musicSchema,
  musicSchemaApi,
} from '@/schema'
import { z } from 'zod'

const musicType = musicSchema()
export type Music = z.infer<typeof musicType>

export type MusicApi = z.infer<typeof musicSchemaApi>

export type Event = z.infer<typeof eventSchema>

export type EventApi = z.infer<typeof eventSchemaApi>

export type FormSubmitFunction<T extends { [K in keyof T]: T[K] }> = (
  data: T
) => Promise<void>
