import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { CiSearch } from "react-icons/ci"

export const Explore = () => {
  return (
    <Box style={{width:"85vw", marginLeft:"17%", border:"2px solid red", background:"black", height:"100vh" }}>
         <InputGroup>
    <InputLeftElement pointerEvents='none'  mt="25px" >
   <Box > <CiSearch style={{color:"white", fontSize:"30px", marginLeft:"125px"}} /></Box>
    </InputLeftElement>
    <Input background="gray.800" w="75%" height="50px" color="white" ml="5%" type='text' placeholder='Movies, shows and more' mt="20px" />
  </InputGroup>
    </Box>
  )
}
