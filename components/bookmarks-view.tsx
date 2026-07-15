'use client'

import { getBook, toRoman } from '@/lib/catalog'
import { useBookmarks } from '@/lib/library-store'
import { BookCard } from '@/components/book-card'

export function BookmarksView() {
  const { bookmarks } = useBookmarks()
  const books = bookmarks
    .map((id) => getBook(id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b))

  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted-foreground">
        <p className="text-lg font-semibold">No saved books yet</p>
        <p className="text-sm">Bookmark books by tapping the icon on any cover.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full place-items-center">
      {books.map((book) => (
        <BookCard key={book.id} book={book} showClass />
      ))}
    </div>
  )
}
