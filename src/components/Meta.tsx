import Head from 'next/head'
import { DESCRIPTION } from '@/lib/constants'

const Meta = () => {
  return (
    <Head>
      <title>AlessandriaScout</title>
      <meta name="description" content={DESCRIPTION} />
    </Head>
  )
}

export default Meta
