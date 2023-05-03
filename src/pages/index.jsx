import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Quote } from '@/components/Quote'
import { Hero3 } from '@/components/Hero3'
import { Photos } from '@/components/Photos'
import { Groups } from '@/components/Groups'

export default function Home() {
  return (
    <>
      <Head>
        <title>AlessandriaScout</title>
        <meta
          name="description"
          content="Lorem ipsum."
        />
      </Head>
      <main>
        <Hero3 />
        <Quote />
        <Photos />
        <Groups />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
