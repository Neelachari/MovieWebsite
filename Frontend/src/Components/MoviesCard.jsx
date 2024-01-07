import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import './MoviesCard.css'

export const MoviesCard = ({id,Average_Rating,Description,Poster_Image,Release_Date,Runtime,Title,Trailer_URL}) => {
  return (
    <Box className='movie_Card'>
        <img width={"100%"} height={"100px"}  className="zoom-image" src={Poster_Image} alt="" />
      <Box className='details'>
          <h4 >{Title}</h4>
          <p >RunTime{Runtime}</p>
          <p >{Description}</p>
          <Button colorScheme='blue' variant='outline' >
    Watch Now
  </Button>
      </Box>
    </Box>
  )
}
