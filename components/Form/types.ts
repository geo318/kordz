import { FieldValues, SubmitHandler } from 'react-hook-form'
import { Schema } from 'zod'

export type FormProps = {
  children: React.ReactNode
  schema: Schema
  defaultValues?: Record<string, string>
  onSubmit?: SubmitHandler<any>
  buttonLabel?: string
  className?: string
  revalidate?: () => void
}
