import type { Metadata } from 'next'
import { ProsePage, ProseSection } from '@/components/prose-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How NCERT Hub handles your data, cookies, and third-party advertising.',
}

export default function PrivacyPage() {
  return (
    <ProsePage
      title="Privacy Policy"
      intro="Last updated: September 2026. NCERT Hub is designed to collect as little data as possible."
    >
      <ProseSection heading="Data stored on your device">
        <p>
          Your bookmarks, recently-read chapters, and theme preference are stored locally in your own browser
          (local storage). This data never leaves your device, is never sent to any server operated by NCERT
          Hub, and is never sold or shared. Clearing your browser data removes it permanently.
        </p>
      </ProseSection>
      <ProseSection heading="Analytics">
        <p>
          The site uses privacy-friendly, aggregated visit analytics (Vercel Analytics) to understand overall
          usage, such as which classes are most visited. This does not build personal profiles and is not linked
          to your bookmarks or reading history.
        </p>
      </ProseSection>
      <ProseSection heading="Advertising and cookies">
        <p>
          NCERT Hub shows advertisements served by Google AdSense. Google uses cookies to serve ads based on your
          prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and its
          partners to serve ads based on your visit to this site and/or other sites on the Internet.
        </p>
        <p>
          You may opt out of personalised advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:opacity-70"
          >
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of third-party vendors&apos; use of cookies for personalised
          advertising by visiting{' '}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:opacity-70"
          >
            aboutads.info/choices
          </a>
          .
        </p>
      </ProseSection>
      <ProseSection heading="External links">
        <p>
          Chapter PDFs are served from NCERT&apos;s official servers and public content mirrors, and solution
          links open trusted external educational websites. Those third parties operate under their own privacy
          policies, which you should review separately.
        </p>
      </ProseSection>
      <ProseSection heading="Children">
        <p>
          NCERT Hub is a general educational resource and does not knowingly collect personal information from
          anyone, including children. Because bookmarks and preferences stay in the browser, there is nothing to
          request, correct, or delete on any server.
        </p>
      </ProseSection>
    </ProsePage>
  )
}
