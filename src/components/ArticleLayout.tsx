import Prose from '@/components/Prose'
import DateFormatter from '@/components/DateFormatter'
import CoverImage from '@/components/CoverImage'

export default function ArticleLayout({ children, meta }) {
  return (
    <>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {meta.title}
              </h1>
              <time
                dateTime={meta.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">
                  <DateFormatter dateString={meta.date} />
                </span>
              </time>
            </header>
            <CoverImage title={meta.title} url={meta.coverImage.url} />
            <div>Scritto da: {meta.author.name}</div>
            <div>
              Tags:{' '}
              {meta.contentfulMetadata.tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
            <Prose className="mt-8">{children}</Prose>
          </article>
        </div>
      </div>
    </>
  )
}
