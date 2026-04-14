import React, { useState } from 'react'

function App(){

    const [val,setVal]= useState({name:"Yusuf", isBanned: false});

  return(
    <div className='p-4'>
        <h1>name : {val.name}</h1>
        <h2>Banned: {val.isBanned.toString()}</h2>
        <button onClick={()=>setVal({...val,  isBanned : !val.isBanned})} className='px-3 py-1 bg-blue-500 rounded-full text-white'>Change</button>

    </div>
  )
}

export default App;