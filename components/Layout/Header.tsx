import { FunctionComponent } from 'react'
import { Box, HStack } from '@chakra-ui/react'

const Header: FunctionComponent = () => {
  return (
    <HStack justify='space-between' p='1rem' borderBottom='3px solid red'>
      <Box bg='yellow.200'>1</Box>
      <Box bg='tomato'>2</Box>
      <Box bg='pink.100'>3</Box>
    </HStack>
  )
}

export default Header
