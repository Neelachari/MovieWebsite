import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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

  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')} color={"white"}>
      <div id="container">
        <div id="img">
        <h1>{_id}</h1>
          {/* <img width={"20%"} src={data.Poster_Image} alt={data.title} /> */}
          <video
            style={{ width: "100%"}}
             loop
             playsInline
             autoPlay
            muted   // Add the muted attribute to enable autoplay on mobile devices
             poster={data.Poster_Image}
           >
             <source
              src={data.Trailer_URL}
               type="video/mp4"
             />
          </video> 
        </div>
        <div id="details">
          <h4>{data.Title}</h4>
          <h5><span>RunTime:</span> {data.Runtime}</h5>
          <h5><span>Release Date:</span> {data.Release_Date}</h5>
          <h5><span>Director:</span> {data.director}</h5>
          <p><span>Description:</span> {data.Description}</p>
          <button id="button" onClick={handleWatchNow}>
            WATCH NOW
          </button>
        </div>
      </div>

      <div id="movieDetails">
        <p>
          <h1>Information about {data.Title}</h1> <br />
          {data.Title} is an exciting {data.Runtime } It was released on {data.Release_Date}. {data.Description}
        </p>

        <h1>Key Cast:</h1>
        <p>{/* Add key cast members here */}</p>

        <h1>Rating:</h1>
        <p>{data.Average_Rating} <span>★</span></p>

        {/* Add more information about the movie as needed */}

        <h1>Watch Trailer:</h1>
        <p>
          <a href={data.Trailer_URL} target="_blank" rel="noopener noreferrer">
            {data.Title} Trailer
          </a>
        </p>
      </div>

      <div>
        {/* Add any additional components or sections you want, for example, a carousel of related movies */}
        {/* <RelatedMoviesCarousel /> */}
      </div>
      </Box>
  );
};


