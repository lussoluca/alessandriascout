import Link from 'next/link'
import DateFormatter from '@/components/DateFormatter'
import PostThumbnail from '@/components/PostThumbnail'
import PostType from '@/interfaces/post'

// Card used in the homepage "Dal blog" grid and in "related" lists.
export default function Post({ href, ...post }: PostType & { href?: string }) {
  return (
    <article className="group relative flex flex-col">
      <PostThumbnail
        post={post}
        sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
      />
      <div className="text-midnight-purple/60 mt-5 flex items-center text-sm">
        <span
          className="bg-ocean-blue mr-3 h-4 w-0.5 rounded-full"
          aria-hidden="true"
        />
        <DateFormatter dateString={post.date} />
      </div>
      <h3 className="group-hover:text-ocean-blue text-midnight-purple mt-2 line-clamp-2 text-lg font-semibold tracking-tight transition-colors">
        <Link href={href ?? `/blog/${post.slug}`}>
          <span className="absolute inset-0 z-10" />
          {post.title}
        </Link>
      </h3>
      {post.excerpt && (
        <p className="text-midnight-purple/80 mt-2 line-clamp-3 text-sm">
          {post.excerpt}
        </p>
      )}
    </article>
  )
}
