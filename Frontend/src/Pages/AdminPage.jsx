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

export const AdminPage = () => {
    return (
        <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"100vh"}    bg={useColorModeValue('#000014', 'gray.800')}  >
          <Text fontSize={"xxx-large"} color={"gray"} paddingLeft={"30%"} >Welcome Admin</Text>
       
        </Box>
      )
}
