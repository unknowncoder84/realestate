'use client'

import { useRef, useEffect } from 'react'
import { ArrowRight, Clock, TrendingUp, Shield, BarChart3, Landmark, PiggyBank } from 'lucide-react'

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    let rafId: number
    const updateOpacity = () => {
      if (vid.duration) {
        const t = vid.currentTime, d = vid.duration
        if (t < 0.5) vid.style.opacity = (t / 0.5).toString()
        else if (d - t < 0.5) vid.style.opacity = ((d - t) / 0.5).toString()
        else vid.style.opacity = '1'
      }
      rafId = requestAnimationFrame(updateOpacity)
    }
    const handlePlay = () => { rafId = requestAnimationFrame(updateOpacity) }
    const handleEnded = () => {
      vid.style.opacity = '0'
      setTimeout(() => { vid.currentTime = 0; vid.play() }, 100)
    }
    vid.addEventListener('play', handlePlay)
    vid.addEventListener('ended', handleEnded)
    return () => { cancelAnimationFrame(rafId); vid.removeEventListener('play', handlePlay); vid.removeEventListener('ended', handleEnded) }
  }, [])

  return (
    <video
      ref={videoRef} muted playsInline autoPlay
      className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
      style={{ opacity: 0 }}
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
    />
  )
}

const featuredArticle = {
  tag: 'Market Outlook',
  title: 'Global Markets 2026: Navigating Uncertainty with Strategic Allocation',
  excerpt: 'An in-depth analysis of macro trends, interest rate trajectories, and sector rotation opportunities shaping institutional and retail portfolios in the year ahead.',
  readTime: '12 min read',
  date: 'May 2026',
}

const articles = [
  { icon: TrendingUp, tag: 'Investment Strategy', title: 'The Case for Alternative Investments in a High-Rate Environment', excerpt: 'Private equity, hedge funds, and real assets offer compelling diversification and return potential when traditional bonds underperform.', readTime: '8 min', date: 'Apr 2026' },
  { icon: Landmark, tag: 'Tax Planning', title: 'Year-End Tax Strategies: Maximizing Deductions and Deferrals', excerpt: 'Proactive tax-loss harvesting, charitable giving vehicles, and Roth conversion ladders that can materially reduce your effective tax rate.', readTime: '6 min', date: 'Apr 2026' },
  { icon: Shield, tag: 'Risk Management', title: 'Portfolio Insurance: Hedging Strategies for Volatile Markets', excerpt: 'Options overlays, tactical cash allocations, and structured products that protect downside while maintaining upside exposure.', readTime: '7 min', date: 'Mar 2026' },
  { icon: PiggyBank, tag: 'Retirement', title: 'The New Retirement: Planning for a 30-Year Horizon', excerpt: 'Longevity risk, healthcare inflation, and withdrawal strategies for retirees navigating an era of extended lifespans and uncertain entitlements.', readTime: '9 min', date: 'Mar 2026' },
  { icon: BarChart3, tag: 'Corporate Finance', title: 'M&A Due Diligence: What Acquirers Often Miss', excerpt: 'Beyond the balance sheet — cultural fit, integration risk, and hidden liabilities that can make or break a transaction.', readTime: '10 min', date: 'Feb 2026' },
  { icon: TrendingUp, tag: 'Wealth Management', title: 'Family Office Structures: Centralizing Multi-Generational Wealth', excerpt: 'How single-family and multi-family offices provide governance, investment management, and lifestyle services under one umbrella.', readTime: '8 min', date: 'Feb 2026' },
]

const topics = ['All', 'Investment Strategy', 'Tax Planning', 'Risk Management', 'Retirement', 'Corporate Finance', 'Wealth Management']

export default function InsightsPage() {
  return (
    <>
      {/* ── Hero — full bleed video ── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pt-20 pb-10 px-4 sm:px-6 md:pt-32 md:pb-20 overflow-hidden">
        <HeroVideo />
        {/* Strong dark overlay so text is always readable */}
        <div className="absolute inset-0 bg-[#060611]/78 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060611] via-[#060611]/60 to-transparent z-[2]" />

        <div className="relative z-10 max-w-[88rem] mx-auto w-full">
          <span className="text-[#C8A87E] text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 block">Insights & Research</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-12 items-end">
            <h1
              className="text-white text-[2.6rem] sm:text-5xl md:text-7xl font-medium leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Market Intelligence<br />& Insights.
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Research, analysis, and strategic perspectives from our team of financial experts to keep you ahead of market trends.
            </p>
          </div>
        </div>
      </section>

      {/* ── Topic Filter ── */}
      <section className="px-4 sm:px-6 py-5 sm:py-8">
        <div className="max-w-[88rem] mx-auto">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <button
                key={topic}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  i === 0
                    ? 'bg-[#C8A87E]/20 text-[#C8A87E] border border-[#C8A87E]/30'
                    : 'glass text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-[88rem] mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 glow-gold-sm group cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C8A87E]/15 text-[#C8A87E]">
                    {featuredArticle.tag}
                  </span>
                  <span className="text-white/50 text-xs">{featuredArticle.date}</span>
                </div>
                <h2
                  className="text-white text-xl sm:text-3xl md:text-4xl font-medium leading-tight mb-3 sm:mb-4"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {featuredArticle.title}
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-[#C8A87E] text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="flex items-center gap-1.5 text-white/50 text-xs">
                    <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[280px]">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#060611]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[320px] group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.08] text-white/70">
                      {article.tag}
                    </span>
                    <span className="text-white/45 text-xs">{article.date}</span>
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-medium mb-2 leading-snug" style={{ letterSpacing: '-0.02em' }}>
                    {article.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{article.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.08]">
                  <span className="flex items-center gap-1.5 text-white/50 text-xs">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                  <span className="text-[#C8A87E]/70 group-hover:text-[#C8A87E] transition-colors text-sm font-medium">
                    Read →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center glow-gold-sm">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-3" style={{ letterSpacing: '-0.03em' }}>
              Stay Ahead of the Markets
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
              Subscribe to our weekly market intelligence briefing. No spam — just actionable insights from our research team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-full glass-input text-white text-sm placeholder-white/40"
              />
              <button className="px-7 py-3 rounded-full bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-sm font-semibold hover:shadow-lg hover:shadow-[#C8A87E]/20 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
