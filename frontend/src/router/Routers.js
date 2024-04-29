import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Home'
import TourDetails from '../pages/Home'
import Login from '../pages/Home'
import Register from '../pages/Home'
import SearchResultList from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tour/search' element={<SearchResultList/>}/>
    </Routes>
  )
}

export default Routers