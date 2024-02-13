import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Box,
  Image
} from '@chakra-ui/react';
import Logo from "../Imges/PLY.png"

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"100Vh"}    bg={useColorModeValue('black', 'gray.800')} >
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl" color={"blue"} >Login in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('blur', 'gray.700')}
            rounded="lg"
            border={"1px solid blue"}
            boxShadow="lg"
            color={"blue"}
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
             <Image w={"30%"} src={Logo} alt={"logo"} />
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" placeholder={"Enter your email"} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md" >
                  <Input rounded="md" type={show ? 'text' : 'password'}  placeholder={"Enter your password"} />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue('blue.300', 'gray.700')}
                      _hover={{
                        bg: useColorModeValue('blue.400', 'gray.800')
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="blue" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button
                bg="blue.300"
                color="white"
                _hover={{
                  bg: 'blue.500'
                }}
                rounded="md"
                w="100%"
              >
                Login
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
    </Box>
  );
};

