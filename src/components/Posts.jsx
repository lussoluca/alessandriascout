import Container from '@/components/Container'
import { getLatestPosts } from '@/lib/api'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import DateFormatter from '@/components/date-formatter'

export default async function Posts() {
  const { isEnabled } = draftMode()
  const postsData = await getLatestPosts(isEnabled, 2)

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative overflow-hidden py-4 sm:py-8"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="post-title"
            className="mb-10 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Dal blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {postsData.map((post) => (
            <article
              className="group relative flex flex-col items-start"
              key={post.slug}
            >
              <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href={`/blog/${post.slug}`}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{post.title}</span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400"
                dateTime={post.date}
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
                </span>
                <DateFormatter dateString={post.date} />
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600">
                {post.excerpt}
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Leggili tutti
          </Link>
        </div>
      </Container>
    </section>
  )
}
