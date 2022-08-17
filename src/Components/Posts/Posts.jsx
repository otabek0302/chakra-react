import { Box, Button, VStack, Heading } from "@chakra-ui/react"
import Post from './Post';

function Posts ({ posts, show, setShow }) {
  return (
    <Box w='100%' h='100%' >
      <Heading fontSize='18px' color='white'>Category:<span>Game</span></Heading>
      <Box w='100%' mt={2} h={!show ? '420px' : '100%'} overflow='hidden' display='flex' flexDirection='row' flexWrap='wrap' alignItems="flex-start" justifyContent="space-between">
        {posts.length ? (
          posts.map((item, index) =>  <Post post={item} key={index} /> )
        ) : (
          <h1>Your List is empty</h1>
        )}
      </Box>
      <VStack>
          <Button colorScheme='teal' onClick={() => setShow(!false)} color='yellow' variant='outline'>Show More</Button>
      </VStack>
      
    </Box>
  )
}

export default Posts