import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>
        <Navigation />
        <div className="mt-28">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
