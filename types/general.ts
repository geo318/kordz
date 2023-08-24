import {
  eventSchema,
  eventSchemaApi,
  musicSchema,
  musicSchemaApi,
} from '@/schema'
import { z } from 'zod'

const musicTypePartial = musicSchema()
const musicType = musicSchema({ partial: false })

export type Music = z.infer<typeof musicType>

export type MusicPartial = z.infer<typeof musicTypePartial>

export type MusicApi = z.infer<typeof musicSchemaApi>

export type Event = z.infer<typeof eventSchema>

export type EventApi = z.infer<typeof eventSchemaApi>

export type FormSubmitFunction<T extends { [K in keyof T]: T[K] }> = (
  data: T
) => Promise<void>
