import type { Metadata } from 'next'
import { ProsePage, ProseSection } from '@/components/prose-page'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms under which you may use NCERT Hub.',
}

export default function TermsPage() {
  return (
    <ProsePage
      title="Terms of Use"
      intro="By using NCERT Hub you agree to the following terms."
    >
      <ProseSection heading="Educational purpose">
        <p>
          NCERT Hub is provided free of charge for personal, non-commercial educational use — studying, teaching,
          and exam preparation. You may read chapters online and download PDFs for your own offline study.
        </p>
      </ProseSection>
      <ProseSection heading="Intellectual property">
        <p>
          All NCERT textbook content belongs to the National Council of Educational Research and Training
          (NCERT) and its respective authors. Solution guides belong to their respective publishers and
          websites. Nothing on this site transfers any ownership to you, and you must respect the original
          licences and attribution when reusing this material elsewhere.
        </p>
      </ProseSection>
      <ProseSection heading="Acceptable use">
        <p>
          You agree not to misuse the site: no bulk scraping or automated harvesting of the catalogue, no
          attempts to disrupt the service, and no republishing of the site&apos;s pages or generated solution
          documents as your own. Reasonable personal downloading for study is always welcome.
        </p>
      </ProseSection>
      <ProseSection heading="No warranties">
        <p>
          The site is provided “as is” without warranties of any kind. While every effort is made to keep books
          and chapters accurate and available, the maintainer does not guarantee uninterrupted access,
          completeness, or fitness for any particular examination. Always cross-check critical material against
          official NCERT publications.
        </p>
      </ProseSection>
      <ProseSection heading="Changes">
        <p>
          These terms may be updated from time to time as the site evolves. Continued use of NCERT Hub after
          changes constitutes acceptance of the updated terms.
        </p>
      </ProseSection>
    </ProsePage>
  )
}
