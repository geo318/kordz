export const getFormValues = <
  TObj extends { [K in keyof TObj]: TObj[K] },
  X extends string
>(
  formData: FormData
): [Omit<TObj, X>, Blob | undefined] => {
  const formDataEntries = Array.from(formData.entries()) as Array<
    [keyof TObj, TObj[keyof TObj]]
  >

  const mappedEntries = {} as TObj
  let file: Blob | undefined = undefined

  for (const [key, val] of formDataEntries) {
    if (key === 'thumbnail') {
      file = val
      continue
    }

    mappedEntries[key] = val
  }

  return [mappedEntries, file]
}
