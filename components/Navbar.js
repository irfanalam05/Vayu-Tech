'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed left-0 right-0 top-4 z-[100] px-4 sm:px-6">
      <nav className="relative mx-auto w-full max-w-[1180px] rounded-2xl border border-white/60 bg-white/55 shadow-[0_8px_40px_rgba(15,23,42,.08)] backdrop-blur-2xl backdrop-saturate-150">

        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">

          {/* BRAND */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-32">
              <Image src="/vayu-tech-logo.jpeg" alt="Vayu Tech" fill className="object-contain object-left"priority/>
            </div>

            <div className="leading-none">
              <span className="block text-[15px] font-bold tracking-[-0.02em] text-[#0B172A]">
                Vayu Tech
              </span>
              <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Digital Solutions
              </span>
            </div>
          </Link>


          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[13px] font-semibold text-[#64748B] transition-all duration-200 hover:bg-[#F1F5F9] hover:text-[#005098]"
              >
                {link.label}
              </Link>
            ))}

          </div>


          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#005098] px-5 py-2.5 text-[13px] font-bold text-white shadow-md shadow-[#005098]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#073B6B]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>


          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0B172A] transition hover:border-[#005098]/30 hover:text-[#005098] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>


        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E2E8F0] px-4 pb-4 pt-3 md:hidden">

            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#475569] transition hover:bg-[#F1F5F9] hover:text-[#005098]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#005098] px-4 py-3 text-sm font-bold text-white"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>

            </div>

          </div>
        )}

      </nav>
    </header>
  )
}