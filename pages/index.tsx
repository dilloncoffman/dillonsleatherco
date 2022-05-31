import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dillon&apos;s Leather Co.</title>
        <meta
          name='description'
          content="Dillon's Leather Co. is selling some of the finest small leather goods around."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
          Welcome to <a href='https://nextjs.org'>Dillon&apos;s Leather Co.</a>
        </h1>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
