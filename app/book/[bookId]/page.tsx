import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { BOOKS, getBook, toRoman } from '@/lib/catalog'
import { ChapterList } from '@/components/chapter-list'
import { BookmarkButton } from '@/components/bookmark-button'
import { getSubjectGradient } from '@/lib/subject-gradients'

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
      <Link href={`/classes/${book.classNum}`} className="flex items-center gap-1.5 text-[14px] font-bold text-white/50 transition-colors hover:text-white animate-fade-in">
        <ChevronLeft className="size-[18px]" /> Class {toRoman(book.classNum)}
      </Link>

      <div className="flex flex-col items-center text-center gap-5 animate-fade-in-up">
        <div className="relative aspect-[3/4] w-36 shrink-0 overflow-hidden rounded-2xl border border-border/30 shadow-lg md:w-44" style={{ background: getSubjectGradient(book.subject).gradient }}>
          {(() => { const Ic = getSubjectGradient(book.subject).icon; return <Ic className="size-12 text-white/30 absolute inset-0 m-auto" strokeWidth={1.5} /> })()}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl text-white text-balance">{book.title}</h1>
          <p className="text-[15px] font-semibold text-white/50">{book.chapters.length} {book.chapters.length === 1 ? 'chapter' : 'chapters'}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <BookmarkButton bookId={book.id} />
            <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-border/30 bg-card/80 px-4 py-3 text-[14px] font-bold text-white/50 backdrop-blur-sm transition-all duration-200 hover:text-white hover:border-border hover:shadow-sm">
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
