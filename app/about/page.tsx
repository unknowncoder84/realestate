'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function AboutBgVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadingOutRef = useRef(false)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const fadeTo = (targetOpacity: number, duration: number) => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      const startOpacity = parseFloat(vid.style.opacity || '0')
      const startTime = performance.now()
      const animate = (time: number) => {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)
        vid.style.opacity = (startOpacity + (targetOpacity - startOpacity) * progress).toString()
        if (progress < 1) rafIdRef.current = requestAnimationFrame(animate)
      }
      rafIdRef.current = requestAnimationFrame(animate)
    }

    const handleTimeUpdate = () => {
      if (!vid.duration) return
      const timeLeft = vid.duration - vid.currentTime
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true
        fadeTo(0, 500)
      }
    }
    const handlePlay = () => {
      if (vid.currentTime < 0.1) { fadingOutRef.current = false; fadeTo(1, 500) }
    }
    const handleEnded = () => {
      vid.style.opacity = '0'
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      setTimeout(() => { vid.currentTime = 0; vid.play() }, 100)
    }

    vid.addEventListener('timeupdate', handleTimeUpdate)
    vid.addEventListener('play', handlePlay)
    vid.addEventListener('ended', handleEnded)
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      vid.removeEventListener('timeupdate', handleTimeUpdate)
      vid.removeEventListener('play', handlePlay)
      vid.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#060611]">
      <video
        ref={videoRef}
        muted playsInline autoPlay
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
      />
      {/* Stronger overlay so text is always readable */}
      <div className="absolute inset-0 bg-[#060611]/75" />
    </div>
  )
}

const values = [
  { title: 'Integrity First', desc: 'Fiduciary responsibility is our foundation. Every recommendation prioritizes your best interests above all else.' },
  { title: 'Innovation', desc: 'Leveraging cutting-edge financial technology, data analytics, and quantitative models to deliver superior outcomes.' },
  { title: 'Transparency', desc: 'Clear fee structures, real-time reporting, and open communication at every stage of our partnership.' },
  { title: 'Excellence', desc: 'Relentless pursuit of best-in-class advisory, research, and client experience across every engagement.' },
]

const team = [
  { name: 'Alexander Reed', role: 'CEO & Founder', bio: 'Former Goldman Sachs MD with 25+ years in wealth management. Harvard MBA. CFA Charterholder.' },
  { name: 'Sarah Chen', role: 'Chief Investment Officer', bio: 'Ex-BlackRock portfolio strategist. PhD in Financial Economics from MIT. 18 years in institutional investing.' },
  { name: 'Marcus Thompson', role: 'Head of Tax Advisory', bio: 'Former Deloitte Tax Partner. JD/LLM in Taxation from NYU. Specialist in cross-border tax optimization.' },
  { name: 'Olivia Martinez', role: 'Director of Client Relations', bio: 'Previously at J.P. Morgan Private Bank. MBA from Wharton. 15+ years serving UHNW clients.' },
  { name: 'Daniel Park', role: 'Head of Risk Management', bio: 'Former Bridgewater risk analyst. MS in Financial Engineering from Columbia. Expert in hedging strategies.' },
  { name: 'Emily Watson', role: 'Estate Planning Lead', bio: 'Former Sullivan & Cromwell attorney. JD from Yale. Specialist in multi-generational wealth transfer.' },
]

const milestones = [
  { year: '2007', event: 'Founded in New York City with a vision for client-first advisory' },
  { year: '2010', event: 'Surpassed $500M in assets under management' },
  { year: '2014', event: 'Launched corporate finance and M&A advisory division' },
  { year: '2017', event: 'Expanded to San Francisco, London, and Singapore' },
  { year: '2020', event: 'Crossed $2B AUM milestone; launched digital wealth platform' },
  { year: '2024', event: 'Reached $4.2B AUM with 2,500+ active client relationships' },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      <AboutBgVideo />

      {/* ── Hero — full bleed on mobile ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pt-20 pb-10 px-4 sm:px-6 md:pt-32 md:pb-20">
        <div className="max-w-[88rem] mx-auto w-full">
          <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 block">About Us</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-12 items-end">
            <h1
              className="text-white text-[2.6rem] sm:text-5xl md:text-7xl font-medium leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Built on Trust,<br />Driven by Results.
            </h1>
            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed">
              Since 2007, Elite Finance has served as a trusted partner for individuals, families, and institutions seeking sophisticated financial guidance and exceptional outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-5" style={{ letterSpacing: '-0.03em' }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                  <p>Elite Finance was founded with a singular conviction: that every client deserves the same caliber of financial advisory historically reserved for institutions and ultra-high-net-worth families.</p>
                  <p>What began as a boutique advisory in Manhattan has grown into a comprehensive financial services firm managing over $4.2 billion in client assets across four global offices.</p>
                  <p>Our team of 60+ professionals — including former partners from Goldman Sachs, BlackRock, Deloitte, and J.P. Morgan — brings institutional expertise to every client engagement, regardless of size.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-6 md:mt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: '60+', label: 'Financial Experts' },
                    { value: '4', label: 'Global Offices' },
                    { value: '$4.2B', label: 'Assets Managed' },
                    { value: '99.2%', label: 'Retention Rate' },
                  ].map((stat, i) => (
                    <div key={i} className="glass rounded-xl p-4 sm:p-5 text-center">
                      <div className="text-xl sm:text-2xl font-semibold text-[#C8A87E] mb-1" style={{ letterSpacing: '-0.03em' }}>
                        {stat.value}
                      </div>
                      <p className="text-white/60 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 block">Our Values</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium" style={{ letterSpacing: '-0.03em' }}>
              What Guides Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#C8A87E]" />
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-lg font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {value.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 block">Milestones</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium" style={{ letterSpacing: '-0.03em' }}>
              Our Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-3 shimmer-line">
                <span className="text-[#C8A87E] text-2xl sm:text-3xl font-light">{m.year}</span>
                <p className="text-white/70 text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 block">Leadership</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium" style={{ letterSpacing: '-0.03em' }}>
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 sm:p-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center mb-4 sm:mb-5">
                  <span className="text-[#C8A87E] text-base sm:text-lg font-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {member.name}
                </h3>
                <p className="text-[#C8A87E]/80 text-sm mb-2 sm:mb-3">{member.role}</p>
                <p className="text-white/65 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center glow-gold-sm">
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium mb-4" style={{ letterSpacing: '-0.03em' }}>
              Join Our Story
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-md mx-auto mb-7 leading-relaxed">
              Whether you&apos;re an individual seeking guidance or a business needing advisory, we&apos;re here for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-sm sm:text-base font-medium pl-6 pr-2 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C8A87E]/20 transition-all duration-300"
            >
              Get In Touch
              <span className="bg-[#060611]/20 rounded-full p-2">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
