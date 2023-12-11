import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { TITLE, DESCRIPTION } from '@/lib/constants'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col">{children}</body>
      <Analytics />
    </html>
  )
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}
