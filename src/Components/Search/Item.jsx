import React from 'react'
import { VStack } from '@chakra-ui/react'

function Item ({ post }) {
  return (
     <>
      <VStack  w='100%' color='white' fontSize='5xl'>
        <h1>{ post?.title }</h1>
      </VStack>
    </>
  )
}

export default Item