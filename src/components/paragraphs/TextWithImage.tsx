import Image from 'next/image'
import { createValidHtmlId } from '@/lib/string'

const TextWithImage = ({ children, image, imagePosition = 'right', title }) => {
  let imageClass = 'lg:pl-20'
  let textClass = 'lg:order-first lg:row-span-2 lg:col-span-3'

  if (imagePosition == 'left') {
    imageClass = 'lg:pr-20 lg:order-first lg:col-span-1'
    textClass = 'lg:row-span-2 lg:col-span-3'
  }

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:grid-rows-[auto_1fr]">
      <div className={imageClass}>
        <div className="max-w-xs px-2.5 lg:mt-20 lg:max-w-none">
          <Image
            src={image}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
          />
        </div>
      </div>
      <div className={textClass}>
        <h2
          className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl"
          id={createValidHtmlId(title)}
        >
          {title}
        </h2>
        <div className="mt-6 space-y-7 text-base text-zinc-600">{children}</div>
      </div>
    </div>
  )
}

export default TextWithImage
