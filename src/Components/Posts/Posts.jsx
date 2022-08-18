import { Box, Button, VStack, Heading } from "@chakra-ui/react"
import Post from './Post';

function Posts ({ posts , showAll, show}) {
  return (
    <Box w='100%' h='100%' >
      <Heading fontSize='18px' color='white'>Category:<span>University</span></Heading>
      <Box w='100%' mt={2} h='100%' transition='ease-in 8s' rounded='md'
        shadow='md' animateOpacity overflow='hidden' in={show} display='flex' flexDirection='row' flexWrap='wrap' alignItems="flex-start" justifyContent="space-between">
        {posts.length ? (
          posts.map((item, index) =>  <Post post={item} key={index} /> )
        ) : (
          <Heading color='white' textAlign={'center'} w='100%'  h='200px' >Your List is empty</Heading>
        )}
      </Box>
      <VStack>
        <Button
          colorScheme='teal' color='yellow' variant='outline'
          onClick={showAll}
        >
          Show  {show ? 'Less' : 'More'}
        </Button>
      </VStack>
      
    </Box>
  )
}

export default Posts