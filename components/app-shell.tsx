'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bookmark, GraduationCap, Home, Search, BookOpen } from 'lucide-react'
import { cn, assetPath } from '@/lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/classes', label: 'Classes', icon: GraduationCap },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
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
      <aside className="sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center border-r border-sidebar-border bg-sidebar/60 backdrop-blur-md lg:flex">
        <nav aria-label="Main" className="flex flex-col items-center gap-1.5 px-8">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = isActive(pathname, href)
            return (
              <Link key={href} href={href}
                className={cn('nav-btn w-full max-w-[150px] transition-colors duration-200', active && 'bg-gold/10 text-gold')}>
                <Icon className="h-5 w-5 shrink-0" /> {label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto h-svh">
        <header className="sticky top-0 z-50 flex justify-center border-b border-border/30 bg-sidebar/80 backdrop-blur-xl px-4 py-5">
          <Link href="/" className="flex items-center gap-4 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden shadow-elevated">
              <Image src={assetPath('/logo.png')} alt="NCERT Hub" width={40} height={40} className="h-10 w-10" />
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight text-gold">NCERT Hub</span>
          </Link>
        </header>
        <main className="flex-1 pb-28 lg:pb-0 mt-4">{children}</main>
        <footer className="hidden border-t border-border/30 px-8 py-6 lg:flex lg:items-center lg:justify-center">
          <p className="text-base font-medium text-foreground text-center">
            An Unofficial Library of NCERT Books.{' '}Visit the official website at{' '}
            <a href="https://ncert.nic.in" target="_blank" rel="noopener noreferrer" className="font-bold text-gold no-underline hover:text-foreground">
              © NCERT. ncert.nic.in
            </a>
          </p>
        </footer>
      </div>

      <aside className="sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center border-l border-sidebar-border bg-sidebar/60 backdrop-blur-md lg:flex">
        <div className="flex flex-col items-center gap-5 px-4">
          <p className="text-[22px] font-extrabold tracking-widest text-sidebar-foreground uppercase text-center">Standard</p>
          <div className="grid grid-cols-3 gap-3 w-full max-w-[220px]">
            {ROMAN.map((r, i) => {
              const href = `/classes/${i + 1}`
              const active = isActive(pathname, href)
              return (
                <Link key={r} href={href}
                  className={cn(
                    'flex items-center justify-center rounded-full text-[15px] font-extrabold transition-colors duration-200 aspect-square shadow-card',
                    active ? 'bg-white text-[#355d34] shadow-elevated' : 'btn-gradient hover:opacity-90',
                  )}>
                  {r}
                </Link>
              )
            })}
          </div>
        </div>
      </aside>

      <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border/30 bg-sidebar/90 backdrop-blur-xl lg:hidden">
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
