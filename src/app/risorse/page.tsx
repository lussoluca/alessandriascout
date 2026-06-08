import Title from '@/components/Title'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import { getPagedResources, getResourcesCount } from '@/lib/api_resources'
import Pagination from '@/components/Pagination'
import Resource from '@/components/Resource'
import { draftMode } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string
  }>
}) {
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams?.page) || 1
  const totalPages = await getResourcesCount()
  const { isEnabled } = await draftMode()
  const resourcesData = await getPagedResources(currentPage, isEnabled)

  return (
    <>
      <Layout>
        <Title title="Risorse" />
        <Container className="">
          <div className="xl:relative">
            <div className="mx-auto space-y-10">
              {resourcesData.map((post) => (
                <Resource key={post.slug} {...post} />
              ))}
              <div className="mt-10 flex justify-center">
                <Pagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Risorse | ${TITLE}`,
}
