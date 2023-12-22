
import { Box, Center, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import "./Navbar.css"

export const Home = () => {
  const [data,setData]=useState([])
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  useEffect(()=>{
    dispatch(getMovies())
  },[])


  console.log(Movies)


  return (
    <div style={{width:"87.5vw", marginLeft:"12.5%", border:"2px solid red",  background:"black", height:"auto" }}>
      <Box>
        {/* <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7989/1637989-i-68bafcfb1139" alt="" /> */}
        {/*  */}
       <video width="100%" height="400" controls autoPlay muted>
       <iframe
        src="https://www.youtube.com/embed/9ix7TUGVYIo?si=_sThYHaKH7RLyRJw/embed/VIDEO_ID?autoplay=1"
        width="100%"
        height="400"
        title="External Content"
        allowFullScreen
      ></iframe>
      Your browser does not support the video tag.
    </video>
      </Box>
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
