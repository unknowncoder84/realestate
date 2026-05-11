'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-nav py-3' : 'py-5'
    }`}>
      <div className="max-w-[88rem] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg
            viewBox="0 0 256 256"
            className="w-7 h-7 text-[#C8A87E] group-hover:text-white transition-colors duration-300"
            fill="currentColor"
          >
            <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
          </svg>
          <span
            className="text-xl text-white"
            style={{ fontWeight: 500, letterSpacing: '-0.03em' }}
          >
            Elite Finance
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'text-[#C8A87E] bg-white/[0.06]'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] hover:shadow-lg hover:shadow-[#C8A87E]/20 hover:scale-[1.02]"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#C8A87E] bg-white/[0.06]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 text-center py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
