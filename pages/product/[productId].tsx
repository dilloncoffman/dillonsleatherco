import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { client } from '../../utils/shopifyClient'
import { Product } from 'shopify-buy'
import Layout from '../../components/Layout/Layout'

interface ProductProps {
  product: Product
}

const Product: NextPage<ProductProps> = ({ product }) => {
  const router = useRouter()
  const { productHandle } = router.query

  return (
    <Layout title={`${product.title} | Dillon's Leather Co.`}>
      <p>Product: {product.title}</p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productHandle = query.productId as string

  const product = await client.product.fetchByHandle(productHandle)

  return { props: { product: JSON.parse(JSON.stringify(product)) } }
}

export default Product
