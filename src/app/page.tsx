import Layout from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Photos } from '@/components/Photos'
import { Quote } from '@/components/Quote'
import { Groups } from '@/components/Groups'
import { Faqs } from '@/components/Faqs'
import { Posts } from '@/components/Posts'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Photos />
        <Quote />
        <Groups />
        <Faqs />
        <Posts />
      </Layout>
    </>
  )
}
