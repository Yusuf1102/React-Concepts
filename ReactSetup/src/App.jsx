import React, { useState } from 'react'

function App() {
 const [val,setVal] = useState([1,2,3,4,5,6])
  return (
    <div className='p-5'>
        {val.map(item=><h1>{item}</h1>)}
        <button  onClick={()=>setVal(()=>
        val.filter(item=>item%2!==0))}  className='mt-3 px-3 py-1 rounded-full text-xs text-white bg-blue-600'>Click</button>
    </div>
  )
}

export default App 
