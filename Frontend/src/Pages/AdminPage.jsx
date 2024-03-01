import { Box, Center, CircularProgress, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
// import { MoviesCard } from '../Components/MoviesCard'
import plyvideo from "../Imges/Home.mp4"
import Postermovie from "../Imges/MoviePosterscreen.png"
import "./Navbar.css"
import Logo from "../Imges/PLY.png"
import { AdminCard } from '../Components/AdminCard'

export const AdminPage = () => {
  const [data,setData]=useState([])
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  // const Users=useSelector((store)=> store.authReducer.users)
  const isLoading=useSelector((store)=> store.productReducer.isLoading)
  
  const videoId = new URL("https://www.youtube.com/embed/tABlzTH8G9o?si=frgn1yoLc3W6RwJS").searchParams.get("v");

console.log(videoId)


  useEffect(()=>{
    dispatch(getMovies())
  },[])

  console.log(Movies)
  
    return (
        <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"auto"} id='mainDiv'    bg={useColorModeValue('#000014', 'gray.800')}  >
          <Text fontSize={"xxx-large"} color={"gray"} paddingLeft={"30%"} >Total number of Movies: {Movies.length}</Text>
          {/* <Text fontSize={"xxx-large"} color={"gray"} paddingLeft={"30%"} >Number of Users: {Users.length}</Text> */}
          <Box   className='Movies'> 
         {

           isLoading ?  <Box  as="main"  minHeight="500px" w={"100%"} paddingLeft={"500px"} mt={"80px"} bg={useColorModeValue('#000014', '#000014')} ><CircularProgress isIndeterminate color='blue.300' /></Box> : Movies.length>0 && Movies?.map((e)=>{
            return <AdminCard  key={e.id} {...e}/>
          }  ) 

           
          } 
          

         {/* //Cards Render */}
        </Box> 
        </Box>
      )
}
