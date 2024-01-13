export const getContent = (content: string) => {
  if (content.length > 131) {
    return content.slice(0, 131) + '...'
  }
  return content
}
