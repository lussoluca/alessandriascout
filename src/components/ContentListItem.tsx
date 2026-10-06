import Link from 'next/link'
import DateFormatter from '@/components/DateFormatter'
import PostThumbnail from '@/components/PostThumbnail'
import PostType from '@/interfaces/post'
import ResourceType from '@/interfaces/resource'

// Archive row for posts and resources: thumbnail left, text right (stacked on mobile).
export default function ContentListItem({
  item: post,
  href,
}: {
  item: PostType | ResourceType
  href: string
}) {
  return (
    <article className="group relative flex flex-col gap-6 py-10 first:pt-0 sm:flex-row sm:items-center sm:gap-8">
      <PostThumbnail
        post={post}
        sizes="(min-width: 640px) 288px, 100vw"
        className="w-full shrink-0 sm:w-72"
      />
      <div className="max-w-xl">
        <div className="text-midnight-purple/60 flex items-center text-sm">
          <span
            className="bg-ocean-blue mr-3 h-4 w-0.5 rounded-full"
            aria-hidden="true"
          />
          <DateFormatter dateString={post.date} />
        </div>
        <h2 className="group-hover:text-ocean-blue text-midnight-purple mt-2 text-xl font-semibold tracking-tight transition-colors">
          <Link href={href}>
            <span className="absolute inset-0 z-10" />
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-midnight-purple/80 mt-3 line-clamp-3 text-sm">
            {post.excerpt}
          </p>
        )}
        <p
          className="text-ocean-blue mt-4 text-sm font-semibold"
          aria-hidden="true"
        >
          Leggi{' '}
          <span className="inline-block transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </article>
  )
}
