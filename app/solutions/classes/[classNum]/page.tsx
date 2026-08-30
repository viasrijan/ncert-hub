import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { CLASSES, getSolutionsByClass, toRoman } from '@/lib/catalog'
import { BookCard } from '@/components/book-card'

export function generateStaticParams() {
  return CLASSES.map((c) => ({ classNum: String(c) }))
}

export async function generateMetadata({ params }: { params: Promise<{ classNum: string }> }): Promise<Metadata> {
  const { classNum } = await params
  return { title: `Class ${toRoman(Number(classNum))} Solutions`, description: `NCERT Solutions for Class ${toRoman(Number(classNum))} — external, legal-safe.` }
}

export default async function SolutionClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params
  const c = Number(classNum)
  if (!Number.isInteger(c) || c < 1 || c > 12) notFound()
  const books = getSolutionsByClass(c)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link href="/solutions" className="flex items-center gap-1 self-start text-sm font-bold text-orange hover:opacity-70">
        <ChevronLeft className="size-4" /> All Solutions
      </Link>
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl text-foreground text-center">Class {toRoman(c)} — Solutions</h1>
        <p className="text-base text-muted-foreground text-center">
          {books.length} {books.length === 1 ? 'solution book' : 'solution books'} · External links open in new tabs
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full place-items-center stagger-children">
        {books.map((book) => (<BookCard key={book.id} book={book} showClass />))}
      </div>
      <p className="text-center text-xs text-muted-foreground/70 max-w-2xl">Solutions are unofficial external guides. For official textbooks, visit <Link href={`/classes/${c}`} className="font-bold text-gold hover:opacity-80">Class {toRoman(c)} Textbooks</Link>.</p>
    </div>
  )
}
