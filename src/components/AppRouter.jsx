import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Works from '../pages/Works'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="works" element={<Works/>}/>
    </Routes>
  )
}

export default AppRouter