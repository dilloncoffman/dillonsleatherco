import { FunctionComponent } from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Footer: FunctionComponent = () => {
  return (
    <Box as='footer' p='2rem 1rem' borderTop='3px solid red'>
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
    </Box>
  )
}

export default Footer
