import { getAllPosts, getPost, getLatestPosts } from '@/lib/api_posts'
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

export default async function Post({ params }: Params) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const postData: Promise<any> = getPost(slug, isEnabled)
  const { post } = await postData

  if (!post) {
    notFound()
  }

  const latest = await getLatestPosts(isEnabled, 4)
  const related = (latest ?? [])
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Layout>
        <Container className="mb-24">
          <ArticleLayout
            meta={post}
            backHref="/blog"
            backLabel="Torna al blog"
            related={related}
            relatedTitle="Altri articoli"
            relatedHref={(relatedSlug) => `/blog/${relatedSlug}`}
          />
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
