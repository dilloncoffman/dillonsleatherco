import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../utils/shopifyClient'
import { Product } from 'shopify-buy'
import Layout from '../components/Layout/Layout'

interface HomeProps {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <Layout title="Home | Dillon's Leather Co.">
      <h1>
        Welcome to <a href='https://nextjs.org'>Dillon&apos;s Leather Co.</a>
      </h1>
      {products.map((product: Product) => {
        const productId = product.id as string
        const parsedProductId = productId.split('/')[4]
        return (
          <div
            key={`${product.title}-${parsedProductId}`}
            style={{ border: 'solid 2px red', borderRadius: 2 }}
          >
            <h2>{product.title}</h2>
            <Image
              src={product.images[0].src}
              alt={product.title}
              width='400'
              height='400'
            />
            <Link href={`/product/${product.handle}`}>View product</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await client.product.fetchAll() // Fetch products
  const infos = await client.shop.fetchInfo() // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies() // fetch shop policy if you have any
  return {
    props: {
      infos: JSON.parse(JSON.stringify(infos)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}

export default Home
