import DateFormatter from '@/components/DateFormatter'
import PostType from '@/interfaces/post'

export default async function Post(post: PostType) {
  return (
    <article
      className="group relative flex flex-col items-start"
      key={post.slug}
    >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
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
      <p className="relative z-10 mt-2 text-sm text-zinc-600">{post.excerpt}</p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500"
      >
        Leggi l’articolo
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
  )
}
