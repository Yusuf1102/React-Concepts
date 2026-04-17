import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav    className='mt-10 flex justify-center gap-10'>
                <NavLink className={({isActive})=>
                         isActive ? "text-red-500 font-bold":"text-gray-700" } 
                         to="/">Home</NavLink>
                <NavLink className={({isActive})=>
                         isActive ? "text-red-500 font-bold":"text-gray-700" }
                        to="/user">User</NavLink>
                <NavLink className={({isActive})=>
                         isActive ? "text-red-500 font-bold":"text-gray-700" }
                         to="/about">About</NavLink>
            </nav>
        </div>
    )
}
 
export default Nav
