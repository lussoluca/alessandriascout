import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage?: {
    url: string
  }
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: any
  tags: string[]
}

export default PostType
