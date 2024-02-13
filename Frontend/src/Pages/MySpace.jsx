import { Button, Center ,Box, Text, useColorModeValue } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,InputRightElement,InputGroup
  } from '@chakra-ui/react'


import React from 'react'

export const MySpace = () => {
   

  return (
    <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"100vh"}    bg={useColorModeValue('black', 'gray.800')}  >
      <Text fontSize={"xxx-large"} color={"blue"} paddingLeft={"30%"} >Welcome User !</Text>
   
    </Box>
  )
}
