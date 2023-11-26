import Title from "@/components/Title";
import {Metadata} from "next";
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import {getAllPosts} from "@/lib/api";
import {draftMode} from "next/headers";
import DateFormatter from "@/components/date-formatter";

export default async function Page() {
    const { isEnabled } = draftMode()
    const postsData = await getAllPosts(isEnabled)

    return (
        <>
            <Layout>
                <Title
                    title="Blog"
                    subtitle="Ultime notizie da..."
                />
                <Container className=" mb-20 space-y-10">
                    {postsData.map((post) => (
                    <div key={post.slug}>
                        <h3 className="text-3xl mb-3 leading-snug">
                            <a
                                href={`/blog/${post.slug}`}
                                className="hover:underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                        <div className="text-lg mb-4">
                            <DateFormatter dateString={post.date} />
                        </div>
                        <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
                    </div>
                ))}
                </Container>
            </Layout>
        </>
    )
}

export const metadata: Metadata = {
    title: `Blog | ${TITLE}`,
}
