import {Faqs} from '@/components/Faqs'
import {Quote} from '@/components/Quote'
import {Hero} from '@/components/Hero'
import {Photos} from '@/components/Photos'
import {Groups} from '@/components/Groups'
import {Posts} from '@/components/Posts'
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero/>
                <Photos/>
                <Quote/>
                <Groups/>
                <Faqs/>
                <Posts/>
            </Layout>
        </>
    )
}
