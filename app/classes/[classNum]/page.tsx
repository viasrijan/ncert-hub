import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { CLASSES, getBooksByClass, getSubjectsForClass, toRoman } from '@/lib/catalog'
import { BookCard } from '@/components/book-card'

export function generateStaticParams() {
  return CLASSES.map((c) => ({ classNum: String(c) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ classNum: string }>
}): Promise<Metadata> {
  const { classNum } = await params
  return {
    title: `Class ${toRoman(Number(classNum))} Textbooks`,
    description: `All NCERT textbooks for Class ${toRoman(Number(classNum))}.`,
  }
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classNum: string }>
}) {
  const { classNum } = await params
  const c = Number(classNum)
  if (!Number.isInteger(c) || c < 1 || c > 12) notFound()

  const books = getBooksByClass(c)
  const subjects = getSubjectsForClass(c)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2">
        <Link
          href="/classes"
          className="flex items-center gap-1 self-start text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="size-4" /> All classes
        </Link>
        <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl">
          Class {toRoman(c)}
        </h1>
        <p className="text-base text-muted-foreground">
          {books.length} {books.length === 1 ? 'textbook' : 'textbooks'} across{' '}
          {subjects.length} {subjects.length === 1 ? 'subject' : 'subjects'}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {subjects.map((subject) => (
          <section key={subject} aria-label={subject} className="flex flex-col gap-3">
            <h2 className="text-lg font-extrabold">{subject}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {books
                .filter((b) => b.subject === subject)
                .map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
