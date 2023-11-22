import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Navigation from "@/components/Navigation";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
        <main>
            <Navigation />
            {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
