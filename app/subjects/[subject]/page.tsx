import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { getAllSubjects, getBooksBySubject } from '@/lib/catalog'
import { BookCard } from '@/components/book-card'

export function generateStaticParams() {
  return getAllSubjects().map((subject) => ({ subject }))
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params
  const decodedSubject = decodeURIComponent(subject)
  return { title: `${decodedSubject} Textbooks`, description: `All NCERT textbooks for ${decodedSubject}.` }
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const decodedSubject = decodeURIComponent(subject)
  const books = getBooksBySubject(decodedSubject)
  if (books.length === 0) notFound()

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link href="/subjects" className="flex items-center gap-1 self-start text-sm font-bold text-gold hover:text-gold/70">
        <ChevronLeft className="size-4" /> All subjects
      </Link>
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl text-white text-center">{decodedSubject}</h1>
        <p className="text-base text-white/50 text-center">
          {books.length} {books.length === 1 ? 'textbook' : 'textbooks'}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full place-items-center stagger-children">
        {books.map((book) => (<BookCard key={book.id} book={book} />))}
      </div>
    </div>
  )
}
