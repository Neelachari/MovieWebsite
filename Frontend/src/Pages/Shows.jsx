import { Box, Center, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import "./Navbar.css"
import Logo from "../Imges/PLY.png"
import plyvideo from "../Imges/Home3.mp4"
import Postermovie from "../Imges/MoviePosterscreen.png"

export const Shows = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  useEffect(()=>{
    dispatch(getMovies())
  },[])

  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"} id='mainDiv'  bg={useColorModeValue('#000014', 'gray.800')}>
       <Box >
        <div id='Heading'>
        <h1 >Welocome !</h1>
        <img  src={Logo} alt="" />
        <p>We're thrilled to have you as our guest. Explore the exciting world of entertainment, discover new stories, and immerse yourself in a captivating experience. Whether you're a movie enthusiast, a gaming aficionado, or just looking for a place to unwind, we've got something special for everyone. Enjoy your stay!</p>
        <h6>Action | Fantasy | Period | Revenge</h6>
        </div>
       
        <video
          style={{ width: "100%"}}
           loop
           playsInline
           autoPlay
          muted   // Add the muted attribute to enable autoplay on mobile devices
           poster={Postermovie}
         >
           <source
            src={plyvideo}
             type="video/mp4"
           />
        </video> 
      </Box>
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
