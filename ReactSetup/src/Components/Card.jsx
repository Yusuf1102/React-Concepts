import React from 'react'

function Card() {
    const data = [
        {
            name: "Mahiya Ve",
            description: "Mahiya Ve Mahiya Ve."
        },
        {
            name: "Dhurundar",
            description: "Dhurundar Dhurundar Dhurundar."
        }
    ]; 
    const handleDownload = (name) => {
        alert(`Downloading ${name}...`);
    }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4 bg-zinc-300'>
        { data.map((item,index)=>(
            <div key={index}  className='w-60 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl '>{item.name}</h3>
            <p className='text-xs mt-2'>{item.description}</p>
            <button onClick={() => handleDownload(item.name)} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
        </div>
        ))}
        
    </div>
  )
}

export default Card
