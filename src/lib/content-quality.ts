export const hasPlaceholderMarkdown = (markdownBody?: string) => {
  if (!markdownBody) {
    return false
  }

  return /lorem ipsum/i.test(markdownBody)
}
