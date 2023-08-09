import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
const API ="https://dummyjson.com/products"


const Home = () => {
  
    

        const [products,Setproducts] = useState([])
        
        const fetch_data=()=>{
             console.log('fetching the products')
          Axios.get(API)
        .then(res=>{
            
            Setproducts(res.data.products)
            const allproducts = JSON.stringify(res.data.products)
localStorage.setItem('allproducts',allproducts)

})
.catch(err=>console.log(err))
}

useEffect(()=>{
 if(localStorage.allproducts){

const getdata= localStorage.getItem('allproducts')
const new_data = JSON.parse(getdata)
    Setproducts(new_data)


 }
 else{
    fetch_data()
 }
},[])
return (
    <section className='w-full items-center overflow-y-scroll justify-center flex flex-wrap h-screen bg-gray-300'>
{products && products.map(ele =>  <Card key={ele.id} productid={ele.id} title={ele.title} brand={ele.brand} thumbnail={ele.thumbnail}/>) }
</section>

        
  )
}

export default Home