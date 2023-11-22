import Head from 'next/head'
import {config} from "@/data/config";

const Meta = () => {
  return (
    <Head>
        <title>AlessandriaScout</title>
        <meta
            name="description"
            content={config.description}
        />
    </Head>
  )
}

export default Meta
