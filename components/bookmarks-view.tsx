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

  const textbooks = books.filter((b) => b.kind !== 'solution')
  const solutions = books.filter((b) => b.kind === 'solution')

  return (
    <div className="flex w-full flex-col gap-10">
      {textbooks.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Textbooks — {textbooks.length}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full place-items-center">
            {textbooks.map((book) => (
              <BookCard key={book.id} book={book} showClass />
            ))}
          </div>
        </section>
      )}
      {solutions.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Solutions — {solutions.length}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full place-items-center">
            {solutions.map((book) => (
              <div key={book.id} className="relative">
                <BookCard book={book} showClass />
                <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-foreground shadow">Solutions</span>
              </div>
            ))}
          </div>
        </section>
      )}
      {textbooks.length === 0 && solutions.length > 0 && (
        <p className="text-center text-xs text-muted-foreground">Solutions are shown separately from textbooks.</p>
      )}
    </div>
  )
}
