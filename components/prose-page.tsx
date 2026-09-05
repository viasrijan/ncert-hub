import type { ReactNode } from 'react'

// Shared layout for trust / guide pages — matches the site's centered
// content style (max-w-5xl, display headings, muted body text).
export function ProsePage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-3 animate-fade-in-up">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl text-foreground">{title}</h1>
        {intro && <p className="text-lg text-muted-foreground max-w-2xl">{intro}</p>}
      </div>
      <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-foreground/85 max-w-3xl mx-auto w-full">
        {children}
      </div>
    </div>
  )
}

export function ProseSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-extrabold text-foreground">{heading}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  )
}
