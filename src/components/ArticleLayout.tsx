import Prose from '@/components/Prose'
import DateFormatter from '@/components/DateFormatter'
import CoverImage from '@/components/CoverImage'
import Link from 'next/link'
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS} from "@contentful/rich-text-types";
import Image from "next/image";

function renderOptions(links) {
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
        assetMap.set(asset.sys.id, asset);
    }

    return {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                // find the asset in the assetMap by ID
                const asset = assetMap.get(node.data.target.sys.id);

                // render the asset accordingly
                return (
                    <Image
                        src={asset.url}
                        alt={asset.description}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto h-auto "
                    />
                );
            },
        },
    };
}

export default function ArticleLayout({children, meta}) {
    return (
        <>
            <div className="xl:relative">
                <div className="mx-auto">
                    <article>
                        <header className="flex flex-col">
                            <Link href="/blog">
                                <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500"
                                >
                                    Torna al blog
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        aria-hidden="true"
                                        className="ml-1 h-4 w-4 stroke-current"
                                    >
                                        <path
                                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </Link>

                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                                {meta.title}
                            </h1>
                            <div className="flex items-center text-base text-zinc-400">
                                Scritto da {meta.author.name}
                            </div>
                            <time
                                dateTime={meta.date}
                                className="mb-6 flex items-center text-base text-zinc-400"
                            >
                <span className="">
                  <DateFormatter dateString={meta.date}/>
                </span>
                            </time>
                        </header>
                        {meta.coverImage && (
                            <div className="mb-6">
                                <CoverImage title={meta.title} url={meta.coverImage.url}/>
                            </div>
                        )}

                        <Prose
                            className="my-8">{documentToReactComponents(meta.content.json, renderOptions(meta.content.links))}</Prose>

                        {/*{meta.contentfulMetadata.concepts.length > 0 && (*/}
                        {/*  <div className="space-x-2">*/}
                        {/*    Tags:{' '}*/}
                        {/*    {meta.contentfulMetadata.concepts.map((tag) => (*/}
                        {/*      <span*/}
                        {/*        className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"*/}
                        {/*        key={tag.id}*/}
                        {/*      >*/}
                        {/*        {tag.id}*/}
                        {/*      </span>*/}
                        {/*    ))}*/}
                        {/*  </div>*/}
                        {/*)}*/}
                    </article>
                </div>
            </div>
        </>
    )
}
