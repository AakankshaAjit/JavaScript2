import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Productlist = () => {
    const [Product, Setproduct] = useState({});

  const { id } = useParams();

  const fetch_data = () => {
    if (localStorage.allproducts) {
      const my_data = JSON.parse(localStorage.getItem("allproducts"));

      Setproduct(my_data[id - 1]);
    } else {
      alert("You dont have any products");
    }
  };
  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="flex bg-white overflow-hidden shadow-xl rounded-2xl border-2 border-blue-500 w-4/9 h-3/9">
        <img
          className="w-2/5   object-cover h-full"
          src={Product.thumbnail}
          alt=""
        />

        <div className="flex gap-5 flex-col pt-5 w-1/2 ml-5 ">
          <span className="text-2xl font-bold text-gray-700">
            {Product.title}

            <span className="text-sm ml-5 text-gray-700">
              ({Product.brand})
            </span>
          </span>

          <span>{Product.description}.</span>
          <span className=" text-gray-700">${Product.price}</span>
          <span className=" text-red-500 px-2 py-1  bg-red-100 w-44 rounded-2xl">
            {" "}
            Discount ${Product.discountPercentage}{" "}
          </span>
          <span className=" text-yellow-500 px-2 py-1  bg-yellow-100 w-44 rounded-2xl">
            {" "}
            Ratings ${Product.rating}{" "}
          </span>
          
        </div>
      </div>
    </section>
    
  )
}

export default Productlist