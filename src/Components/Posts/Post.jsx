import React from 'react'
import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react"

function Post ({ title, author, url, created_at }) {
     return (
       <Box w='48%' h='200px'mb='10px'  p='5px' borderRadius='5px' backgroundColor='whiteAlpha.700' display='flex'     flexDirection='row' justifyContent="space-around" flexDir='column'>
            <Heading w='100%' h='80px' overflowX='scroll' size='14px' display='block' color='white'>
               { !title ? 'There no title' : title }
            </Heading>
            <Box w='100%' h='20px' display='flex' flexWrap='wrap' alignItems="flex-start" justifyContent='space-between' >
                    <Text>By:<span size='14px' p='2px 0'> { author }</span></Text>
                 <Link to={!url ? "" : url } style={{ textDecoration: 'underline', ml: '4px' }} >Read More</Link>
            </Box>
           <Box w='100%' display='block' p='2px'> { created_at }</Box>
       </Box>
  )
}

export default Post