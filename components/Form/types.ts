import { FormSubmitFunction } from '@/types'
import { Schema } from 'zod'

export type FormProps = {
  children: React.ReactNode
  schema: Schema
  defaultValues?: { [key: string]: any }
  onSubmit?: FormSubmitFunction<any>
  buttonLabel?: string
  className?: string
  revalidate?: () => void
}
