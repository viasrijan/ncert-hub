import type { Metadata } from 'next'
import { BookmarksView } from '@/components/bookmarks-view'

export const metadata: Metadata = {
  title: 'Saved Books',
  description: 'Your bookmarked NCERT textbooks.',
}

export default function BookmarksPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl text-white text-center">Saved books</h1>
      </div>
      <BookmarksView />
    </div>
  )
}
