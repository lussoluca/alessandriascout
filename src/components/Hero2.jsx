import { Container } from '@/components/Container'
import Image from 'next/image'

import image1 from '@/images/photos/istockphoto-1173582449-1024x1024.jpg'

export function Hero2() {
  return (
    <div className="overflow-hidden pb-20">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              AlessandriaScout.it
            </h1>
            <p className="mt-6 text-lg text-gray-600">
            Cari scout, la felicità non dipende dalle ricchezze né dal successo.
            Guardate al lato bello delle cose e non al lato brutto.
            Il vero modo di essere felici è quello di procurare la felicità agli altri.
            <br/>Preoccupatevi di lasciare questo mondo un po&apos; migliore di come lo avete trovato. 
            Mantenete la vostra promessa di esploratori anche quando non sarete più ragazzi e Dio vi aiuti in questo.
            </p>
          </div>

        </div>
      </Container>
    </div>
  )
}
