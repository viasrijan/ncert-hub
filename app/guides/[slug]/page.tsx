import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { GUIDES, getGuide } from '@/lib/guides'
import { ProsePage, ProseSection } from '@/components/prose-page'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return { title: 'Guide not found' }
  return { title: guide.title, description: guide.description }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-12">
      <Link href="/guides" className="flex items-center gap-1 self-start text-sm font-bold text-gold hover:text-gold/70">
        <ChevronLeft className="size-4" /> All guides
      </Link>
      <ProsePage title={guide.title} intro={`${guide.description} · ${guide.readMinutes} minute read.`}>
        {guide.sections.map((section) => (
          <ProseSection key={section.heading} heading={section.heading}>
            {section.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </ProseSection>
        ))}
        <section className="flex flex-col gap-2 rounded-2xl bg-card/60 backdrop-blur-sm shadow-card p-6">
          <h2 className="text-lg font-extrabold text-foreground">Keep reading</h2>
          <div className="flex flex-col gap-2">
            {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="text-[14px] font-bold text-gold hover:opacity-70">
                {g.title} →
              </Link>
            ))}
          </div>
        </section>
      </ProsePage>
    </div>
  )
}
