import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Productlist from './Screens/Productlist.jsx'


const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/product/:id' element={<Productlist/>}/>
        
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing