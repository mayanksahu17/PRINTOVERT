import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <div className='bg-blue-200 w-full h-180 '>
    <div>
   <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-3xle-900 co text-4xl'>Sign In</h1>
   <p className='ml-7 mt-1'>Create Your Account </p>
   </div>
 
 
 
 <div className='h-96 w-96 ml-[30%] mt-14 bg-slate-100 rounded-2xl hover:shadow-2xl'>
 <h1 className='ml-16 font-semi-bold p-4 text-2xl'>Login to your Account</h1>
 
 <div className='flex justify-between w-[90%] mt-16 font-semi-bold '>
   <div className='ml-7 text-2xl'>Email-ID</div>
   <div className='w-[50%] flex justify-between '><input className=' rounded-lg p-2 w-[100%] h-7 ' type="text" placeholder='Enter the detail' /></div>
 </div>
 
 
 
 <div className='flex justify-between w-[90%] mt-10 font-semi-bold '>
   <div className='ml-7 text-2xl'>Password</div>
   <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[100%] h-7' type="password" placeholder='Enter the detail' /></div>
 </div>
 
 
 <div className='flex justify-end mt-16 mr-10'>
 <NavLink to ="/featrenot"><div className='w-[200px] flex justify-between'><button className='ml-0 rounded-2xl p-2 w-[350px] h-7 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 '><div className=' -mt-2'>Forgot Password</div></button></div> </NavLink>
 <NavLink to ="/signup"> <div className='w-[50%] flex justify-between'><button className='ml-10 rounded-2xl p-2 h-7 w-30   bg-white hover:bg-blue-600 hover:text-white  border-gray-600 border-2'><div className=' -mt-2'> Signin</div></button> </div>  </NavLink>
 </div>
 
 
 </div>
 
 
       
   
 
 
   
 
     </div>
  )
}

export default Login