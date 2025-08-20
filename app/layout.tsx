import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment - Aesthetics with Kayleigh',
  description: 'Revolutionary CO2 laser skin resurfacing for a younger, radiant complexion. Age Gracefully. Glow Effortlessly.',
  keywords: 'CO2 laser, skin resurfacing, wrinkle treatment, acne scars, Durham aesthetics',
  openGraph: {
    title: 'CO2 Laser Treatment - Aesthetics with Kayleigh',
    description: 'Revolutionary skin resurfacing for a younger, radiant complexion',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}