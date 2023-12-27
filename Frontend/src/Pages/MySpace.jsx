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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


  return (
    <Box as="main"  height="auto" w={"100%"}  marginLeft={"10%"}  bg={useColorModeValue('black', 'gray.800')}>
    <Center style={{background:"black", height:"100vh" , }}>
        
       
       <Box >
       <Center><img width="80%" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png" alt="" /></Center> 
       <Center > <h3 style={{color:"white", padding:"10px"}}>Login to Disney+ Hotstar</h3></Center>
       <Center> <Text color="gray.500" p="20px">Start watching from where you left off, personalise for kids and more</Text> </Center>
           <Center><Button colorScheme='blue' width="45%" onClick={onOpen} >Login</Button></Center>

           <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalOverlay style={{ backdropFilter: 'blur(1px)'}} />
        <ModalContent  style={{ background: 'transparent', color:"white" }} >
          <ModalHeader>Login your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}   >
            <FormControl >
              <FormLabel>Enter Email</FormLabel>
              <Input ref={initialRef} placeholder='Enter your E-mail' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Enter Password</FormLabel>
              <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </Box>       
    </Center>
    </Box>
  )
}
