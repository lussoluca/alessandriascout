import {
  getAllResources,
  getResource,
  getLatestResources,
} from '@/lib/api_resources'
import { TITLE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { draftMode } from 'next/headers'
import ArticleLayout from '@/components/ArticleLayout'

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

  const latest = await getLatestResources(isEnabled, 4)
  const related = (latest ?? [])
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Layout>
        <Container className="mb-24">
          <ArticleLayout
            meta={resource}
            backHref="/risorse"
            backLabel="Torna alle risorse"
            related={related}
            relatedTitle="Altre risorse"
            relatedHref={(relatedSlug) => `/risorse/${relatedSlug}`}
          />
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
