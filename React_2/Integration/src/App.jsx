import React from 'react'
import Home from './Components/Home'
import Show from './Components/Show'
import Service from './Components/Service'
import { Link, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div className='pt-[5%] pl-[5%]'>
          <nav className='flex justify-center gap-10'>
            <Link to="/">Home</Link>
            <Link to="/show">Show</Link>
            <Link to="/service">Services</Link>
          </nav>

          <hr />

          <Routes>
              <Route path="/" element ={<Home/>}></Route>
              <Route path="/show" element = {<Show/>}></Route>
              <Route path="/service" element ={<Service/>}></Route>
          </Routes>
    </div>
  )
}

export default App
