import React,{ useRef } from 'react'


function App() {
    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    const handleSubmit = (details)=>{
        details.preventDefault();
        console.log(name.current.value,
                    age.current.value,
                    email.current.value
        )
    }
    
    

  return (
        <form  className= "px-5 mt-10 border-solid "  action="" onSubmit={handleSubmit}>
            <input ref = {name} type="text" placeholder='name' />
            <input ref = {age}  type="text" placeholder='age' />
            <input ref = {email} type="text" placeholder='email' />
            <button>Submit</button>
        </form>
  )
}

export default App    
