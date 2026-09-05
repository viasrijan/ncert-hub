import type { Metadata } from 'next'
import { ProsePage, ProseSection } from '@/components/prose-page'

export const metadata: Metadata = {
  title: 'About NCERT Hub',
  description: 'What NCERT Hub is, who maintains it, and how to get in touch.',
}

export default function AboutPage() {
  return (
    <ProsePage
      title="About NCERT Hub"
      intro="A free, unofficial library that makes NCERT textbooks easy to browse, read, and download — Classes I to XII."
    >
      <ProseSection heading="What this site is">
        <p>
          NCERT Hub collects the official NCERT textbooks published by the National Council of Educational
          Research and Training (NCERT), organises them by class and subject, and presents every chapter in a
          fast, mobile-friendly reader. Students can read chapters online, download them for offline study, and
          bookmark books to revisit later.
        </p>
        <p>
          The site also hosts a Solutions section with chapter-wise answer guides that open from trusted
          external sources, so learners can check their work after attempting questions themselves.
        </p>
      </ProseSection>
      <ProseSection heading="Who maintains it">
        <p>
          NCERT Hub is an independent project maintained by Srijan in his own time. It is not affiliated with,
          endorsed by, or connected to NCERT, CBSE, or any government body. All textbook content belongs to its
          respective copyright holders and is shared here purely for educational access.
        </p>
      </ProseSection>
      <ProseSection heading="Contact">
        <p>
          There is no support phone number or public email address for this project. The fastest way to report a
          broken chapter, an incorrect book, or a site bug — or to suggest an improvement — is to open an issue
          on the public project repository:
        </p>
        <p>
          <a
            href="https://github.com/viasrijan/ncert-hub/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:opacity-70"
          >
            github.com/viasrijan/ncert-hub/issues →
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          Please include the class, book title, and chapter name (for example, “Class 8 — Exploring Society,
          Chapter 2”) so the issue can be fixed quickly.
        </p>
      </ProseSection>
    </ProsePage>
  )
}
