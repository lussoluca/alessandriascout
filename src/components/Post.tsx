import DateFormatter from '@/components/DateFormatter'
import PostType from '@/interfaces/post'

export default async function Post(post: PostType) {
  return (
    <article
      className="group relative flex flex-col items-start"
      key={post.slug}
    >
      <h2 className="text-base font-semibold tracking-tight text-ocean-blue">
        <a href={`/blog/${post.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{post.title}</span>
        </a>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm"
        dateTime={post.date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-ocean-blue"></span>
        </span>
        <DateFormatter dateString={post.date} />
      </time>
      <p className="relative z-10 mt-2 mb-5 text-sm">{post.excerpt}</p>
    </article>
  )
}
