import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
const Service = () => {

    const [users, setusers] = useState([])
   

    const getuser = ()=>{
          const api = "/users";
        axios
          .get(api)
          .then((users) => {

           console.log(users.data);
            setusers(users.data)
          })
          .catch((err) => {
            console.log(err);
          });
    };

    useEffect(()=>{
        getuser()
    },[])

    
    // useEffect(()=>{

    //     console.log("Service Component is created:");

    //     return ()=>{
    //         console.log("Service Component is deleted");
    //     }
    // },[second])

  return (
    
      /* <h1>Services</h1>

      <h2>{first}</h2>
      <button onClick={()=>setFirst("Normal data has been changed")} className='rounded mb-10 bg-red-100 p-2 '>Change Normal data</button>

      <h2>{second}</h2>
      <button onClick={()=>setSecond("Large Data has been changed")} className='rounded mb-10 bg-blue-100 p-2 '>Change large data</button> */
        <ul>
            {users.length > 0 ? (
                users.map((u)=>(
                     <li key ={u.id} className='rounded mb-2 p-5 bg-red-200 '>
                        {u.username}
                       
                    </li>
                    
                ))
            ):(
                <h1>Loading ...</h1>
            )}
        </ul>
    
  )

}
export default Service
