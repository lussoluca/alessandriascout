import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import Title from '@/components/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <>
      <Layout>
        <Title title="Contattaci" />
        <Container className="mb-20 space-y-10">
          <p className="prose">
            Per qualsiasi
            informazione scrivici a{' '}
            <a href="mailto:admin@alessandriascout.it">
              admin@alessandriascout.it
            </a>
          </p>
          <p className="prose">
            Per le iscrizioni alle unità dei gruppi scout cittadini, compila <a href="https://forms.gle/HpGs4c9kyUjc2Yar8">questo form</a>.
          </p>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Contattaci | ${TITLE}`,
}
