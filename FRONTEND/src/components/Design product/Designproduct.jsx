import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
function Designproduct() {
  return (


    <div className='bg-blue-200 w-full'> 

    <div className='w-full'>
    <h2 className='font-semibold text-blue-900 text-5xl mt-10 ml-10 flex '>
         <div className='w-10 h-10 bg-blue-900 text-center text-5xl rounded-lg mr-3 mt-2'> <FaArrowRight className='text-3xl mt-2 ml-1 mb-3  text-white font-bold'/></div>
Design your product</h2>
    <div className='ml-60'>
    <h2 className=' text-black-800 text-2xl mt-20 ml-72 font-semibold '>Select the varient</h2>
    </div>
  </div> 


<div className='flex mt-10'>


</div>

<NavLink to="/tshirt-designer">
<div className='bg-slate-100 h-68  w-52 rounded-3xl ml-8 hover:shadow-2xl'> 
    <img className=' h-60 ml-2 w-48 rounded-2xl' src="http://127.0.0.1:5501/images/Full%20Sleeve%20T-Shirt.jpeg" alt="" />
    <div>
        <h3 className='text-xl font-semibold mt-2 ml-4'>Fulll Sleev T-Shirts</h3>
    </div>
    </div>
</NavLink>







</div>





  )
}

export default Designproduct