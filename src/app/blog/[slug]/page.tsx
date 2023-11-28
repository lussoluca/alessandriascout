import { getAllPosts, getPost } from '@/lib/api'
import { TITLE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/markdown'
import CoverImage from '@/components/cover-image'
import { Metadata } from 'next'
import Title from '@/components/Title'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { draftMode } from 'next/headers'

type Params = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Params) {
  const { isEnabled } = draftMode()
  const postData: Promise<any> = getPost(params.slug, isEnabled)
  const { post } = await postData

  if (!post) {
    notFound()
  }

  return (
    <>
      <Layout>
        <Title title={post.title} subtitle="" />
        <Container className="mb-20 space-y-10">
          <CoverImage title={post.title} url={post.coverImage.url} />
          <Markdown content={post.content} />
        </Container>
      </Layout>
    </>
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { isEnabled } = draftMode()
  const postData: Promise<any> = getPost(params.slug, isEnabled)
  const { post } = await postData
  const title: string = `${post.title} | ${TITLE}`

  return {
    title: title,
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const postsData: Promise<any[]> = getAllPosts(false)
  const posts = await postsData

  return posts.map(
    (post): Params => ({
      params: {
        slug: post.slug.toString(),
      },
    }),
  )
}
