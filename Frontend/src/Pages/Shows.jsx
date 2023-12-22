import { Box, Center, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'

export const Shows = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  useEffect(()=>{
    dispatch(getMovies())
  },[])

  return (
    <div style={{width:"87.5vw", marginLeft:"12.5%", border:"2px solid red",  background:"black", height:"auto" }}>
       <Box className='Movies'>
      {
        Movies.length>0 && Movies.map((e)=>{
          return <MoviesCard  key={e.id} {...e}/>
        }  )
      }
      </Box>
    </div>
  )
}
