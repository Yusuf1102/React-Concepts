import React from 'react'

function Card({values,handleClick,index}) {
  const {image,name,profession,friends} = values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-sky-200 '>
            <img className='w-full h-full object-cover object-[center_  top] ' src={image} alt="" />
           </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-xs'>{profession}</h5>
            <button onClick={()=>handleClick(index)} className='px-3 py-1 mt-4 text-xs text-white bg-blue-500 
               font-semibold rounded-md'>{friends ? "Friends" : "Add Friends "}</button>
        </div>
    </div>
  )
}

export default Card
