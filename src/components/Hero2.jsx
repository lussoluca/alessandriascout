import { Container } from '@/components/Container'
import Image from 'next/image'

import image1 from '@/images/photos/istockphoto-1173582449-1024x1024.jpg'

export function Hero2() {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              AlessandriaScout.it
            </h1>
            <p className="mt-6 text-lg text-gray-600">
            
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="lg:h-auto hidden lg:block">
              <Image
                src={image1.src}
                className="rounded-xl"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
