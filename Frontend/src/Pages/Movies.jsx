import { Box, Center, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'

export const Movies = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)

  useEffect(()=>{
    dispatch(getMovies())
  },[])


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')}>
       <Box className='Movies'>
      {
        Movies.length>0 && Movies.map((e)=>{
          return <MoviesCard  key={e.id} {...e}/>
        }  )
      }
      </Box>
    </Box>
  )
}
