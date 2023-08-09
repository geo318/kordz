export type Props<T> = {
  handleSubmit: (data: T) => Promise<void>
  defaultValues?: Partial<T>
}
