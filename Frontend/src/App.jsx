import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import { AllRoutes } from './Routes/AllRoutes'
import Navbar2 from './Pages/Navbar2'
import { Box, Text, Alert, AlertIcon, CloseButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { SUBSCRIPTION_SUCCESS } from './Redux/Auth/ActionTypes'


function App() {
  const [showDemo, setShowDemo] = useState(true);
  const { isAuth, token, subscription } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth && token && !subscription) {
      axios.get(`https://movies-data-fdb6.onrender.com/subscription/subscription`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({ type: SUBSCRIPTION_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log('No subscription:', err);
        dispatch({ type: SUBSCRIPTION_SUCCESS, payload: null });
      });
    }
  }, [isAuth, token, subscription, dispatch]);

  return (
    <>
    {showDemo && (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
      >

      </motion.div>
    )}
    <Navbar/>
    {/* <Navbar2/> */}
    <AllRoutes/>
    
    </>
  )
}

export default App
