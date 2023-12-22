import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionTypes"

export const getMovies = (obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://movies-data-fdb6.onrender.com/movies/movie`,obj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload :res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}