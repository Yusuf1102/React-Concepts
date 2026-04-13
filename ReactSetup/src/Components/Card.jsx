import React from "react";

function Card(){

    const data = [
    {
        image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:"Head Phones",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque."
    },
    {
        image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:"Boat Speaker",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque."
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:"Personal Diary",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque."
    },
    

    ]


    return (
        <div className=" w-full h-screen flex items-center justify-center gap-10   bg-zinc-200">
            {data.map((elem,index)=>(
             <div key = {index} className=" w-52 bg-zinc-100">
                <div className="w-full h-32 bg-zinc-300 ">
                    <img className="w-full h-full object-cover" 
                    src={elem.image}
                    alt="" 
                    />
                </div>
                <div className="w-full px-3 py-4">
                    <h2 className="font-semibold">{elem.name }</h2>
                    <p className="text-xs mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque. </p>
                </div>
            </div>
            ))}
        </div> 
    )
}

export default Card 