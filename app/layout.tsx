import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ subsets: ["latin"], weight: ["700"], variable: "--font-oswald" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'Voices of Mass Discussion | Cable TV Talk Show | voicesofmass.com',
  description: 'Real People. Real Issues. Real Conversations. Every week on cable.',
  icons: { icon: '/icon.svg' },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
