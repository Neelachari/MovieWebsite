import { Box } from '@chakra-ui/react'
import React from 'react'


export const MoviesCard = ({id,Average_Rating,Description,Poster_Image,Release_Date,Runtime,Title,Trailer_URL}) => {
  return (
    <Box className='movie_Card'>
        <img width={"100%"} height={"100px"}  className="zoom-image" src={Poster_Image} alt="" />
      {/* <Box className='details'>
          <p style={{color:"white", textAlign:"center"}}>{Title}</p>
          <p style={{color:"white", textAlign:"center"}}>{Release_Date}</p>
          <p style={{color:"white", textAlign:"center"}}>{Runtime}</p>
          <p style={{color:"white", textAlign:"center"}}>{Description}</p>
      </Box> */}
    </Box>
  )
}
