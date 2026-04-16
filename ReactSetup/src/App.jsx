import React, { useState } from 'react'


function App() {
  const [val,setVal] = useState({name:"",email:""})
  const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(val); 
  }

  return (
     <div className='px-5 py-4 mt-10 border-solid'>
            <form action="" onSubmit={handleSubmit}>
                    <input onChange={(event)=> setVal({...val,name:event.target.value})} type="text" placeholder='name' />
                    <input onChange={(event)=> setVal({...val,email:event.target.value})} type="text" placeholder='email' />
                    <input type="submit" />
            </form>
     </div> 
  )
}

export default App    
