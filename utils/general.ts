export const generateFileName = (fileName: string) => {
  const [name, ext] = fileName.split('.')
  const dateString = new Date().toISOString().replace(/[:.T-]/g, '')

  return `${name.trim().replace(/ /g, '-')}-${dateString}.${ext}`
}
