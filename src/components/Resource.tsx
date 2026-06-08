import DateFormatter from '@/components/DateFormatter'
import ResourceType from '@/interfaces/resource'

export default async function Resource(resource: ResourceType) {
  return (
    <article
      className="group relative flex flex-col items-start"
      key={resource.slug}
    >
      <h2 className="text-ocean-blue text-base font-semibold tracking-tight">
        <a href={`/risorse/${resource.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{resource.title}</span>
        </a>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm"
        dateTime={resource.date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="bg-ocean-blue h-4 w-0.5 rounded-full"></span>
        </span>
        <DateFormatter dateString={resource.date} />
      </time>
      <p className="relative z-10 mt-2 mb-5 text-sm">{resource.excerpt}</p>
    </article>
  )
}
