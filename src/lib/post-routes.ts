import type { CollectionEntry } from 'astro:content'

export const getPostSlug = (postEntryId: string) =>
  postEntryId.replace(/^(?:\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})-/, '')

export const getPostRouteParts = (postEntry: CollectionEntry<'posts'>) => {
  const postDate = postEntry.data.date
  const year = String(postDate.getUTCFullYear())
  const month = String(postDate.getUTCMonth() + 1).padStart(2, '0')
  const day = String(postDate.getUTCDate()).padStart(2, '0')

  return {
    day,
    month,
    slug: getPostSlug(postEntry.id),
    year,
  }
}

export const getPostRoute = (postEntry: CollectionEntry<'posts'>) => {
  const postRouteParts = getPostRouteParts(postEntry)

  return `/${postRouteParts.year}/${postRouteParts.month}/${postRouteParts.day}/${postRouteParts.slug}/`
}

export const sortPostsByDateDescending = (
  firstPost: CollectionEntry<'posts'>,
  secondPost: CollectionEntry<'posts'>
) => secondPost.data.date.getTime() - firstPost.data.date.getTime()

export const getVisiblePosts = (postEntries: CollectionEntry<'posts'>[]) =>
  postEntries.filter((postEntry) => postEntry.data.draft !== true)
