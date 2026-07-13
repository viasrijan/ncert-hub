import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { BOOKS, getBook, toRoman } from '@/lib/catalog'
import { ChapterList } from '@/components/chapter-list'
import { BookmarkButton } from '@/components/bookmark-button'
import { assetPath } from '@/lib/utils'

export function generateStaticParams() {
  return BOOKS.map((b) => ({ bookId: b.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string }>
}): Promise<Metadata> {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) return { title: 'Book not found' }
  return {
    title: `${book.title} — Class ${toRoman(book.classNum)}`,
    description: `Read and download chapters of ${book.title} (NCERT, Class ${toRoman(book.classNum)}).`,
  }
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>
}) {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) notFound()

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link
        href={`/classes/${book.classNum}`}
        className="flex items-center gap-1 self-start text-sm font-bold text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" /> Class {toRoman(book.classNum)}
      </Link>

      <div className="flex gap-4 md:gap-6">
        <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-muted md:w-32">
          <Image
            src={assetPath(book.cover || '/covers/general.png')}
            alt=""
            fill
            sizes="(max-width: 768px) 96px, 128px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-sm font-bold text-primary">
            Class {toRoman(book.classNum)} · {book.subject}
          </p>
          <h1 className="font-sans text-xl font-extrabold leading-tight tracking-tight md:text-2xl text-balance">
            {book.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {book.chapters.length} {book.chapters.length === 1 ? 'chapter' : 'chapters'}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <BookmarkButton bookId={book.id} />
            <a
              href="https://ncert.nic.in/textbook.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-bold text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              <ExternalLink className="size-4" /> NCERT official
            </a>
          </div>
        </div>
      </div>

      <ChapterList book={book} />
    </div>
  )
}
