import { Box, InputGroup, InputLeftElement, Input, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import { useSearchParams } from 'react-router-dom'

export const Explore = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  const [searchParms]=useSearchParams()
  const [query,setQuery]=useState("")

  // useEffect(()=>{
  //   dispatch(getMovies())
  // },[])

  let ref=useRef()


  //Search Results 
  const parmobj={
    params:{
      q:query && query,

    }
  }

  useEffect(()=>{
    if(ref.current){
      clearTimeout(ref.current)
    }
    ref.current=setTimeout(()=>{
      dispatch(getMovies(parmobj))
      },1000)

  },[query])


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')}  >
      <Box >
         <InputGroup>
    <InputLeftElement pointerEvents='none'  mt="25px" >
   <Box > <CiSearch style={{color:"white", fontSize:"30px", marginLeft:"125px"}} /></Box>
    </InputLeftElement>
    <Input background="gray.800" w="75%" height="50px" color="white" ml="5%" type='text' placeholder='Movies, shows and more' mt="20px" onChange={(e)=>setQuery(e.target.value)} />
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
