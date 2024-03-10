import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import {Link,NavLink , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice.js';
import { useEffect } from 'react';


function LogoutButton({open}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClick = ()=>{
        dispatch(logout());
        localStorage.setItem("accessToken" , "")
        localStorage.setItem("refreshToken" , "")
        navigate("/login")
    }
    
    let char = "Logout"
    useEffect(()=>{
      if (open) {
        
        char = ""
      }
    },[open])


  return (
   <li onClick={handleClick} className="py-3 px-4 rounded-lg hover:bg-white 
    cursor-pointer flex text-white font-medium text-center
     mt-1 hover:text-black hover:font-bold"> 
     <div className='px-3  '> <MdOutlineAccountCircle className='mt-1 text-3xl' />
     </div> <div className={`${!open && "scale-0"}`}>{char}</div>
       <div className='px-3 ml-16'> </div></li>
  )
}

export default LogoutButton