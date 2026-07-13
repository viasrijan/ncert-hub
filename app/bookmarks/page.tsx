import type { Metadata } from 'next'
import { BookmarksView } from '@/components/bookmarks-view'

export const metadata: Metadata = {
  title: 'Saved',
  description: 'Your bookmarked NCERT textbooks and recently read chapters.',
}

export default function BookmarksPage() {
  return <BookmarksView />
}
