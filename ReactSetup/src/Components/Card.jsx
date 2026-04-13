// import React from "react";

// function Card(){

//     const data = [
//     {
//         image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:"Head Phones",
//         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque.",
//         instock: true
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:"Boat Speaker",
//         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque.",
//         instock:false
//     },
//     {
//         image: 'https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:"Personal Diary",
//         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque.",
//         instock:false
//     },
    

//     ]


//     return (
//         <div className=" w-full h-screen flex items-center justify-center gap-10   bg-zinc-200">
//             {data.map((elem,index)=>(
//              <div key = {index} className=" w-52 bg-zinc-100">
//                 <div className="w-full h-32 bg-zinc-300 "> 
//                     <img className="w-full h-full object-cover" 
//                     src={elem.image}
//                     alt="" 
//                     />
//                 </div>
//                 <div className="w-full px-3 py-4">
//                     <h2 className="font-semibold">{elem.name }</h2>
//                     <p className="text-xs mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque. </p>
//                         <button className={`px-4 py-1 ${elem.instock ? "bg-blue-600" : "bg-red-600"}  text-xs rounded text-zinc-100 mt-3`}>
//                             {elem.instock ? 'In Stock' : "Out Of Stock" }
//                             </button>
//                     </div>
//             </div>
//             ))}
//         </div> 
//     )
// }

// export default Card 


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
