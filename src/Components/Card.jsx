import React from 'react'
import { Link } from 'react-router-dom'


  
    const Card = ({title="This is title",productid, price="4000" ,brand="apple",thumbnail="https://images.unsplash.com/photo-1682686581484-a220483e6291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"}) => {

    return (


  

    
        <Link to={`/product/${productid}`} className='w-96 h-72  my-5 mx-4 bg-white rounded-2xl shadow-lg   '>
            <img className='h-32 w-full object-cover  mt-1' src={thumbnail} alt="" />
        <span className="flex font-bold text-lg ml-5" >{title}</span>
<span className="flex uppercase   text-sm ml-5" >{brand}</span>
<span className="flex  ml-5" > ${price}</span>

            
        </Link>

        

        
  )
}

export default Card