import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Text, useColorModeValue, VStack, Heading, SimpleGrid } from '@chakra-ui/react';
import { CartMoviesCard } from '../Components/CartMoviesCard';

export const MySpace = () => {
  const Movies = useSelector((store) => store.productReducer.movies);
  const Account_info = useSelector((store) => store.authReducer.Account_info);
  const Name = useSelector((store) => store.authReducer.Name);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (isAuth && Account_info) {
      const movies = Movies.filter((movie) =>
        Account_info.includes(movie._id)
      );
      setFilteredMovies(movies);
    }
  }, [Movies, Account_info, isAuth]);

  if (!isAuth) {
    return (
      <Box as="main" w={"98.5vw"} paddingLeft={"13%"} minHeight={"100vh"} bg={useColorModeValue('#000014', 'gray.800')} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={6} textAlign="center">
          <Heading size="xl" color="white">Please Login to Access My Space</Heading>
          <Text fontSize="lg" color="gray.300">Your personal movie collection awaits!</Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
            <Text fontSize="large" color="gray.300">
              Don't have an account? <a style={{color:"blue", textDecoration: 'underline'}} href='/SignUp'>Sign up here</a>
            </Text>
            <Text fontSize="large" color="gray.300">
              Already have an account? <a style={{color:"blue", textDecoration: 'underline'}} href='/Login'>Login here</a>
            </Text>
          </Flex>
        </VStack>
      </Box>
    );
  }

  return (
    <Box as="main" w={"98.5vw"} paddingLeft={"13%"} minHeight={"100vh"} bg={useColorModeValue('#000014', 'gray.800')} p={6}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" color="white" textAlign="center">
          Welcome back, {Name || "User"}!
        </Heading>
        <Text fontSize="lg" color="gray.300" textAlign="center">
          Your Favorite Movies Collection
        </Text>
        
        {filteredMovies.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredMovies.map((movie) => (
              <CartMoviesCard key={movie._id} {...movie} />
            ))}
          </SimpleGrid>
        ) : (
          <VStack spacing={4} textAlign="center" py={12}>
            <Text fontSize="xl" color="gray.400">No favorite movies yet</Text>
            <Text fontSize="md" color="gray.500">Start exploring and add movies to your collection!</Text>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};
