import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { TITLE, DESCRIPTION } from '@/lib/constants'
import React from 'react'
import { Noto_Sans } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager } from '@next/third-parties/google'

const notoSans = Noto_Sans({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={notoSans.className}>
      <body className="flex min-h-screen flex-col">
        {children}
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-NPNQNLS5" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}
