export const objToFormData = <T>(data: { [K in keyof T]: T[K] }, extenralFormData?: FormData) => {
  const formData = extenralFormData || new FormData() 

  for (const key in data) {
    if (key in data) {
      formData.append(key, data[key] as string | Blob)
    }
  }
  return formData
}
