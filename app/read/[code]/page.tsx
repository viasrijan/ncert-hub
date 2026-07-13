import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BOOKS, findBookByPdfCode, toRoman } from '@/lib/catalog'
import { Reader } from '@/components/reader/reader'

export function generateStaticParams() {
  return BOOKS.flatMap((b) => b.chapters.map((c) => ({ code: c.pdfCode })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>
}): Promise<Metadata> {
  const { code } = await params
  const match = findBookByPdfCode(code)
  if (!match) return { title: 'Chapter not found' }
  return {
    title: `${match.chapter.title} — ${match.book.title}`,
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
