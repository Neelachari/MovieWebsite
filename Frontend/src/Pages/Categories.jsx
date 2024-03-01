import { Box, Center, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/MovieReducer/Action'
import { MoviesCard } from '../Components/MoviesCard'
import { Select } from '@chakra-ui/react'

export const Categories = () => {
  const dispatch=useDispatch()
  const Movies=useSelector((store)=> store.productReducer.movies)
  const [Data,setData]=useState([])



  useEffect(()=>{
    dispatch(getMovies())
  },[])

  const handleChnge=(value)=>{
    // console.log(value)
    if(value=="Run_Time"){
      const sortData=[...Movies]
      sortData.sort((a,b)=> a.Runtime-b.Runtime)
      setData(sortData)

    }
    else if(value=="Rating"){
      const sortData=[...Movies]
      sortData.sort((a,b)=> a.Average_Rating-b.Average_Rating)
      setData(sortData)
    }
    else if(value=="Release_Date"){
      const sortData=[...Movies]
      sortData.sort((a,b)=> a.Release_Date.Date()-b.Release_Date.Date())
      setData(sortData)
    }
    else if(value==''){
        getMovies()
    }

  }


  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"} id='mainDiv'  bg={useColorModeValue('#000014', 'gray.800')}>
      <Box w={"25%"} color={"gray"} pt={"20px"} display={"flex"} >
     <Select onChange={(e)=>handleChnge(e.target.value)}>
        <option value=''>Select</option>
        <option value='Run_Time'>Run Time</option>
        <option value='Rating'>Rating</option>
        <option value='Release_Date'>Release Date</option>
      </Select>
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
