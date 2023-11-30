import Post from '@/interfaces/post'

const ITEMS_PER_PAGE = 6

const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  contentfulMetadata {
    tags {
        id
        name
    }
  }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    },
  ).then((response) => response.json())
}

function extractPost(fetchResponse: any): Post {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any): Post[] {
  return fetchResponse?.data?.postCollection?.items
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )

  return extractPost(entry)
}

export async function getPagedPosts(
  currentPage: number,
  isDraftMode: boolean,
): Promise<any[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  const entries = await fetchGraphQL(
    `query {
      postCollection(skip:${offset}, limit:${ITEMS_PER_PAGE}, where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractPostEntries(entries)
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractPostEntries(entries)
}

export async function getPostsCount(): Promise<number> {
  const count = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: false) {
        total
      }
    }`,
    false,
  )

  return Math.ceil(Number(count?.data?.postCollection?.total) / ITEMS_PER_PAGE)
}

export async function getLatestPosts(
  isDraftMode: boolean,
  limit: number,
): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, limit: ${limit}, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractPostEntries(entries)
}

export async function getPost(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )

  return {
    post: extractPost(entry),
  }
}
