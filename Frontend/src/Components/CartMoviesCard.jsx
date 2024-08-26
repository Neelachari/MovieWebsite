import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './MoviesCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovieCard } from '../Redux/Auth/Action'
import { getMovies } from '../Redux/MovieReducer/Action'


export const CartMoviesCard = ({_id,Average_Rating,Description,Poster_Image,Release_Date,Runtime,Title,Trailer_URL}) => {
    const Account_info = useSelector((store) => store.authReducer.Account_info)
    const dispatch = useDispatch();


   const handleRemove=()=>{
    const updatedAccountInfo = Account_info.filter((movieId) => movieId !== _id);

    // Dispatch the action to update the Redux store
    dispatch(deleteMovieCard(_id));
   

   }

    return (
        <Box className='movie_Card' key={_id}>
            <img width={"100%"} height={"100px"}  className="zoom-image" src={Poster_Image} alt="" />
          <Box className='details'>
              <h4 >{Title}</h4>
              <p >RunTime:{Runtime}</p>
              <p >{Description}</p>
              <div id='moviebtn'>
              <Link to={`/movie/${_id}`}>
               <Button  colorScheme='gray'   >
        Watch 
      </Button></Link>
      <Button  colorScheme='gray' onClick={handleRemove}   >
    Remove
  </Button>
              </div>
             
          </Box>
        </Box>
      )
}
