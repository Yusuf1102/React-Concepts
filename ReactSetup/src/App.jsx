import React, { useState } from 'react'
import Card from './Components/Card'

function App() {
    const data = [

          {   name: "Yusuf",
              profession: "Full Stack Developer",
              image: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               friends: false
          },
          {   name: "Wasib",
              profession: "Doctor",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               friends: false
          },
          {   name: "Sahil",
              profession: "Lawyer",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              friends: false
          },
          {   name: "Neet",
              profession: "Software Engineer",
              image: "https://images.unsplash.com/photo-1600080695930-6af670ad44fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               friends: false
          }
    ]
  const [realdata,setRealData]  = useState(data) 
  const handleFriendsButton = (cardIndex)=>{
            setRealData((previous)=>{
                    return previous.map((item,index)=>{
                            if(index==cardIndex){
                                return {...item, friends: !item.friends}
                            }
                            return item;
                    })
            })
  }
  
  return (
    <>
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realdata.map((item,index)=>(
            <Card key= {index} index={index} handleClick = {handleFriendsButton} values = {item} />  
        ))}
    </div>
    </>
  )
}

export default App 
