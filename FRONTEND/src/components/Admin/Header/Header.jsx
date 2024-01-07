import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { ImPrinter } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';

function Header() {
const [open, setopen]=useState(true);
  return (
    <div id='header' className={`flex flex-col bg-blue-700 h-[800px] ${open ? "w-80 ":"w-20 "} duration-500  relative `}>
 <div className='h-[10px] w-[10px]'><FaArrowRight className={`text-black absolute -right-[20px]   bg-white ${open ? "rotate-[180deg]": "rotate-[0deg]"} top-5  h-7 w-7 cursor-pointer border-solid border-2 border-black opacity-[0.8] rounded-full p-1 `}onClick={()=>setopen(!open)}/></div>
      <Link to ="">   
         <div className={`${!open ? "p-0":"p-8"}  flex`}>
      <ImPrinter className={`text-3xl text-white ${open && "mr-0 mt-6"} `} />
        <span className="h-18 text-center font-extrabold mr-3 text-2xl cursor-pointer p-4 text-white"> <div className={`${!open && "scale-0"}`}>ADMIN</div> </span>
      </div> </Link> 
   
     
      <hr className=' w-50' />
      
      <ul className="p-2">
      <NavLink to = ""><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3'> <AiOutlineHome className='mt-1 text-3xl hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Dashboard</div></li></NavLink>

      <NavLink to = "orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3'> <FaCartArrowDown  className='mt-1 text-3xl hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Orders</div></li></NavLink>
 
      <NavLink to = "active-orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <HiPencilAlt className='mt-1 text-3xl  hover:text-blue-800 ' /></div>  <div className={`${!open && "scale-0"}`}>Active Orders</div></li></NavLink>
        
      
        <NavLink to = "delivered"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <GrDeliver className='mt-1 text-3xl  hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>delivered</div></li></NavLink>
        
       
        <NavLink to = "wallet-request"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <FaRupeeSign  className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Wallet request</div></li></NavLink>
       
      
      </ul>
    </div>
  )
}

export default Header