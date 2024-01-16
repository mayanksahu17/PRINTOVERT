import React from 'react'
import { NavLink } from 'react-router-dom'

function Product(images)
 {




    
  return (
    <div className=''>
        
      
 <NavLink to="/tshirt-designer">
<div className='bg-slate-100 h-68  w-52 rounded-3xl ml-8 hover:shadow-2xl mt-5  '> 
    <img className=' h-60 ml-2 w-48 rounded-2xl' src="http://127.0.0.1:5501/images/Full%20Sleeve%20T-Shirt.jpeg" alt="" />
    <div>
        <h3 className='text-xl font-semibold mt-2 ml-4'>Fulll Sleev T-Shirts</h3>
    </div>
    </div>
</NavLink>

    </div>
   
  )
}

export default Product