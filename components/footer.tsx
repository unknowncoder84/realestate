'use client'

import Link from 'next/link'

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Wealth Management', href: '/services' },
      { label: 'Tax Advisory', href: '/services' },
      { label: 'Estate Planning', href: '/services' },
      { label: 'Risk Management', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Careers', href: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Market Analysis', href: '/insights' },
      { label: 'Financial Planning', href: '/insights' },
      { label: 'Investment Guide', href: '/insights' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] pt-20 pb-8 px-6">
      {/* Glow accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#C8A87E]/30 to-transparent" />

      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 256 256" className="w-7 h-7 text-[#C8A87E]" fill="currentColor">
                <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
              </svg>
              <span className="text-white text-lg" style={{ fontWeight: 500, letterSpacing: '-0.03em' }}>
                Elite Finance
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Premier financial advisory and wealth management services. Building lasting prosperity through expert guidance and innovative strategies.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'Li', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/40 hover:text-[#C8A87E] hover:border-[#C8A87E]/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3
                className="text-white/80 font-medium mb-4 text-sm"
                style={{ letterSpacing: '-0.01em' }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/35 hover:text-[#C8A87E] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/25 text-xs">
            <p>&copy; {currentYear} Elite Finance. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Compliance'].map((item) => (
                <a key={item} href="#" className="hover:text-white/50 transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
