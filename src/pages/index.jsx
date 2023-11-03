import Head from 'next/head'

import {Faqs} from '@/components/Faqs'
import {Footer} from '@/components/Footer'
import {Quote} from '@/components/Quote'
import {Hero} from '@/components/Hero'
import {Photos} from '@/components/Photos'
import {Groups} from '@/components/Groups'

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
                <Hero/>
                <Photos/>
                <Quote/>
                <Groups/>
                <Faqs/>
            </main>
            <Footer/>
        </>
    )
}
