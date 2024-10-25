import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import Title from '@/components/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <>
      <Layout>
        <Title title="Iscrizione" />
        <Container className="mb-20 space-y-10">
          <h2>Alessandria 1 (Santa Lucia)</h2>
          <p className="prose">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSpLI3PubTl5v2C3r-ILNz8_MWRpySKlFpYAHbXP-sbrWuQw/viewform" target="_blank">Lista d&apos;attesa</a>
          </p>
          <h2>Alessandria 2 (Duomo)</h2>
          <p className="prose">
            <a href="https://forms.gle/vjQyUFNq4bfru2Zx9" target="_blank">Lista d&apos;attesa</a>
          </p>
          <h2>Alessandria 3 (San Baudolino)</h2>
          <p className="prose">
            <a href="https://forms.office.com/pages/responsepage.aspx?id=BZwTKhAwS06HWVcXDe4H721XqOHEjvZIpSj1zmRmMFRUNTc2N1k2VjAxWFBDVUlETFVFMDVYNUFLVy4u&route=shorturl" target="_blank">Lista d&apos;attesa</a>
          </p>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Contattaci | ${TITLE}`,
}
