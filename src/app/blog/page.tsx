import Title from '@/components/Title'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import { getAllPosts } from '@/lib/api'
import { draftMode } from 'next/headers'
import DateFormatter from '@/components/date-formatter'

export default async function Page() {
  const { isEnabled } = draftMode()
  const postsData = await getAllPosts(isEnabled)

  return (
    <>
      <Layout>
        <Title title="Blog" subtitle="Ultime notizie da..." />
        <Container className=" mb-20 space-y-10">
          {postsData.map((post) => (
            <div key={post.slug}>
              <h3 className="mb-3 text-3xl leading-snug">
                <a href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </a>
              </h3>
              <div className="mb-4 text-lg">
                <DateFormatter dateString={post.date} />
              </div>
              <p className="mb-4 text-lg leading-relaxed">{post.excerpt}</p>
            </div>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Blog | ${TITLE}`,
}
