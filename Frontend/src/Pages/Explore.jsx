import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { CiSearch } from "react-icons/ci"

export const Explore = () => {
  return (
    <Box style={{background:"black", height:"100vh"}}>
         <InputGroup>
    <InputLeftElement pointerEvents='none' background="gray.200" mt="25px" >
   <Box ml="400px"> <CiSearch style={{color:"white", fontSize:"30px"}} /></Box>
    </InputLeftElement>
    <Input background="gray.800" w="75%" height="50px" color="white" ml="200px" type='text' placeholder='Movies, shows and more' mt="20px" />
  </InputGroup>
    </Box>
  )
}
