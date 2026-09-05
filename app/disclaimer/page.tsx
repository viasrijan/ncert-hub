import type { Metadata } from 'next'
import { ProsePage, ProseSection } from '@/components/prose-page'

export const metadata: Metadata = {
  title: 'Copyright & Disclaimer',
  description: 'Copyright attribution and disclaimer for NCERT Hub.',
}

export default function DisclaimerPage() {
  return (
    <ProsePage
      title="Copyright & Disclaimer"
      intro="NCERT Hub is an unofficial, independent educational project."
    >
      <ProseSection heading="No affiliation">
        <p>
          NCERT Hub is not affiliated with, endorsed by, sponsored by, or connected to the National Council of
          Educational Research and Training (NCERT), the Central Board of Secondary Education (CBSE), or any
          government body. For authoritative material, always visit the official website at{' '}
          <a
            href="https://ncert.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:opacity-70"
          >
            ncert.nic.in
          </a>
          .
        </p>
      </ProseSection>
      <ProseSection heading="Copyright attribution">
        <p>
          All textbook PDFs and their contents are the copyright of NCERT and the respective authors. Solution
          guides are the property of their respective publishers and educational websites, and are linked — not
          hosted — from this site. If you are a rights holder and believe any linked or mirrored content
          infringes your rights, please raise an issue at{' '}
          <a
            href="https://github.com/viasrijan/ncert-hub/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:opacity-70"
          >
            github.com/viasrijan/ncert-hub/issues
          </a>{' '}
          with details, and it will be reviewed and removed promptly where appropriate.
        </p>
      </ProseSection>
      <ProseSection heading="Accuracy">
        <p>
          Chapter lists, book groupings, and solution documents are compiled in good faith and updated
          periodically, but errors can occur — especially when NCERT revises or rationalises textbooks. Treat
          this site as a study aid, and verify syllabus-critical content against official NCERT editions before
          relying on it for examinations.
        </p>
      </ProseSection>
      <ProseSection heading="Advertising">
        <p>
          This site displays advertisements served by Google AdSense to cover hosting costs. Advertisements do
          not imply endorsement of the advertised products or services by NCERT Hub or by NCERT.
        </p>
      </ProseSection>
    </ProsePage>
  )
}
