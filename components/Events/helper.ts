export const dateFormatter = (date: Date) => {
  const month = date.toLocaleString('default', { month: 'long' })

  return `${month} ${date.getDate()}, ${date.getFullYear()}`
}
