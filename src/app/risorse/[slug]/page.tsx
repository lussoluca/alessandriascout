import { getAllResources, getResource } from '@/lib/api_resources'
import { TITLE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/Markdown'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { draftMode } from 'next/headers'
import ResourceLayout from '@/components/ResourceLayout'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export default async function Resource({ params }: Params) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const resourceData: Promise<any> = getResource(slug, isEnabled)
  const { resource } = await resourceData

  if (!resource) {
    notFound()
  }

  return (
    <>
      <Layout>
        <Container className="mb-20 space-y-10">
          <ResourceLayout meta={resource}>
            <Markdown content={resource.content} />
          </ResourceLayout>
        </Container>
      </Layout>
    </>
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const resourceData: Promise<any> = getResource(slug, isEnabled)
  const { resource } = await resourceData
  const title: string = `${resource.title} | ${TITLE}`

  return {
    title: title,
  }
}

export async function generateStaticParams() {
  const resourcesData: Promise<any[]> = getAllResources(false)
  const resources = await resourcesData

  return resources.map((resource) => ({
    slug: resource.slug.toString(),
  }))
}
