import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, POST_SIGN_SUCCESS, SUBSCRIPTION_SUCCESS } from "./ActionTypes"
import { DELETE_PRODUCT_SUCCESS } from "../MovieReducer/ActionTypes"


//Login post request 
export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`https://movies-data-fdb6.onrender.com/users/login`,userData)
    .then((res)=>{
        localStorage.setItem('accessToken', res.data.token);
        dispatch({type:LOGIN_SUCCESS, payload: res.data.token, Name:res.data.Name, UserId:res.data.UserId, Account_info:res.data.Account_info})
        
        console.log(res.data)
        // Fetch subscription after login
        const token = res.data.token;
        axios.get(`https://movies-data-fdb6.onrender.com/subscription/subscription`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(subRes => {
            dispatch({type: SUBSCRIPTION_SUCCESS, payload: subRes.data});
        })
        .catch(err => {
            console.log('No subscription or error:', err);
            dispatch({type: SUBSCRIPTION_SUCCESS, payload: null});
        });
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE, payload: err.message})
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
export const logout = () => (dispatch) => {
    localStorage.removeItem('accessToken');
    dispatch({ type: LOGOUT_SUCCESS });
};
// export const logout = (token) => (dispatch) => {
//     return axios
//       .post(
//         "https://movies-data-fdb6.onrender.com/users/logout",
//         {},
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       )
//       .then((res) => {
//         dispatch({ type: LOGOUT_SUCCESS });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         // Handle error, dispatch an error action if needed
//       });
//   };
  




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

export const deleteMovieCard = (_id) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    axios
        .delete(`https://movies-data-fdb6.onrender.com/users/movie/${_id}/remove-from-my-space`)
        .then((res) => {
            console.log(res);
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: _id });
        })
        .catch((err) => {
            console.error(err);
            dispatch({ type: LOGIN_FAILURE, payload: err.message });
        });
};
