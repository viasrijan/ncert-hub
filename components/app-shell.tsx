'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bookmark, GraduationCap, Heart, Home, Search, BookOpen, FileCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/classes', label: 'Classes', icon: GraduationCap },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/solutions', label: 'Solutions', icon: FileCheck },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
  { href: '/support', label: 'Support', icon: Heart },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/read/')) return <>{children}</>

  return (
    <div className="flex min-h-svh">
      <aside className="sidebar-left sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center backdrop-blur-md lg:flex">
        <nav aria-label="Main" className="flex flex-col items-center gap-1.5 px-8">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = isActive(pathname, href)
            return (
              <Link key={href} href={href}
                className={cn(
                  'nav-btn w-full max-w-[150px] transition-colors duration-200',
                  active ? 'text-white font-bold' : 'text-gold',
                )}>
                <Icon className="h-5 w-5 shrink-0" /> {label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto h-svh">
        <main className="flex-1 pb-28 lg:pb-0 mt-4">
          <div className="mx-auto w-full max-w-5xl flex items-center justify-center gap-3 px-6 pt-10 pb-10 md:px-8">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="btn-gradient flex h-9 w-9 items-center justify-center rounded-full overflow-hidden shadow-elevated md:h-12 md:w-12">
                <svg viewBox="0 0 20 20" className="h-[19px] w-[19px] text-white md:h-[26px] md:w-[26px]" fill="currentColor" aria-hidden="true">
                  <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
                </svg>
              </span>
              <span className="font-display text-3xl font-extrabold tracking-tight text-gold md:text-5xl">NCERT Hub</span>
            </Link>
          </div>
          {children}
        </main>
        <footer className="hidden px-8 py-6 lg:flex lg:items-center lg:justify-center lg:gap-4">
          <p className="text-sm font-normal text-foreground text-center">
            An <strong className="font-bold">Unofficial Library</strong> of NCERT Books.{' '}Visit the official website at{' '}
            <a href="https://ncert.nic.in" target="_blank" rel="noopener noreferrer" className="font-bold text-gold no-underline hover:text-foreground">
              © NCERT.NIC.IN
            </a>
          </p>
          <a
            href="https://www.paypal.me/iSrijan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs font-bold text-black transition-opacity hover:opacity-90"
          >
            Donate
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
            </svg>
          </a>
        </footer>
      </div>

      <aside className="sidebar-right sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center backdrop-blur-md lg:flex">
        <div className="flex flex-col items-center gap-5 px-4 scale-80 origin-center">
          <p className="text-[28px] font-extrabold tracking-widest text-sidebar-foreground text-center">Standard</p>
          <div className="h-4" />
          <div className="grid grid-cols-3 gap-5 w-full max-w-[220px]">
            {ROMAN.map((r, i) => {
              const href = pathname.startsWith('/solutions') ? `/solutions/classes/${i + 1}` : `/classes/${i + 1}`
              const active = isActive(pathname, href)
              return (
                <Link key={r} href={href}
                  className={cn(
                    'flex items-center justify-center rounded-full text-[17px] font-extrabold transition-colors duration-200 aspect-square shadow-card scale-110 origin-center',
                    active ? 'bg-white text-[#40663f] shadow-elevated' : 'btn-gradient hover:opacity-90',
                  )}>
                  {r}
                </Link>
              )
            })}
          </div>
        </div>
      </aside>

      <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-40 flex bg-sidebar/90 backdrop-blur-xl shadow-[0_-6px_20px_-4px_rgba(0,0,0,0.45)] lg:hidden">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href)
          return (
            <Link key={href} href={href}
              className={cn('flex flex-1 flex-col items-center gap-1.5 pt-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-[12px] font-bold tracking-tight', active ? 'text-sidebar-foreground' : 'text-sidebar-foreground/60')}>
              <Icon className="h-6 w-6" /> {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
