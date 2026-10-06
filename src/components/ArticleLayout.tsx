import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Prose from '@/components/Prose'
import DateFormatter from '@/components/DateFormatter'
import Post from '@/components/Post'
import PostGallery from '@/components/PostGallery'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
      />
    </svg>
  )
}

function ArticleFigure({
  url,
  width,
  height,
  description,
  title,
  preload = false,
}: {
  url: string
  width?: number
  height?: number
  description?: string
  title?: string
  preload?: boolean
}) {
  // Editors often reuse the post title as the image description; skip it then.
  const caption =
    description && description.trim() !== title?.trim() ? description : null

  return (
    <figure className="not-prose my-10">
      <Image
        src={url}
        alt={description ?? ''}
        width={width ?? 1600}
        height={height ?? 900}
        sizes="(min-width: 768px) 672px, 100vw"
        preload={preload}
        className="bg-scouting-purple/5 ring-scouting-purple/10 mx-auto h-auto max-h-[80vh] w-auto max-w-full rounded-xl ring-1"
      />
      {caption && (
        <figcaption className="mt-4 flex justify-center gap-x-2 text-sm/6 text-gray-500">
          <InfoIcon className="mt-0.5 size-5 flex-none text-gray-300" />
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function renderOptions(links, title: string) {
  const assetMap = new Map()
  for (const asset of links?.assets?.block ?? []) {
    assetMap.set(asset.sys.id, asset)
  }

  let firstImage = true

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id)
        if (!asset) return null

        // The first image is usually above the fold: load it eagerly.
        const preload = firstImage
        firstImage = false

        return (
          <ArticleFigure
            key={asset.sys.id}
            url={asset.url}
            width={asset.width}
            height={asset.height}
            description={asset.description}
            title={title}
            preload={preload}
          />
        )
      },
    },
  }
}

// Detail page for blog posts and resources, after the Tailwind Plus
// "Centered" content section: narrow reading column, eyebrow, lead.
export default function ArticleLayout({
  meta,
  backHref,
  backLabel,
  related = [],
  relatedTitle,
  relatedHref,
}: {
  meta: any
  backHref: string
  backLabel: string
  related?: any[]
  relatedTitle?: string
  relatedHref?: (slug: string) => string
}) {
  const lead =
    meta.excerpt && meta.excerpt.trim() !== meta.title.trim()
      ? meta.excerpt
      : null

  return (
    <>
      <article className="mx-auto max-w-3xl pt-6 text-base/7 text-gray-700 sm:pt-10">
        <Link
          href={backHref}
          className="group text-scouting-purple inline-flex items-center gap-x-2 text-sm font-semibold"
        >
          <span className="bg-scouting-purple/10 group-hover:bg-scouting-purple/20 flex size-8 items-center justify-center rounded-full transition">
            <ArrowLeftIcon className="size-4 stroke-current transition group-hover:-translate-x-0.5" />
          </span>
          {backLabel}
        </Link>

        <header className="mt-10">
          <p className="text-ocean-blue text-base/7 font-semibold">
            <DateFormatter dateString={meta.date} />
          </p>
          <h1 className="text-midnight-purple mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            {meta.title}
          </h1>
          {lead && <p className="mt-6 text-xl/8 text-gray-600">{lead}</p>}
          {meta.author?.name && (
            <div className="mt-8 flex items-center gap-x-3 text-sm/6">
              {meta.author.picture?.url && (
                <Image
                  src={meta.author.picture.url}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-gray-50"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">
                  {meta.author.name}
                </p>
                <p className="text-gray-500">Autore</p>
              </div>
            </div>
          )}
        </header>

        {meta.coverImage?.url && (
          <ArticleFigure url={meta.coverImage.url} title={meta.title} preload />
        )}

        <Prose className="prose-lg prose-a:text-ocean-blue prose-headings:text-midnight-purple prose-strong:text-gray-900 mt-10 text-gray-700">
          {meta.content?.json &&
            documentToReactComponents(
              meta.content.json,
              renderOptions(meta.content.links, meta.title),
            )}
        </Prose>

        {/* Resources have no images field, so this only renders for posts. */}
        {meta.imagesCollection?.items?.length > 0 && (
          <PostGallery images={meta.imagesCollection.items.filter(Boolean)} />
        )}

        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link
            href={backHref}
            className="text-scouting-purple text-sm font-semibold hover:underline"
          >
            ← {backLabel}
          </Link>
        </div>
      </article>

      {related.length > 0 && relatedTitle && relatedHref && (
        <section
          aria-labelledby="related-title"
          className="mx-auto mt-20 max-w-7xl border-t border-gray-200 pt-16"
        >
          <h2
            id="related-title"
            className="text-midnight-purple text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {relatedTitle}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Post key={item.slug} {...item} href={relatedHref(item.slug)} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
