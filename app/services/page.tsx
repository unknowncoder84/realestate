'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Landmark, PiggyBank, BarChart3, Building2 } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Wealth Management & Investments',
    desc: 'Our portfolio management team constructs diversified, risk-adjusted portfolios aligned with your financial timeline. We leverage institutional-grade research and quantitative models to optimize returns across equity, fixed income, alternatives, and private markets.',
    features: ['Portfolio Construction', 'Asset Allocation', 'Alternative Investments', 'Performance Reporting'],
  },
  {
    icon: Landmark,
    title: 'Tax Advisory & Planning',
    desc: 'Advanced tax strategies designed to minimize liability and maximize after-tax wealth. Our certified advisors navigate complex tax codes, international regulations, and corporate structures to optimize your financial position.',
    features: ['Tax Optimization', 'International Tax', 'Corporate Structuring', 'Compliance Management'],
  },
  {
    icon: Shield,
    title: 'Risk Management & Insurance',
    desc: 'Comprehensive insurance and risk mitigation solutions protecting your assets, business continuity, and legacy. We design coverage architectures tailored to high-net-worth individuals and enterprises.',
    features: ['Life & Health Coverage', 'Property Protection', 'Liability Management', 'Business Continuity'],
  },
  {
    icon: PiggyBank,
    title: 'Retirement & Estate Planning',
    desc: 'Structured retirement and succession strategies ensuring generational wealth transfer and financial independence. We build plans that account for longevity, inflation, healthcare costs, and legacy goals.',
    features: ['401(k) & IRA Optimization', 'Pension Strategies', 'Estate Structuring', 'Trust Administration'],
  },
  {
    icon: BarChart3,
    title: 'Corporate Finance & Advisory',
    desc: 'Strategic financial advisory for businesses spanning M&A, capital raising, valuation, and restructuring. Our team brings Wall Street expertise to help your business scale intelligently.',
    features: ['Mergers & Acquisitions', 'Capital Markets', 'Valuation Services', 'Strategic Advisory'],
  },
  {
    icon: Building2,
    title: 'Real Estate & Private Equity',
    desc: 'Access to curated real estate and private equity opportunities with institutional due diligence. We source, evaluate, and manage investments across commercial, residential, and PE fund structures.',
    features: ['Commercial Real Estate', 'Fund Selection', 'Direct Co-Investments', 'Property Management'],
  },
]

const process_steps = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive analysis of your financial landscape, goals, risk tolerance, and time horizon.' },
  { step: '02', title: 'Strategy', desc: 'Custom financial blueprint spanning investments, tax, insurance, and estate planning.' },
  { step: '03', title: 'Execution', desc: 'Precision implementation with institutional-grade tools and real-time monitoring.' },
  { step: '04', title: 'Optimization', desc: 'Ongoing portfolio rebalancing, tax harvesting, and strategy refinement.' },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Full-bleed background video — fixed, covers entire page */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <video autoPlay loop muted playsInline
          className="w-full h-full object-cover object-center"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        {/* Stronger overlay for readability on all screen sizes */}
        <div className="absolute inset-0 bg-[#060611]/82" />
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pt-20 pb-10 px-4 sm:px-6 md:pt-32 md:pb-20">
        <div className="max-w-[88rem] mx-auto w-full">
          <span className="text-[#3D81E3] text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 block">Our Services</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-12 items-end">
            <h1
              className="text-white text-[2.6rem] sm:text-5xl md:text-7xl font-medium leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Financial Excellence,<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] to-[#3D81E3]">
                Delivered.
              </span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Comprehensive financial services engineered for high-net-worth individuals, families, and businesses seeking institutional-quality advisory.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="liquid-glass rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[380px] group transition-all duration-300 hover:bg-white/[0.04]">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-[#3D81E3]/40 group-hover:bg-[#3D81E3]/10 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A4F4FD]" />
                    </div>
                    <h3 className="text-white text-base sm:text-xl font-medium mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 sm:mb-6">{service.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-2.5 py-1 rounded-full text-xs text-white/65 border border-white/15 bg-white/[0.04]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-4 sm:px-6 py-10 sm:py-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[#3D81E3] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 block">Our Process</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium" style={{ letterSpacing: '-0.03em' }}>
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {process_steps.map((step, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-5 sm:p-7 min-h-[160px] sm:min-h-56 flex flex-col justify-between">
                <span className="text-[#3D81E3]/70 text-2xl sm:text-4xl font-light">{step.step}</span>
                <div>
                  <h3 className="text-white text-sm sm:text-lg font-medium mb-1 sm:mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="max-w-[88rem] mx-auto">
          <div className="liquid-glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium mb-4" style={{ letterSpacing: '-0.03em' }}>
              Ready to get started?
            </h2>
            <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-md mx-auto mb-7 sm:mb-10 leading-relaxed">
              Book a complimentary consultation and discover how we can transform your financial future.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium pl-6 pr-2 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300 group"
            >
              Book Consultation
              <span className="bg-black/10 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
