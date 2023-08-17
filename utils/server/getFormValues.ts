export const getFormValues = <
  TObj extends { [K in keyof TObj]: TObj[K] },
  X extends keyof TObj | {} = {}
>(
  formData: FormData
): [Omit<TObj, X extends keyof TObj ? X : never>, Blob | undefined] => {
  const formDataEntries = Array.from(formData.entries()) as Array<
    [keyof TObj, TObj[keyof TObj] | any]
  >

  const mappedEntries = {} as TObj
  let file: Blob | undefined

  for (const [key, val] of formDataEntries) {
    if (val instanceof Blob) {
      file = val
      continue
    }

    mappedEntries[key] = val
  }

  return [mappedEntries, file]
}
