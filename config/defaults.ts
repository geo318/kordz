export const musicDefaultValues = {
  title: new Date().getFullYear(),
  url: 'Watercolor on paper',
}

export const postDefaultValues = {
  description: 'Watercolor on paper',
  year: new Date().getFullYear(),
  location: 'Watercolor on paper',
}

export const protectedRoutes = ['api/*', 'admin'] as const

export const staticPath = 'public/static' as const
export const imagePaths = ['/images', '/blur'] as const