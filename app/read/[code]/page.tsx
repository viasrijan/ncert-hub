import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BOOKS, SOLUTIONS, findBookByPdfCode, toRoman } from '@/lib/catalog'
import { Reader } from '@/components/reader/reader'

export function generateStaticParams() {
  return [...BOOKS, ...SOLUTIONS].flatMap((b) => b.chapters.map((c) => ({ code: c.pdfCode })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>
}): Promise<Metadata> {
  const { code } = await params
  const match = findBookByPdfCode(code)
  if (!match) return { title: 'Chapter not found', robots: { index: false, follow: false } }
  // Reader pages are pure PDF viewers with no publisher content — keep them
  // working for users but out of search indexes and ad-free.
  return {
    title: `${match.chapter.title} — ${match.book.title}`,
    description: `Read ${match.chapter.title} from ${match.book.title} (NCERT, Class ${toRoman(match.book.classNum)}).`,
    robots: { index: false, follow: false },
  }
  return {
    title: `${match.book.kind === 'solution' ? 'Solutions - ' : ''}${match.book.title} (Class ${match.book.classNum})`,
    description: `Read ${match.chapter.title} from ${match.book.title} (NCERT, Class ${toRoman(match.book.classNum)}).`,
  }
}

export default async function ReadPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const match = findBookByPdfCode(code)
  if (!match) notFound()

  return <Reader book={match.book} chapter={match.chapter} />
}
