'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const brands = [
  { name: 'Stripe', font: 'Georgia, serif', weight: 700, letterSpacing: '-0.02em', fontSize: '15px' },
  { name: 'COINBASE', font: 'Arial, sans-serif', weight: 900, letterSpacing: '0.08em', fontSize: '13px', uppercase: true },
  { name: 'Uniswap', font: 'Trebuchet MS, sans-serif', weight: 600, letterSpacing: '0.01em', fontSize: '15px', italic: true },
  { name: 'AAVE', font: 'Courier New, monospace', weight: 700, letterSpacing: '0.12em', fontSize: '13px', uppercase: true },
  { name: 'Compound', font: 'Palatino, Book Antiqua, serif', weight: 400, letterSpacing: '-0.01em', fontSize: '16px' },
  { name: 'MakerDAO', font: 'Impact, Arial Narrow, sans-serif', weight: 400, letterSpacing: '0.04em', fontSize: '14px' },
  { name: 'Chainlink', font: 'Verdana, sans-serif', weight: 700, letterSpacing: '-0.03em', fontSize: '13px' },
]

const backers = [
  { name: 'Fundamental Labs', font: 'Times New Roman, serif', weight: 400, ls: '0.02em', size: '14px' },
  { name: 'KUCOIN', font: 'Arial Black, sans-serif', weight: 900, ls: '0.08em', size: '16px', uppercase: true },
  { name: 'NGC', font: 'Impact, sans-serif', weight: 700, ls: '0.05em', size: '18px' },
  { name: 'NxGen', font: 'Georgia, serif', weight: 600, ls: '-0.02em', size: '17px' },
  { name: 'Matter Labs', font: 'Helvetica, Arial, sans-serif', weight: 700, ls: '-0.01em', size: '15px' },
  { name: 'DEXTOOLS', font: 'Verdana, sans-serif', weight: 700, ls: '0.06em', size: '14px', uppercase: true },
  { name: 'NGRAVE', font: 'Courier New, monospace', weight: 700, ls: '0.18em', size: '14px', uppercase: true },
  { name: 'Polychain', font: 'Palatino, serif', weight: 500, ls: '0.03em', size: '15px' },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // No parallax on mobile — it causes the video to shift out of frame
  const videoTransform = isMobile
    ? 'none'
    : `translate3d(${mousePos.x * -20}px, calc(${mousePos.y * -20}px + ${scrollY * 0.4}px), 0) scale(1.1)`

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden pb-20 sm:pb-32">

      {/* ── Hero ── */}
      <section className="relative flex flex-col pt-16 sm:pt-20">

        {/* On mobile: full-bleed video behind content, no card wrapper */}
        <div className="md:hidden relative min-h-screen flex flex-col">
          {/* Video fills entire screen */}
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#060611]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060611]/60 via-transparent to-[#060611]/90" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center flex-1 px-5 pt-16 pb-12">
            <h1
              className="text-white text-[2.6rem] font-medium leading-[1.05] mb-4 animate-fade-in-up"
              style={{ letterSpacing: '-0.04em' }}
            >
              Your Wealth<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A87E] to-[#B8956A]">
                Works.
              </span>
            </h1>

            <p className="text-white/70 text-[0.95rem] max-w-sm mb-8 leading-relaxed animate-fade-in-up-delay-1">
              An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
            </p>

            <div className="animate-fade-in-up-delay-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-sm font-medium pl-6 pr-2 py-2.5 rounded-full"
              >
                Join us
                <span className="bg-[#060611]/20 rounded-full p-1.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Brand Marquee */}
            <div className="mt-10 w-full overflow-hidden animate-fade-in-up-delay-3">
              <p className="text-[#C8A87E]/60 text-[10px] uppercase tracking-widest mb-3">Integrated With</p>
              <div className="marquee-track">
                {[...brands, ...brands].map((brand, i) => (
                  <span
                    key={i}
                    className="mx-5 shrink-0 text-white/40 whitespace-nowrap"
                    style={{
                      fontFamily: brand.font,
                      fontWeight: brand.weight,
                      letterSpacing: brand.letterSpacing,
                      fontSize: '12px',
                      fontStyle: brand.italic ? 'italic' : 'normal',
                      textTransform: brand.uppercase ? 'uppercase' : 'none',
                    }}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: card with parallax video */}
        <div className="hidden md:flex flex-1 px-6 pb-6 items-end">
          <div className="relative w-full rounded-3xl overflow-hidden liquid-glass" style={{ height: 'calc(100vh - 96px)' }}>
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none ease-out duration-300"
              style={{ transform: videoTransform }}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />
            <div className="absolute inset-0 bg-[#060611]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060611]/95 via-[#060611]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060611]/90 via-[#060611]/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-start justify-center h-full p-14 pt-36">
              <h1
                className="text-white text-7xl font-medium leading-[1.05] max-w-2xl mb-6 animate-fade-in-up"
                style={{ letterSpacing: '-0.04em' }}
              >
                Your Wealth<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A87E] to-[#B8956A]">
                  Works.
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed animate-fade-in-up-delay-1">
                An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
              </p>
              <div className="animate-fade-in-up-delay-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-lg font-medium pl-8 pr-2 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C8A87E]/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  Join us
                  <span className="bg-[#060611]/20 rounded-full p-2">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
              <div className="mt-24 w-full max-w-xl overflow-hidden animate-fade-in-up-delay-3">
                <p className="text-[#C8A87E]/60 text-xs uppercase tracking-widest mb-4">Integrated With</p>
                <div className="marquee-track">
                  {[...brands, ...brands].map((brand, i) => (
                    <span
                      key={i}
                      className="mx-7 shrink-0 text-white/40 whitespace-nowrap"
                      style={{
                        fontFamily: brand.font,
                        fontWeight: brand.weight,
                        letterSpacing: brand.letterSpacing,
                        fontSize: brand.fontSize,
                        fontStyle: brand.italic ? 'italic' : 'normal',
                        textTransform: brand.uppercase ? 'uppercase' : 'none',
                      }}
                    >
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Section: Meet USD Halo ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative z-10">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16 items-start">
            <div>
              <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4 block">The Next Era</span>
              <h2
                className="text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5 sm:mb-8"
                style={{ letterSpacing: '-0.03em' }}
              >
                Meet USD Halo.
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-sm font-medium pl-6 pr-2 py-2 rounded-full hover:shadow-lg hover:shadow-[#C8A87E]/20 transition-all duration-300"
              >
                Discover it
                <span className="bg-[#060611]/20 rounded-full p-1.5 sm:p-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div>
              <p className="text-white/70 text-lg sm:text-2xl md:text-3xl leading-relaxed mt-2" style={{ letterSpacing: '-0.01em' }}>
                USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="sm:col-span-2 liquid-glass rounded-2xl sm:rounded-3xl relative overflow-hidden min-h-[260px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundImage: `url('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060611]/90 via-[#060611]/40 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-white text-2xl sm:text-3xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                  Savings that<br />bloom.
                </h3>
              </div>
              <div className="relative z-10 mt-auto">
                <p className="text-white/70 text-sm sm:text-base max-w-xs leading-relaxed">
                  Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
                </p>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[380px] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-white text-xl sm:text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Always fluid,<br />always pegged.
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-4 sm:mt-0">
                Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[380px] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-white text-xl sm:text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Fully<br />automated.
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-4 sm:mt-0">
                Skip the task of tuning positions yourself. USD Halo runs in the background for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Backed By ── */}
      <section className="px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="max-w-[88rem] mx-auto liquid-glass rounded-2xl sm:rounded-3xl p-5 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 items-center">
            <div className="text-white/60 text-sm leading-relaxed font-medium">
              Funded by premier partners and forward-thinking leaders.
            </div>
            <div className="md:col-span-3 overflow-hidden">
              <div className="backers-track">
                {[...backers, ...backers].map((b, i) => (
                  <span
                    key={i}
                    className="mx-6 sm:mx-10 shrink-0 text-white/30 whitespace-nowrap"
                    style={{
                      fontFamily: b.font,
                      fontWeight: b.weight,
                      letterSpacing: b.ls,
                      fontSize: b.size,
                      textTransform: b.uppercase ? 'uppercase' : 'none',
                    }}
                  >
                    {b.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative z-10">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">
            <div className="md:pr-12 md:pt-10">
              <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 block">
                USD Halo in Practice
              </span>
              <h2
                className="text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-none mb-5 sm:mb-8"
                style={{ letterSpacing: '-0.04em' }}
              >
                Use modes.
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md mb-7 sm:mb-10">
                USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-[#C8A87E] text-base font-medium group transition-all">
                Explore all modes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[600px] md:min-h-[720px] shadow-[0_0_40px_rgba(200,168,126,0.1)] group">
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#060611]/85" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-10 md:p-14">
                <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4 sm:mb-5" style={{ letterSpacing: '-0.03em' }}>
                  Commerce.
                </h3>
                <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-md mb-6 sm:mb-10 leading-relaxed">
                  Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.
                </p>
                <div>
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white text-sm font-medium pr-5 pl-2 py-2 rounded-full transition-all duration-300">
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
