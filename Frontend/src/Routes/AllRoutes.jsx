import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MySpace } from '../Pages/MySpace'
import { Explore } from '../Pages/Explore'
import { Home } from '../Pages/Home'
import { Shows } from '../Pages/Shows'
import { Movies } from '../Pages/Movies'
import { Categories } from '../Pages/Categories'

export const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home/>} ></Route>
        <Route path="/Login" element={<MySpace/>} ></Route>
        <Route path="/explore" element={<Explore/>} ></Route>
        <Route path="/shows" element={<Shows/>} ></Route>
        <Route path="/movies" element={<Movies/>} ></Route>
        <Route path="/categories" element={<Categories/>} ></Route>
    </Routes>
  )
}
