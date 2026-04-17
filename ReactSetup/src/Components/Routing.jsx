import React from 'react'
import Home from './Home'
import User from './User'
import About from './About'
import { Route,Routes } from 'react-router-dom'
const Routing = () => {
  return (
    <div>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/about' element={<About/>}/>

          </Routes>
    </div>
  )
}

export default Routing
