'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/counter.css'

export type GalleryImage = {
  sys: { id: string }
  url: string
  title?: string
  description?: string
  width?: number
  height?: number
}

const LIGHTBOX_WIDTHS = [640, 1080, 1600, 2400]

// Contentful's Images API resizes on the fly; never upscale past the original.
function lightboxSlide(image: GalleryImage) {
  const width = image.width ?? 1600
  const height = image.height ?? 1200
  return {
    src: `${image.url}?w=${Math.min(width, 2400)}&q=80`,
    width,
    height,
    alt: image.description ?? '',
    description: image.description,
    srcSet: LIGHTBOX_WIDTHS.filter((w) => w < width).map((w) => ({
      src: `${image.url}?w=${w}&q=80`,
      width: w,
      height: Math.round((height * w) / width),
    })),
  }
}

function ChevronIcon({
  direction,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          direction === 'left'
            ? 'M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
            : 'M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
        }
      />
    </svg>
  )
}

export default function PostGallery({
  images,
  title = 'Galleria fotografica',
}: {
  images: GalleryImage[]
  title?: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 })
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  const [selected, setSelected] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    setSelected(index)
    thumbsApi?.scrollTo(index)
  }, [emblaApi, thumbsApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') emblaApi?.scrollPrev()
    if (event.key === 'ArrowRight') emblaApi?.scrollNext()
  }

  if (images.length === 0) return null
  const multiple = images.length > 1

  return (
    <section aria-labelledby="gallery-title" className="not-prose mt-16">
      <h2
        id="gallery-title"
        className="text-midnight-purple text-2xl font-semibold tracking-tight"
      >
        {title}
      </h2>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="focus-visible:outline-ocean-blue relative mt-6 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <div
          ref={emblaRef}
          className="ring-scouting-purple/10 overflow-hidden rounded-2xl ring-1"
        >
          <div className="flex touch-pan-y">
            {images.map((image, index) => (
              <div
                key={image.sys.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} di ${images.length}`}
                className="bg-scouting-purple/5 relative aspect-[4/3] min-w-0 flex-[0_0_100%]"
              >
                {/* Blurred backdrop: posters and portraits are shown whole. */}
                <Image
                  src={image.url}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="160px"
                  className="scale-125 object-cover opacity-60 blur-2xl"
                />
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="absolute inset-0 cursor-zoom-in"
                  aria-label={`Apri a schermo intero: ${image.description || `immagine ${index + 1}`}`}
                >
                  <Image
                    src={image.url}
                    alt={image.description ?? ''}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    preload={index === 0}
                    className="object-contain"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {multiple && (
          <>
            {(['left', 'right'] as const).map((direction) => (
              <button
                key={direction}
                type="button"
                onClick={() =>
                  direction === 'left'
                    ? emblaApi?.scrollPrev()
                    : emblaApi?.scrollNext()
                }
                aria-label={
                  direction === 'left'
                    ? 'Immagine precedente'
                    : 'Immagine successiva'
                }
                className={clsx(
                  'text-midnight-purple hover:text-scouting-purple absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-black/5 backdrop-blur transition hover:bg-white',
                  direction === 'left' ? 'left-3' : 'right-3',
                )}
              >
                <ChevronIcon direction={direction} className="size-6" />
              </button>
            ))}
            <p
              aria-live="polite"
              className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white tabular-nums"
            >
              {selected + 1} / {images.length}
            </p>
          </>
        )}
      </div>

      {images[selected]?.description && (
        <p className="mt-3 text-center text-sm/6 text-gray-500">
          {images[selected].description}
        </p>
      )}

      {multiple && (
        <div ref={thumbsRef} className="mt-3 overflow-hidden">
          <div className="flex gap-3 p-1.5">
            {images.map((image, index) => (
              <button
                key={image.sys.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Vai all'immagine ${index + 1}`}
                aria-current={index === selected}
                className={clsx(
                  'relative aspect-square w-20 flex-none overflow-hidden rounded-lg transition sm:w-24',
                  index === selected
                    ? 'ring-scouting-purple ring-2 ring-offset-2'
                    : 'opacity-60 hover:opacity-100',
                )}
              >
                <Image
                  src={image.url}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        on={{ view: ({ index }) => emblaApi?.scrollTo(index, true) }}
        slides={images.map(lightboxSlide)}
        plugins={[Captions, Counter, Zoom]}
        carousel={{ finite: !multiple }}
        render={
          multiple
            ? undefined
            : { buttonPrev: () => null, buttonNext: () => null }
        }
        labels={{
          Close: 'Chiudi',
          Next: 'Successiva',
          Previous: 'Precedente',
          'Zoom in': 'Ingrandisci',
          'Zoom out': 'Riduci',
        }}
      />
    </section>
  )
}
