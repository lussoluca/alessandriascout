import Container from '@/components/Container'

export function Posts() {
    return (
        <section
            id="blog"
            aria-labelledby="blog-title"
            className="relative overflow-hidden py-4 sm:py-8"
        >
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="post-title"
                        className="font-display text-3xl tracking-tight text-slate-900 mb-10 sm:text-4xl"
                    >
                        Dal blog
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <article className="group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div
                                className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                                className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                                className="relative z-10">Crafting a design system for a multiplanetary future</span></a>
                        </h2>
                        <time
                            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                            dateTime="2022-09-05"><span className="absolute inset-y-0 left-0 flex items-center"
                                                        aria-hidden="true"><span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>September 5,
                            2022
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Most companies try to
                            stay
                            ahead of the curve when it comes to visual design, but for Planetaria we needed to create a
                            brand
                            that would still inspire us 100 years from now when humanity has spread across our entire
                            solar
                            system.</p>
                        <div aria-hidden="true"
                             className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500">Read
                            article
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                 className="ml-1 h-4 w-4 stroke-current">
                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </article>
                    <article className="group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div
                                className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <a href="/articles/introducing-animaginary"><span
                                className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                                className="relative z-10">Introducing Animaginary: High performance web animations</span></a>
                        </h2>
                        <time
                            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                            dateTime="2022-09-02"><span className="absolute inset-y-0 left-0 flex items-center"
                                                        aria-hidden="true"><span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>September 2,
                            2022
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">When you’re building
                            a
                            website for a company as ambitious as Planetaria, you need to make an impression. I wanted
                            people to
                            visit our website and see animations that looked more realistic than reality itself.</p>
                        <div aria-hidden="true"
                             className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500">Read
                            article
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                 className="ml-1 h-4 w-4 stroke-current">
                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </article>
                </div>
                <div className="mt-10 flex justify-center">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Leggili tutti
                </a>
                </div>
            </Container>
        </section>
    )
}
