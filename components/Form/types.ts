import { FormSubmitFunction } from '@/types'
import { Schema } from 'zod'

export type FormProps<T> = {
  children: React.ReactNode
  schema: Schema
  defaultValues?: Record<string, string>
  onSubmit?: FormSubmitFunction<T>
  buttonLabel?: string
  className?: string
  revalidate?: () => void
}
