import Container from '@/components/Container'
import { getLatestPosts } from '@/lib/api'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import Post from '@/components/Post'

export default async function Posts() {
  const { isEnabled } = draftMode()
  const postsData = await getLatestPosts(isEnabled, 6)

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative mt-16 overflow-hidden px-6 lg:px-8"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="post-title"
            className="mb-10 text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Dal blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {postsData.map((post) => (
            <Post key={post.slug} {...post} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="rounded-md bg-scouting-purple px-3.5 py-2.5 text-sm font-semibold text-canvas-white shadow-sm hover:bg-scouting-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scouting-purple"
          >
            Leggili tutti
          </Link>
        </div>
      </Container>
    </section>
  )
}
