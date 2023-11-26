import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/istockphoto-916072438-1024x1024.jpg'
import image2 from '@/images/photos/istockphoto-1173584509-1024x1024.jpg'
import image3 from '@/images/photos/istockphoto-1485544927-1024x1024.jpg'
import image4 from '@/images/photos/istockphoto-1089394888-1024x1024.jpg'
import image5 from '@/images/photos/istockphoto-1173582449-1024x1024.jpg'

export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mb-20 pt-10 sm:mt-0 lg:mb-0">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
