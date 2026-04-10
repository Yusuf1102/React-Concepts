import React from "react";

function Card(){
    return (
        <div className=" w-full h-screen bg-zinc-200">
            <div className=" w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hiddden">
                <div className="w-full h-32 bg-zinc-300 ">
                    <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="w-full px-3 py-4">
                    <h2 className="font-semibold">Amazon Basics</h2>
                    <p className="text-xs mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem fugit autem voluptatem? Repellat perferendis molestiae nostrum sed, modi cum cupiditate. In porro, accusamus sint soluta tenetur quisquam a atque. </p>
                </div>
            </div>
        </div>
    )
}

export default Card 