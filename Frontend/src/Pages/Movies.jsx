import { Box, Center, CircularProgress, Heading, SkeletonCircle, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import './Movie.css'


export const Movies = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  const isLoading=useSelector((store)=> store.productReducer.isLoading)


  useEffect(()=>{
    dispatch(getMovies())
  },[])


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')}>
       <Box className='Movies'>
      {
        isLoading ? <Box as="main"  height="700px" w={"100%"} paddingLeft={"500px"} mt={"200px"} bg={useColorModeValue('black', 'gray.800')} ><CircularProgress isIndeterminate color='blue.300' /></Box> :Movies.length>0 && Movies?.map((e)=>{
          return <MoviesCard  key={e.id} {...e}/>
        }  )  

        
      }
      </Box>
    </Box>
  )
}
