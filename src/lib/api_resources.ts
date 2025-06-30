import Resource from '@/interfaces/resource'

const ITEMS_PER_PAGE = 6

const RESOURCE_GRAPHQL_FIELDS = `
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
      next: { tags: ['resources'] },
    },
  ).then((response) => response.json())
}

function extractResource(fetchResponse: any): Resource {
  return fetchResponse?.data?.resourceCollection?.items?.[0]
}

function extractResourceEntries(fetchResponse: any): Resource[] {
  return fetchResponse?.data?.resourceCollection?.items
}

export async function getPreviewResourceBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      resourceCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${RESOURCE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )

  return extractResource(entry)
}

export async function getPagedResources(
  currentPage: number,
  isDraftMode: boolean,
): Promise<any[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  const entries = await fetchGraphQL(
    `query {
      resourceCollection(skip:${offset}, limit:${ITEMS_PER_PAGE}, where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${RESOURCE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractResourceEntries(entries)
}

export async function getAllResources(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      resourceCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${RESOURCE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractResourceEntries(entries)
}

export async function getResourcesCount(): Promise<number> {
  const count = await fetchGraphQL(
    `query {
      resourceCollection(where: { slug_exists: true }, order: date_DESC, preview: false) {
        total
      }
    }`,
    false,
  )

  return Math.ceil(Number(count?.data?.resourceCollection?.total) / ITEMS_PER_PAGE)
}

export async function getLatestResources(
  isDraftMode: boolean,
  limit: number,
): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      resourceCollection(where: { slug_exists: true }, order: date_DESC, limit: ${limit}, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${RESOURCE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractResourceEntries(entries)
}

export async function getResource(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      resourceCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${RESOURCE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )

  return {
    resource: extractResource(entry),
  }
}
