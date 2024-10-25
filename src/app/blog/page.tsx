import Title from '@/components/Title'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import { getPagedPosts, getPostsCount } from '@/lib/api'
import Pagination from '@/components/Pagination'
import Post from '@/components/Post'
import { draftMode } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getPostsCount()
  const { isEnabled } = draftMode()
  const postsData = await getPagedPosts(currentPage, isEnabled)

  return (
    <>
      <Layout>
        <Title title="Blog" />
        <Container className="">
          <div className="xl:relative">
            <div className="mx-auto space-y-10">
              {postsData.map((post) => (
                <Post key={post.slug} {...post} />
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
  title: `Blog | ${TITLE}`,
}
