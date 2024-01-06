import React from 'react'
import { useState } from 'react'


function Contactus() {
    const [show , setShow] = useState("password")
  return (
    <>
     <div className='bg-blue-200 w-full h-180 '>
    
    <div>
  <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-5xl text-blue-900 '>Contact Us </h1>
  
  </div>

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Name</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[45%]' type="text" placeholder='Enter the detail' />
   <input className=' rounded-lg  p-2  w-[45%]' type="text" placeholder='Enter the detail' /></div>
</div>

<hr className='mt-10' />

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Email-ID</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[45%]' type="text" placeholder='Enter the detail' />
   </div>
</div>

<hr className='mt-10' />

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Phone Number</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[100%]' type="text" placeholder='Enter the detail' /></div>
</div>
<hr className='mt-10' />




<div className='flex   w-[90%] mt-6 font-bold '>
 
  <button className='rounded-2xl w-32 bg-blue-600 text-white h-10 ml-10  hover:bg-white hover:text-black'>Send Message</button>
  </div>







  </div>

</>
  )
}

export default Contactus