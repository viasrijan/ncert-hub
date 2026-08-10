import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support NCERT Hub so I can keep working on such projects.',
}

export default function DonatePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center gap-6 text-center animate-fade-in-up">
        <h1 className="font-display text-6xl font-bold tracking-tight text-foreground md:text-7xl">Donate</h1>
        <p className="max-w-xl text-lg text-foreground/80">
          If you find this website useful, feel free to Donate so I could keep working on such projects :)
        </p>
        <a
          href="https://www.paypal.me/iSrijan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-8 py-3.5 text-lg font-bold text-white shadow-elevated transition-opacity hover:opacity-90"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
          </svg>
          Donate
        </a>
      </div>
    </div>
  )
}
