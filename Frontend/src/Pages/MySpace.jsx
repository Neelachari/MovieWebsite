import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { MoviesCard } from '../Components/MoviesCard';

export const MySpace = () => {
  const Movies = useSelector((store) => store.productReducer.movies);
  const Account_info = useSelector((store) => store.authReducer.Account_info);

  // Filter movies that match the IDs in Account_info
  const filteredMovies = Movies.filter((movie) =>
    Account_info.includes(String(movie._id))
  );

  console.log("filteredMovies", filteredMovies)

  return (
    <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"100vh"} bg={useColorModeValue('#000014', 'gray.800')}>
      <Text fontSize={"xxx-large"} color={"gray"} paddingLeft={"30%"}>Welcome User!</Text>
      {/* Render filtered movies */}
      {filteredMovies.length > 0 ? (
        <Box className='Movies'>
          {filteredMovies.map((movie) => (
            <MoviesCard key={movie.id} {...movie} />
          ))}
        
        </Box>
      ) : (
        <Text color="white" mt={4}>No movies found.</Text>
      )}
    </Box>
  );
};
