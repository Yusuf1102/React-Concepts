import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
   const {name} = useParams()
   const navigate = useNavigate()

   const GoBackHandler=()=>{
      navigate("/user");
   };
  return (
    <div className=' w-1/2 m-auto mt-10'>
            <h1 className='text-red-200 text-5xl mb-2' >User Details</h1>

            <h1 className='text-2xl mt-3    '>Hii! {name}</h1>
            <button onClick={GoBackHandler} className='mt-5 px-3 py-2 bg-red-600 text-white '>Go Back</button>
        </div>
  )
}

export default UserDetail
