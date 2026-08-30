import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { getAllSolutionSubjects, getSolutionsBySubject } from '@/lib/catalog'
import { BookCard } from '@/components/book-card'

export function generateStaticParams() {
  return getAllSolutionSubjects().map((subject) => ({ subject }))
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params
  const decodedSubject = decodeURIComponent(subject)
  return { title: `${decodedSubject} Solutions`, description: `NCERT Solutions for ${decodedSubject} — external, legal-safe.` }
}

export default async function SolutionSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  const decodedSubject = decodeURIComponent(subject)
  const books = getSolutionsBySubject(decodedSubject)
  if (books.length === 0) notFound()

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link href="/solutions" className="flex items-center gap-1 self-start text-sm font-bold text-orange hover:opacity-70">
        <ChevronLeft className="size-4" /> All Solutions
      </Link>
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl text-foreground text-center">{decodedSubject} — Solutions</h1>
        <p className="text-base text-muted-foreground text-center">
          {books.length} {books.length === 1 ? 'solution book' : 'solution books'} · External links
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full place-items-center stagger-children">
        {books.map((book) => (<BookCard key={book.id} book={book} showClass />))}
      </div>
      <p className="text-center text-xs text-muted-foreground/70 max-w-2xl">Solutions are unofficial external guides. For official textbooks, visit <Link href={`/subjects/${encodeURIComponent(decodedSubject)}`} className="font-bold text-gold hover:opacity-80">{decodedSubject} Textbooks</Link>.</p>
    </div>
  )
}
