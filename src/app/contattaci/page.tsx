import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import Title from '@/components/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <>
      <Layout>
        <Title
          title="Contattaci"
        />
        <Container className="mb-20 space-y-10">
          <p>
            Stiamo lavorando alla nuova versione del sito, per qualsiasi informazione scrivici a <a href="mailto:admin@alessandriascout.it">admin@alessandriascout.it</a>
          </p>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Contattaci | ${TITLE}`,
}
