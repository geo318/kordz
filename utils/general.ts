export const generateFileName = (fileName: string) => {
  const [name, ext] = fileName
    .trim()
    .replace(/\//g, '-')
    .toLocaleLowerCase()
    .split('.')
  const dateString = new Date()
    .toISOString()
    .toLocaleLowerCase()
    .replace(/[:.T-]/g, '')

  return `${name.trim().replace(/ /g, '-')}-${dateString}.${ext}`
}

export const getImage = (path: string) => {
  return `${process.env.NEXT_PUBLIC_URL}${path}`
}

export const getBlurImage = (path: string) => {
  if (!path) return
  const slug = path.split(/\//).pop()
  return `/static/blur/${slug}`
}
