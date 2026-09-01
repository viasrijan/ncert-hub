import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { BOOKS, SOLUTIONS, getBook, toRoman } from '@/lib/catalog'
import { ChapterList } from '@/components/chapter-list'
import { BookmarkButton } from '@/components/bookmark-button'
import { BookDownloadButton } from '@/components/book-download-button'
import { getSubjectGradient } from '@/lib/subject-gradients'

export function generateStaticParams() { return [...BOOKS, ...SOLUTIONS].map((b) => ({ bookId: b.id })) }

export async function generateMetadata({ params }: { params: Promise<{ bookId: string }> }): Promise<Metadata> {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) return { title: 'Book not found' }
  return { title: `${book.kind === 'solution' ? 'Solutions - ' : ''}${book.title} (Class ${book.classNum})`, description: `Read and download chapters of ${book.title}` }
}

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params
  const book = getBook(bookId)
  if (!book) notFound()
  const isSolution = book.kind === 'solution'
  const gradient = getSubjectGradient(book.subject)
  const CoverIcon = gradient.icon

  const viewLinkClass = 'view-link flex items-center gap-1 text-sm'

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col items-stretch gap-8 px-6 py-6 md:px-10 lg:h-[calc(100svh-13.5rem)] lg:flex-row lg:gap-12 lg:overflow-hidden lg:py-4">
      {/* Left: cover + actions, locked vertically in the middle of the site */}
      <section className="flex flex-col lg:w-[42%] lg:shrink-0">
        <Link
          href={isSolution ? `/solutions/classes/${book.classNum}` : `/classes/${book.classNum}`}
          className="flex shrink-0 items-center gap-1.5 self-start text-[14px] font-bold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-[18px]" /> Class {toRoman(book.classNum)} {isSolution && '· Solutions'}
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8 text-center lg:py-0">
          <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-52" style={{ background: gradient.gradient }}>
            <CoverIcon className="absolute inset-0 m-auto size-12 text-white/30" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl text-foreground text-balance">{book.title}</h1>
            <p className="text-[15px] font-semibold text-muted-foreground">{book.chapters.length} {book.chapters.length === 1 ? 'chapter' : 'chapters'}</p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-2">
              <BookmarkButton bookId={book.id} />
              <BookDownloadButton pdfCode={book.chapters[0].pdfCode} label="Download" />
              {isSolution && book.sourceUrl && (
                <a href={book.sourceUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl btn-gradient px-3 py-2 text-[13px] font-bold transition-all duration-200 hover:scale-105 hover:shadow-elevated hover:opacity-90">
                  <ExternalLink className="size-4" /> Open Solutions
                </a>
              )}
              <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-card/80 px-3 py-2 text-[13px] font-bold text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:text-foreground hover:shadow-elevated">
                <ExternalLink className="size-4" /> NCERT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Right: chapters, independently scrollable */}
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 pt-4 lg:pt-6">
          <div className="h-full overflow-y-auto pr-1 lg:pr-3">
            <ChapterList book={book} />
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-8 pt-5">
          {isSolution && book.solutionFor && (
            <Link href={`/book/${book.solutionFor}`} className={viewLinkClass}>
              <span className="text-white">View all</span> <strong className="text-base font-bold text-gold">Original Textbooks</strong>
            </Link>
          )}
          {!isSolution && (
            <Link href={`/book/${book.id}_sol`} className={viewLinkClass}>
              <span className="text-white">View all</span> <strong className="text-base font-bold text-gold">Solutions</strong>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
