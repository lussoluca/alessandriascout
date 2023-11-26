'use server'

import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const requestHeaders = new Headers(request.headers)
  const secret = requestHeaders.get('x-vercel-reval-key')

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidateTag('posts')

  return Response.json({ revalidated: true, now: Date.now() })
}
