import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  Box
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { postSignup } from '../Redux/Auth/Action';

const initialState={
  UserID:"",
  Name:"",
  mobile_Number:"",
  age:"",
  email:"",
  password:"",
}

// UserID:{type:Number,required:true},
// Name:{type:String,required:true},
// email:{type:String,required:true},
// mobile_Number:{type:Number,required:true},
// age:{type:Number,required:true},
// password:{type:String,required:true},

export const SignUp = () => {
  const [user,setuser]=React.useState(initialState) 
  const dispatch= useDispatch()



 const handleChange=(e)=>{
  const {name,value}=e.target
  setuser(prev => {
    return {...prev, [name] : name=== "age" && name==="mobile_Number"  ? +value :value}
})
 }

 const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(postSignup(user))
 console.log(user)
}




  return (
    <Box as="main"  height="auto" w={"100vw"} paddingLeft={"8%"}  bg={"black"} border={"0.1px solid blue"} >
    <Stack minH="70vh"  paddingLeft={"8%"} marginTop={"3%"} direction={{ base: 'column-reverse', md: 'row' }} border={"1px solid blue"} background= 'transparent' color="white" backdropFilter={"blur(1px)"}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" src="https://emby.media/community/uploads/inline/1124/57dec9263974d_Produce7.gif" />
      </Flex>
      <Flex p={6} flex={1} align="center" justifyContent="center">
        <Stack spacing={2}>
          <Stack align="center">
            <Heading fontSize="2xl" color={"blue"}>Sign in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={6}
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('black', 'gray.700')}
            color={"blue"}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={1} w="100%">
            <FormControl id="email">
                <FormLabel>Name</FormLabel>
                <Input rounded="md" type="text" placeholder='Enter your Name' name='Name' value={user.Name} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Mobile number</FormLabel>
                <Input rounded="md" type="number" placeholder='Enter your Number'  name='mobile_Number' value={user.mobile_Number} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" placeholder='Enter your email' name='email' value={user.email} onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Age</FormLabel>
                <Input rounded="md" type="number" placeholder='Enter your Age' name='age' value={user.age} onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input rounded="md" type="password" placeholder='Enter your password' name='password' value={user.password} onChange={(e)=>handleChange(e)}/>
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
                bg="blue.500"
                color="white"
                _hover={{
                  bg: 'blue.300'
                }}
                rounded="md"
                w="100%"
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
    </Box>
  );
};

;

// UserID:{type:Number,required:true},
//     Name:{type:String,required:true},
//     email:{type:String,required:true},
//     mobile_Number:{type:Number,required:true},
//     age:{type:Number,required:true},
//     password:{type:String,required:true},