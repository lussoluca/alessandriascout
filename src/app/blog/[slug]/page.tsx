import { getAllPosts, getPost } from '@/lib/api_posts'
import { TITLE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/Markdown'
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

export default async function Post({ params }: Params) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const postData: Promise<any> = getPost(slug, isEnabled)
  const { post } = await postData

  if (!post) {
    notFound()
  }

  return (
    <>
      <Layout>
        <Container className="mb-20 space-y-10">
          <ArticleLayout meta={post}>
            <Markdown content={post.content} />
          </ArticleLayout>
        </Container>
      </Layout>
    </>
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const postData: Promise<any> = getPost(slug, isEnabled)
  const { post } = await postData
  const title: string = `${post.title} | ${TITLE}`

  return {
    title: title,
  }
}

export async function generateStaticParams() {
  const postsData: Promise<any[]> = getAllPosts(false)
  const posts = await postsData

  return posts.map((post) => ({
    slug: post.slug.toString(),
  }))
}
