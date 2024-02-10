import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, POST_SIGN_SUCCESS } from "./ActionTypes"

const initialState={
    users:[],
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

export const Reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {...state, isLoading:true}
        }
        case LOGIN_SUCCESS:{
            return {...state, isLoading:false, isAuth:true, token :payload , isError:false}
        }
        case POST_SIGN_SUCCESS:{
            return {...state, isError:false, isLoading:false,  users:[...state.users, payload]}
          }
        case LOGIN_FAILURE:{
            return {...state, isError:true, errorMessage:payload,isLoading:false}
        }
        default : return state
    }
}