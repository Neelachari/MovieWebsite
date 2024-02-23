import { Badge, Box, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./MovieSinglePage.css"

// export const MovieSinglePage = () => {
//     const { _id } = useParams();
//     const movies=useSelector((store)=> store.productReducer.movies)

//     console.log(movies)

//   return (
//     <div>
//         <h1>{_id}</h1>
//     </div>
//   )
// }




export const MovieSinglePage = () => {
    const { _id } = useParams();
       const movies=useSelector((store)=> store.productReducer.movies)
    
        //  console.log(movies)

        //  useEffect(() => {
            const data = movies.find((el) => el._id === _id);
            // console.log(data)
           
        //   }, [_id, movies]);
          console.log(data)

          const handleWatchNow=()=>{
            
          }

          const handleMySpace=()=>{

          }

  return (
    <Box as="main"  height="auto" w={"98.5vw"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')} color={"white"}>
      <div id="container">
        <div id="img">
          <iframe width="100%" height="600" src={data.Trailer_URL} autoplay frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        <div id="details" p={{ base: 4, md: 8 }} >
          <h4>{data.Title}</h4>
          <h5><span>RunTime:</span> {data.Runtime}</h5>
          <h5><span>Release Date:</span> {data.Release_Date}</h5>
          <h5><span>Rating:</span><Badge variant='solid' colorScheme='yellow' id="Star">
        {data.Average_Rating} <span>★</span> 
  </Badge> </h5>
          <p><span>Description:</span> {data.Description}</p>
          <button id="button" onClick={handleMySpace}>
            Add to My Space
          </button>
        </div>
      </div>

      <div id="movieDetails" p={{ base: 4, md: 8 }} >
        <p>
          <h1>Information about {data.Title}</h1> <br />
          {data.Title} is an exciting {data.Runtime } It was released on {data.Release_Date}. {data.Description}
        </p>
      </div>

      <div>
      </div>
      </Box>
  );
};

{/* <Box as="main" height="auto" w={{ base: "100%", md: "75%", xl: "50%" }} mx="auto" bg={useColorModeValue('black', 'gray.800')} color="white">
  <div id="container">
    <div id="img">
      <iframe width="100%" height="600" src={data.Trailer_URL} autoPlay frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div id="details" p={{ base: 4, md: 8 }}>
      <h4>{data.Title}</h4>
      <h5><span>RunTime:</span> {data.Runtime}</h5>
      <h5><span>Release Date:</span> {data.Release_Date}</h5>
      <h5><span>Rating:</span><Badge variant='solid' colorScheme='yellow' id="Star">
        {data.Average_Rating} <span>★</span>
      </Badge> </h5>
      <p><span>Description:</span> {data.Description}</p>
      <button id="button" onClick={handleMySpace}>
        ADD FEV
      </button>
    </div>
  </div>

  <div id="movieDetails" >
    <p>
      <h1>Information about {data.Title}</h1> <br />
      {data.Title} is an exciting {data.Runtime} It was released on {data.Release_Date}. {data.Description}
    </p>
  </div>
</Box> */}

