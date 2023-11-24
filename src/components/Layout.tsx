import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Navigation from '@/components/Navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <main>
        <Navigation />
        <div className="pt-14 lg:pt-48">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
