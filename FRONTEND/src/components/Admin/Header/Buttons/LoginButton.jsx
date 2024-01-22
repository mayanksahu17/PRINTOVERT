import React from 'react'
import { useEffect } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import {Link,NavLink , useNavigate } from 'react-router-dom'
function LoginButton({open}) {
 
  let char = "Login"
  useEffect(()=>{
    if (open) {
      char = ""
    }
  },[open])
   
  return (
  <NavLink to={'admin-login'}> <li  className="py-3 px-4 rounded-lg hover:bg-white 
    cursor-pointer flex text-white font-medium text-center
     mt-1 hover:text-black hover:font-bold"> 
     <div className='px-3  '> <MdOutlineAccountCircle className='mt-1 text-3xl' />
     </div> <div className={`${!open && "scale-0"}`}>{char}</div>
       <div className='px-3 ml-16'> </div></li></NavLink> 
  )
} 

export default LoginButton