import { Box, SkeletonCircle, SkeletonText, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import './SkelitonCard.css'

export const SkelitonCard = () => {
  return (
    <Box as="main"  height="auto" w={"100%"} paddingLeft={"13%"}  bg={useColorModeValue('black', 'gray.800')} padding='6' boxShadow='lg'  mt="10px" id='Loading' >
        {/* <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> */}
      <Box>
       <SkeletonCircle size='10'  />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </Box>
  )
}
