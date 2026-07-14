import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { BOOKS, getBook, toRoman } from '@/lib/catalog'
import { ChapterList } from '@/components/chapter-list'
import { BookmarkButton } from '@/components/bookmark-button'
import { assetPath } from '@/lib/utils'

export function generateStaticParams() { return BOOKS.map((b) => ({ bookId: b.id })) }

export async function generateMetadata({ params }: { params: Promise<{ bookId: string }> }): Promise<Metadata> {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) return { title: 'Book not found' }
  return { title: `${book.title} — Class ${toRoman(book.classNum)}`, description: `Read and download chapters of ${book.title}` }
}

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) notFound()

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-12 md:px-8 md:py-16">
      <Link href={`/classes/${book.classNum}`} className="flex items-center gap-1.5 text-[14px] font-bold text-muted-foreground transition-colors hover:text-foreground animate-fade-in">
        <ChevronLeft className="size-[18px]" /> Class {toRoman(book.classNum)}
      </Link>

      <div className="flex flex-col items-center text-center gap-5 animate-fade-in-up">
        <div className="relative aspect-[3/4] w-36 shrink-0 overflow-hidden rounded-2xl border border-border/30 shadow-lg md:w-44">
          <Image src={assetPath(book.cover || '/covers/general.png')} alt="" fill sizes="176px" className="object-cover" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 text-[13px] font-bold text-muted-foreground uppercase tracking-wider">
            <span className="inline-flex items-center justify-center rounded-lg bg-orange/10 px-2 py-1 text-[11px] font-extrabold text-orange">{toRoman(book.classNum)}</span>
            {book.subject}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl text-balance">{book.title}</h1>
          <p className="text-[15px] font-semibold text-muted-foreground">{book.chapters.length} {book.chapters.length === 1 ? 'chapter' : 'chapters'}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <BookmarkButton bookId={book.id} />
            <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-border/30 bg-card/80 px-4 py-3 text-[14px] font-bold text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:text-foreground hover:border-border hover:shadow-sm">
              <ExternalLink className="size-[16px]" /> NCERT official
            </a>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ChapterList book={book} />
      </div>
    </div>
  )
}
