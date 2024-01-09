import React, { useEffect } from 'react'
import { useState } from 'react'
function Signup() {
    
const [show , setShow] = useState("password")



    
      return (
        
        <div className='bg-blue-200 h-180  '>
    
        <div>
      <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-5xl text-blue-900 '>Signup </h1>
      
      </div>
    
    <div className='flex justify-between w-[1300px] mt-16 font-semibold '>
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
    
    <div className='flex justify-between w-[90%] mt-16 font-semibold '>
      <div className='ml-7 text-xl'>Password</div>
      <div className='w-[80%] flex justify-between'>
        
       <input className=' rounded-lg  p-2  w-[45%] mr-5' type={show} placeholder='Enter new password' />
       <input className=' rounded-lg  p-2  w-[45%]' type={show} placeholder='Confirm Password' /></div>
    </div>
    
    <hr className='mt-10' />
    
    
    <div className='flex w-full ml-[77%] mt-3'  >
      <input  className='mr-2 w-3 h-6'  type="checkbox" onClick={()=>{if(show ==="password") { setShow("text") }else{ setShow("password")  } }} />
      <p>Show Password</p>
    </div>
    
    
    <div className='flex   w-[90%] mt-6 font-bold '>
     
      <button className='rounded-2xl w-28 bg-blue-600 h-10 ml-10 hover:text-blue-500 hover:bg-white'>Sign in</button>
      </div>
    
    
    
    
    
    
    
      </div>
      )
    }
    
    


export default Signup