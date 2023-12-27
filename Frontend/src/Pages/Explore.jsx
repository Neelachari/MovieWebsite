import { Box, InputGroup, InputLeftElement, Input, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'

export const Explore = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)

  useEffect(()=>{
    dispatch(getMovies())
  },[])


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')}  >
      <Box >
         <InputGroup>
    <InputLeftElement pointerEvents='none'  mt="25px" >
   <Box > <CiSearch style={{color:"white", fontSize:"30px", marginLeft:"125px"}} /></Box>
    </InputLeftElement>
    <Input background="gray.800" w="75%" height="50px" color="white" ml="5%" type='text' placeholder='Movies, shows and more' mt="20px" />
  </InputGroup>
    </Box>
    <Box className='Movies'> 
         {
        Movies.length>0 && Movies.map((e)=>{
          return <MoviesCard  key={e.id} {...e}/>
        }  )
      } 

         {/* //Cards Render */}
         </Box> 
    </Box>
  )
}
