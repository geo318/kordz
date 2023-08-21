export const generateFileName = (fileName: string) => {
  const [name, ext] = fileName.split('.')
  const dateString = new Date().toISOString().replace(/[:.T-]/g, '')

  return `${name.trim().replace(/ /g, '-')}-${dateString}.${ext}`
}

export const getImage = (slug: string) => {
  return `${process.env.NEXT_PUBLIC_URL}${slug}`
}
