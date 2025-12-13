import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import SubscriptionModal from './SubscriptionModal'

export const PrivateRoute = ({children}) => {
   const auth=useSelector((store)=>store.authReducer.isAuth)
   const subscription=useSelector((store)=>store.authReducer.subscription)
   const location=useLocation()
   const navigate = useNavigate()

   console.log(location)

   if (!auth) {
     return <Navigate state={location.pathname} to={'/Login'}/>
   }

   // Check if subscription exists and is active
   const isSubscribed = subscription && subscription.active && new Date(subscription.endDate) > new Date();

   if (!isSubscribed) {
     return <SubscriptionModal isOpen={true} redirectTo={location.pathname} onClose={() => navigate('/Login')} />
   }

   return children
}
