import Image from 'next/image'
import clsx from 'clsx'
import ContentfulImage from '@/components/ContentfulImage'
import PostType from '@/interfaces/post'
import ResourceType from '@/interfaces/resource'
import agesci from '@/images/groups/agesci.png'

// Cover image if set, otherwise the first image embedded in the post body.
export function getPostThumbnailUrl(
  post: PostType | ResourceType,
): string | undefined {
  return post.coverImage?.url ?? post.content?.links?.assets?.block?.[0]?.url
}

export default function PostThumbnail({
  post,
  sizes,
  className,
}: {
  post: PostType | ResourceType
  sizes: string
  className?: string
}) {
  const url = getPostThumbnailUrl(post)

  return (
    <div
      className={clsx(
        'bg-scouting-purple/10 ring-scouting-purple/10 relative aspect-video overflow-hidden rounded-2xl ring-1 ring-inset',
        className,
      )}
    >
      {url ? (
        <>
          {/* Blurred backdrop fills the frame so posters and banners are never cropped. */}
          <ContentfulImage
            src={url}
            alt=""
            aria-hidden="true"
            fill
            sizes="200px"
            quality={30}
            className="scale-125 object-cover opacity-70 blur-2xl"
          />
          <ContentfulImage
            src={url}
            alt=""
            fill
            sizes={sizes}
            className="object-contain transition duration-300 group-hover:scale-105"
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={agesci} alt="" className="h-16 w-16 opacity-60" />
        </div>
      )}
    </div>
  )
}
