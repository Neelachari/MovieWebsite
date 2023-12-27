
import { Box, Center, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import "./Navbar.css"

export const Home = () => {
  const [data,setData]=useState([])
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  
  const videoId = new URL("https://www.youtube.com/embed/tABlzTH8G9o?si=frgn1yoLc3W6RwJS").searchParams.get("v");

console.log(videoId)


  useEffect(()=>{
    dispatch(getMovies())
  },[])

  console.log(Movies)


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')} >
       <Box   >

            <video
          style={{ width: "100%"}}
           loop
           playsInline
           autoPlay
          muted   // Add the muted attribute to enable autoplay on mobile devices
           poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
         >
           <source
            src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
             type="video/mp4"
           />
        </video> 
       
      
    

      </Box>
         <Box   className='Movies'> 
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
