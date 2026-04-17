import React from 'react'
import Card from './Card'   

function Cards({users,handleRemove}) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
         {users.map((item,index)=>{
            return <Card user={item} key={index} id ={index} handleRemove={handleRemove}/>    
         })}
           
    </div>
  )
}

export default Cards
