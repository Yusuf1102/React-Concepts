import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Card() {
  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      
      <div className='relative w-60 h-32 overflow-hidden rounded-md'>
        
        {/* Slider Container */}
        <div
          className={`flex h-full transition-transform duration-500 ${
            val ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Image 1 */}
          <img
            className='min-w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1663289236676-a604d7c478f4"
            alt=""
          />

          {/* Image 2 */}
          <img
            className='min-w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1628686066166-d2ee65d07bfd"
            alt=""
          />
        </div>

        {/* Button */}
        <span
          onClick={() => setVal(!val)}
          className='w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer'
        >
          <FaArrowRight size=".7em" />
        </span>

      </div>
    </div>
  );
}

export default Card;