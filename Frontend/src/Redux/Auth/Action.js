import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, POST_SIGN_SUCCESS } from "./ActionTypes"


//Login post request 
export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`https://movies-data-fdb6.onrender.com/users/login`,userData)
    .then((res)=>{
        dispatch({type:LOGIN_SUCCESS, paylaod: res.data.token})
        //console.log(res.data)
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE, paylaod: err.message})
    })

    

}

//Logout request
// export const logout=()=>(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     return axios.post(`https://movies-data-fdb6.onrender.com/users/logout`)
//     .then((res)=>{
//         dispatch({type:LOGOUT_SUCCESS})
//     })
// }

// Logout request
// action.js
export const logout = ()=>  (dispatch) => {
    // dispatch({ type: LOGIN_REQUEST });
     axios.post(`https://movies-data-fdb6.onrender.com/users/logout`)
        .then((res) => {
            dispatch({ type: LOGOUT_SUCCESS });
        })
        .catch((error) => {
            console.error("Logout error:", error);
            // Handle error, dispatch an error action if needed
        });
};





export const postSignup=(user)=>(dispatch)=>{
    console.log(user)
    dispatch({type:LOGIN_REQUEST})
     axios.post(`https://movies-data-fdb6.onrender.com/users/register`, user)
    .then((res)=>{
        dispatch({type:POST_SIGN_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        console.error("Signup Error:", err);
        dispatch({type: LOGIN_FAILURE, payload: err.message || "Something went wrong"})
    })
    


}