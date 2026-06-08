import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import Title from '@/components/Title'
import Link from 'next/link'
import { Metadata } from 'next'

export default function Page() {
  return (
    <>
      <Layout>
        <Title title="Iscrizione" />
        <Container className="mb-20">
          <h2 className="mb-6 text-xl">Alessandria 1 (Santa Lucia)</h2>
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSeSpLI3PubTl5v2C3r-ILNz8_MWRpySKlFpYAHbXP-sbrWuQw/viewform'
            }
            className="bg-scouting-purple text-canvas-white hover:bg-midnight-purple focus-visible:outline-scouting-purple rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            target={'_blank'}
          >
            Lista d&apos;attesa
          </Link>
          <h2 className="mt-6 mb-6 text-xl">Alessandria 2 (Duomo)</h2>
          <Link
            href={'https://forms.gle/vjQyUFNq4bfru2Zx9'}
            className="bg-scouting-purple text-canvas-white hover:bg-midnight-purple focus-visible:outline-scouting-purple rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            target={'_blank'}
          >
            Lista d&apos;attesa
          </Link>
          <h2 className="mt-6 mb-6 text-xl">Alessandria 3 (San Baudolino)</h2>
          <Link
            href={
              'https://forms.office.com/pages/responsepage.aspx?id=BZwTKhAwS06HWVcXDe4H721XqOHEjvZIpSj1zmRmMFRUNTc2N1k2VjAxWFBDVUlETFVFMDVYNUFLVy4u&route=shorturl'
            }
            className="bg-scouting-purple text-canvas-white hover:bg-midnight-purple focus-visible:outline-scouting-purple rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            target={'_blank'}
          >
            Lista d&apos;attesa
          </Link>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Contattaci | ${TITLE}`,
}
