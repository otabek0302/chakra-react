import React from 'react'
import { VStack } from '@chakra-ui/react'

function Item ({ items }) {
  const item = items.slice(0, 1)
  console.log(item);
  return (
     <>
      <VStack  w='100%' color='white' fontSize='5xl'>
        <h1>{ item.map(item => item.title) }</h1>
      </VStack>
    </>
  )
}

export default Item