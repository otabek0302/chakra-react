import React from 'react'
import { Input } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"

import {
  FormControl,
  Button
} from '@chakra-ui/react'
import Item from './Item'

function Search ({ search, setSearch, post }) {
  return (
    <Box display='flex' flexDirection='column' w='100%' h='430px' p='5px 10px'  >
      <Box w='100%' bg='transparent' display='flex' alignItems="center" borderRadius="5" justifyContent="space-between" p='10px 0' border='none'>
        <FormControl w='77%'  h='50px' borderRadius="5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Searching for something'
            size='sm'
            h='100%'
            p='5px'
            fontSize='26px'
            border='1px' borderColor='#ccc' 
            borderRadius="5"
          />
        </FormControl>
        <Button
          w='20%'
          h='50px'
          type='submit'
          fontSize='28px'
          fontWeight='normal'
          bg='white'
          >
          Search
        </Button>
      </Box>
      <Box spacing={2}  w='100%' h='100%' display='flex' alignItems="center"  justifyContent="center" >
        <Item post={post}  />
      </Box>
    </Box>
  )
}

export default Search