import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import TextWithImage from '@/components/paragraphs/TextWithImage'
import Title from '@/components/Title'
import { Metadata } from 'next'
import { groups } from '@/data/groups'

export default function Page() {
  return (
    <>
      <Layout>
        <Title
          title="Chi siamo"
          // subtitle="In Alessandria sono presenti 3 gruppi scout, ..."
        />
        <Container className="mb-20 space-y-10">
          {groups.map((group) => (
            <TextWithImage
              image={group.imageUrl}
              imagePosition="left"
              title={group.name}
              key={group.name}
            >
              {group.description}
            </TextWithImage>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Chi siamo | ${TITLE}`,
}
