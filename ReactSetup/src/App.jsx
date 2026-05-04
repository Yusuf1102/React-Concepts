import React from "react";
import axios from "axios";

const App = () => {
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return 
    <div className="pt-[5%] pl-[5%]">
          <button className="px-5 rounded py-2 bg-red-300">
              Call Product API
          </button>
    </div>;
};

export default App;
