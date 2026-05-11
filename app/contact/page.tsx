'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

const offices = [
  { city: 'New York', address: '350 Park Avenue, 22nd Floor\nNew York, NY 10022', phone: '+1 (212) 555-0123', timezone: 'EST (UTC−5)' },
  { city: 'San Francisco', address: '555 California Street, Suite 4800\nSan Francisco, CA 94104', phone: '+1 (415) 555-0189', timezone: 'PST (UTC−8)' },
  { city: 'London', address: '25 Old Broad Street, Level 18\nLondon EC2N 1HN, UK', phone: '+44 20 7946 0958', timezone: 'GMT (UTC+0)' },
  { city: 'Singapore', address: '1 Raffles Place, Tower 2, #44-01\nSingapore 048616', phone: '+65 6713 4200', timezone: 'SGT (UTC+8)' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', service: '', investmentRange: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry. A senior advisor will contact you within 24 hours.')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', investmentRange: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6">
        <div className="absolute top-20 left-1/2 w-[600px] h-[600px] bg-[#C8A87E]/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[88rem] mx-auto">
          <span className="text-[#C8A87E]/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4 block">Contact Us</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-end">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Let&apos;s Build<br />Your Future.
            </h1>
            <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed">
              Schedule a complimentary consultation with one of our senior advisors. We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-4 sm:px-6 pb-14 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">

            {/* Contact Info — shown below form on mobile */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-4 sm:space-y-6">
              {[
                { icon: Mail, title: 'Email', line1: 'advisory@elitefinance.com', line2: 'For new client inquiries' },
                { icon: Phone, title: 'Phone', line1: '+1 (212) 555-0123', line2: 'Mon–Fri, 9AM–6PM ET' },
                { icon: Clock, title: 'Response Time', line1: 'Within 24 hours', line2: 'Urgent matters prioritized' },
              ].map(({ icon: Icon, title, line1, line2 }) => (
                <div key={title} className="glass-card rounded-2xl p-5 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#C8A87E]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{title}</h3>
                      <p className="text-white/40 text-sm">{line1}</p>
                      <p className="text-white/30 text-xs mt-1">{line2}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Video card */}
              <div className="relative rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[240px]">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#060611]/75" />
                <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full min-h-[200px] sm:min-h-[240px]">
                  <h3 className="text-white text-lg font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>Visit Our Office</h3>
                  <p className="text-white/50 text-sm">350 Park Avenue, New York</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
                <h2 className="text-white text-xl sm:text-2xl font-medium mb-6 sm:mb-8" style={{ letterSpacing: '-0.02em' }}>
                  Schedule a Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25" placeholder="Anderson" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                    <div>
                      <label htmlFor="email" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25" placeholder="+1 (212) 555-0000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Company (Optional)</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25" placeholder="Company name" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                    <div>
                      <label htmlFor="service" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Service Interest</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm bg-transparent">
                        <option value="" className="bg-[#0d0d20]">Select a service</option>
                        <option value="wealth" className="bg-[#0d0d20]">Wealth Management</option>
                        <option value="tax" className="bg-[#0d0d20]">Tax Advisory</option>
                        <option value="risk" className="bg-[#0d0d20]">Risk & Insurance</option>
                        <option value="retirement" className="bg-[#0d0d20]">Retirement Planning</option>
                        <option value="corporate" className="bg-[#0d0d20]">Corporate Finance</option>
                        <option value="realestate" className="bg-[#0d0d20]">Real Estate & PE</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="investmentRange" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Investment Range</label>
                      <select id="investmentRange" name="investmentRange" value={formData.investmentRange} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm bg-transparent">
                        <option value="" className="bg-[#0d0d20]">Select range</option>
                        <option value="250k-1m" className="bg-[#0d0d20]">$250K – $1M</option>
                        <option value="1m-5m" className="bg-[#0d0d20]">$1M – $5M</option>
                        <option value="5m-25m" className="bg-[#0d0d20]">$5M – $25M</option>
                        <option value="25m+" className="bg-[#0d0d20]">$25M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass-input text-white text-sm placeholder-white/25 resize-none" placeholder="Tell us about your financial goals..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#C8A87E] to-[#B8956A] text-[#060611] text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-[#C8A87E]/20 transition-all duration-300"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-white/25 text-xs text-center mt-3">
                    By submitting, you agree to our Privacy Policy. We&apos;ll never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#C8A87E]/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 block">Global Presence</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium" style={{ letterSpacing: '-0.03em' }}>
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {offices.map((office, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8A87E]" />
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-medium" style={{ letterSpacing: '-0.02em' }}>
                    {office.city}
                  </h3>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-white/40 text-xs sm:text-sm whitespace-pre-line leading-relaxed">{office.address}</p>
                  <p className="text-white/30 text-xs">{office.phone}</p>
                  <p className="text-[#C8A87E]/40 text-xs">{office.timezone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
