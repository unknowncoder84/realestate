import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Elite Finance | Premium Wealth Management & Advisory',
  description: 'Full-service financial consulting firm specializing in wealth management, tax planning, lending solutions, and insurance services.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased page-bg" style={{ fontFamily: inter.style.fontFamily }}>
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
