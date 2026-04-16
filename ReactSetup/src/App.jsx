import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {
    const data = [
        {  
            image:"https://c.saavncdn.com/984/Dhurandhar-Title-Track-From-Dhurandhar-Hindi-2025-20251203114226-500x500.jpg",
            name:"Dhurandhar Title Track",
            artist:"Shashwat Sachdev",
            added:false
        },
        {  
            image:"https://c.saavncdn.com/984/Dhurandhar-Title-Track-From-Dhurandhar-Hindi-2025-20251203114226-500x500.jpg",
            name:"Gehra Hua",
            artist:"Arijit Singh",
            added:false
        },
        {  
            image:"https://c.saavncdn.com/984/Dhurandhar-Title-Track-From-Dhurandhar-Hindi-2025-20251203114226-500x500.jpg",
            name:"Ishq Ishq",
            artist:"Sonu Nigam",
            added:false
        },
        {  
            image:"https://c.saavncdn.com/984/Dhurandhar-Title-Track-From-Dhurandhar-Hindi-2025-20251203114226-500x500.jpg",
            name:"Nazar Nazar",
            artist:"Jasmine Sandalas",
            added:false
        }
    ]
     const [songData, setSongData] =  useState(data)
        const handleClick = (index)=>{
            setSongData((prev)=>{
                return prev.map((item,itemIndex)=>{
                        if(itemIndex===index){
                            return {...item, added:!item.added}
                        }
                        return item;
                })
            })
        }

  return (
    <>
    <div className="w-full h-screen bg-zinc-300 ">
        <Navbar data = {songData}/> 
        <div className='px-20 flex gap-10 mt-10 flex-wrap'>
                {songData.map((obj,index)=>(
                    <Card data = {obj} handleClick={handleClick} index = {index} key = {index}/>
            ))}           
        </div>
    </div>
    </>
  )
}

export default App 
