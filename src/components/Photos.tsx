import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/sermig.jpeg'
import image2 from '@/images/photos/fuoco.jpeg'
import image3 from '@/images/photos/IMG_0017.jpeg'
import image4 from '@/images/photos/giornata_terra.jpeg'
import image5 from '@/images/photos/DSC_0217.jpeg'

export default function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mb-20 pt-10 sm:mt-0 lg:mb-0">
      <div className="no-scrollbar -my-4 flex gap-5 overflow-y-scroll py-4 sm:gap-8 2xl:justify-center 2xl:overflow-hidden">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'bg-ocean-blue relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              priority={imageIndex < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
