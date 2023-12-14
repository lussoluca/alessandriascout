import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { TITLE, DESCRIPTION } from '@/lib/constants'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col">
          {children}
          <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}
