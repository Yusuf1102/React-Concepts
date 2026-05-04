import React from 'react'
import { useState,useEffect } from 'react'
import axios from '../utils/axios'
const Show = () => {
    const [products , setproducts] = useState([])

    const getProducts = () => {
        const api = "/products";
        axios
          .get(api)
          .then((products) => {

           //console.log(products.data);
            setproducts(products.data)
          })
          .catch((err) => {
            console.log(err);
          });
    };

    useEffect(()=>{
        getProducts()
    },[])




  return (
    <>
        <ul>
            {products.length > 0 ?(
                products.map((p)=>(
                    <li key ={p.id} className='rounded mb-2 p-5 bg-red-200 '>
                        {p.title}
                    </li>
                ))
            ):(
                <h1>Loading...</h1>
            )}
        </ul>

    
    </>
    
  )
}

export default Show

