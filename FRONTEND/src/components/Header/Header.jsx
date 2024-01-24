import React from 'react'
import {Link,NavLink , useNavigate } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import LoginButton from '../button/LoginButton';
import LogoutButton from '../button/LogoutButton';
import { HiPencilAlt } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { ImPrinter } from "react-icons/im";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { logout } from '../../store/authSlice';


function Header() {
  const [open, setopen] = useState(true);
 
  const isAuthenticated = useSelector((state) => state.auth.user !== null);
 
  
  return (

    <div id='header' className={`flex flex-col bg-blue-700 h-[800px] ${open ? "w-80 ":"w-20 "} duration-500     relative   `}>
 <div className='h-[50px] w-[50px]'><IoIosArrowDropleft  className={`text-4xl font-extrabold text-white textwhite absolute -right-[1px]    ${open ? "rotate-[180deg]": "rotate-[0deg]"} top-2    bg-transparent       `}onClick={()=>setopen(!open)}/></div>
      <Link to ="">   
         <div className={`${!open ? "p-0":"p-12"}  flex `}>
      <ImPrinter className={`text-3xl text-white ${!open && "mr-3 mt-6"} `} />
        <span className="h-18 text-center font-extrabold mr-1 text-2xl cursor-pointer ml-1 text-white"> <div className={`${!open && "scale-0"}`}>PRINTOVER</div> </span>
      </div> </Link> 
   
     
      <hr className=' w-50' />
      
      <ul className="justify-center ">
      <NavLink to = "/" ><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3'> <AiOutlineHome className='mt-1 text-3xl hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Deshboad</div></li></NavLink>
 
      <NavLink to = "/design-product"> <li  className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <HiPencilAlt className='mt-1 text-3xl  hover:text-blue-800 ' /></div>  <div className={`${!open && "scale-0"}`}>Design Product</div></li></NavLink>
        
      
        <NavLink to = "/design-library"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoMdImages className='mt-1 text-3xl  hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Design Library</div></li></NavLink>
        
       
        <NavLink to = "/create-orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoIosCreate className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Create Order</div></li></NavLink>
       
        
       <NavLink to = "/orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoCartOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Orders</div><div className='px-3 ml-20'></div></li></NavLink>
        
        

        <NavLink to = "wallet"> <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold">  <div className='px-3  '> <IoWalletOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Wallet</div>  <div className='px-3 ml-20'> </div> </li> </NavLink>
        
        <Link to = "/tickets">  <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoTicketOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Ticket</div>  <div className='px-3 ml-20'></div></li></Link>
       
       

        <NavLink to = "/edit-profile"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <PiNotePencilBold className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Edit Profile</div>  </li></NavLink>
        
     
        <NavLink to = "/need-help" ><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center mt-[80px] hover:text-black hover:font-bold"> <div className='px-3  '> <FaRegQuestionCircle className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>help</div>  <div className='px-3 ml-16'> </div></li></NavLink>
      
        
        <hr />
    {    
           !isAuthenticated&&(<LoginButton open={open} />)
    }
    {
      isAuthenticated&&(<LogoutButton open={open}/>)
    }
        
      </ul>
    </div>
  )
}

export default Header