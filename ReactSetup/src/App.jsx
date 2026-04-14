import React, { useState } from 'react'

function App() {
 const [val,setVal] = useState([
    {name:"Yusuf",age:23},
    {name:"Wasib",age:24},
    {name:"Aayush",age:22}
])
  return (
    <div className='p-5'>
            {val.map((item)=>(
                <div>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                </div>
            ))}
        <button  onClick={()=>setVal(()=>
        val.map(item=>item.name==="Wasib" ? ({name:"Wasib",age:25}):item))}  className='mt-3 px-3 py-1 rounded-full text-xs text-white bg-blue-600'>Click</button>
    </div>
  )
}

export default App 
