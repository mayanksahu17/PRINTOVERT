import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Button from '../button/Button'
import Orders from './Orders'
function Createorder() {
    return (

        <div className='bg-blue-200 w-full h-180 '>
        
        <div>     
             <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Create Orders</h1>

        <p className='ml-12 mt-1  text-gray-600 '>Place Order and Enjoy </p>
        </div>

        <div className='flex'>

          <Orders />
            
        </div>

        <div className='h-18 w-full ml-10 flex mt-60'> 
    <Button children={"Buy Product"} />
    <Button children={"Delete Product"} />
    
    
     </div>
     
        </div>

          )
}

export default Createorder