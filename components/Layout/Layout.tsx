import { FunctionComponent, ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  title: string
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content="Dillon's Leather Co. is selling some of the finest small leather goods around."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container maxW='container.lg' minH='90vh' as='main'>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
