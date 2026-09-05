import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { CLASSES, getBooksByClass, toRoman } from '@/lib/catalog'
import { getClassDescription } from '@/lib/content'
import { BookCard } from '@/components/book-card'

export function generateStaticParams() {
  return CLASSES.map((c) => ({ classNum: String(c) }))
}

export async function generateMetadata({ params }: { params: Promise<{ classNum: string }> }): Promise<Metadata> {
  const { classNum } = await params
  const c = Number(classNum)
  const guide = getClassDescription(c)
  return {
    title: `Class ${toRoman(Number(classNum))}`,
    description: guide
      ? `All NCERT textbooks for Class ${toRoman(c)}: ${guide.blurb.slice(0, 140)}…`
      : `All NCERT textbooks for Class ${toRoman(Number(classNum))}.`,
  }
}

export default async function ClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params
  const c = Number(classNum)
  if (!Number.isInteger(c) || c < 1 || c > 12) notFound()
  const books = getBooksByClass(c)
  const guide = getClassDescription(c)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link href="/classes" className="flex items-center gap-1 self-start text-sm font-bold text-gold hover:text-gold/70">
        <ChevronLeft className="size-4" /> All classes
      </Link>
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl text-foreground text-center">Class {toRoman(c)} NCERT Textbooks</h1>
        <p className="text-base text-muted-foreground text-center">
          {books.length} {books.length === 1 ? 'textbook' : 'textbooks'}
        </p>
      </div>
      {guide && (
        <section aria-label={`About Class ${toRoman(c)}`} className="w-full max-w-4xl rounded-2xl bg-card/60 backdrop-blur-sm shadow-card p-6 md:p-8 flex flex-col gap-4">
          <p className="text-[15px] leading-relaxed text-foreground/85">{guide.blurb}</p>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-extrabold text-foreground">How to study Class {toRoman(c)}</h2>
            <ul className="flex flex-col gap-2 list-disc pl-5 text-[14px] leading-relaxed text-foreground/80">
              {guide.studyTips.map((tip) => (<li key={tip}>{tip}</li>))}
            </ul>
          </div>
        </section>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full place-items-center stagger-children">
        {books.map((book) => (<BookCard key={book.id} book={book} />))}
      </div>
    </div>
  )
}
