import Title from '@/components/Title'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import { getPagedPosts, getPostsCount } from '@/lib/api_posts'
import Pagination from '@/components/Pagination'
import ContentListItem from '@/components/ContentListItem'
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
  const totalPages = await getPostsCount()
  const { isEnabled } = await draftMode()
  const postsData = await getPagedPosts(currentPage, isEnabled)

  return (
    <>
      <Layout>
        <Title title="Blog" />
        <Container className="">
          <div className="xl:relative">
            <div className="mx-auto max-w-4xl">
              <div className="divide-scouting-purple/15 divide-y">
                {postsData.map((post) => (
                  <ContentListItem
                    key={post.slug}
                    item={post}
                    href={`/blog/${post.slug}`}
                  />
                ))}
              </div>
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
  title: `Blog | ${TITLE}`,
}
