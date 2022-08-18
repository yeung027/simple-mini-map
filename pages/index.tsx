import type { NextPage } from 'next'
import Head from 'next/head'
import MiniMap from '../components/minimap'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Simple Mini Map</title>
        <meta name="description" content="Simple Mini Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen flex justify-center items-center'>
        <MiniMap />
      </main>
    </div>
  )
}

export default Home
