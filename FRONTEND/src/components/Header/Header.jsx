import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
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
      <ImPrinter className={`text-3xl text-white ${open && "mr-2 mt-6"} `} />
        <span className="h-18 text-center font-extrabold mr-3 text-2xl cursor-pointer p-4 text-white"> <div className={`${!open && "scale-0"}`}>PRINTOVERT</div> </span>
      </div> </Link> 
   
     
      <hr className=' w-50' />
      
      <ul className="p-2">
      <NavLink to = "/"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3'> <AiOutlineHome className='mt-1 text-3xl hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Deshboad</div></li></NavLink>
 
      <NavLink to = "/design-product"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <HiPencilAlt className='mt-1 text-3xl  hover:text-blue-800 ' /></div>  <div className={`${!open && "scale-0"}`}>Design Product</div></li></NavLink>
        
      
        <NavLink to = "/design-library"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoMdImages className='mt-1 text-3xl  hover:text-blue-800' /></div> <div className={`${!open && "scale-0"}`}>Design Library</div></li></NavLink>
        
       
        <NavLink to = "/create-orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoIosCreate className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Create Order</div></li></NavLink>
       
        
       <NavLink to = "/orders"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoCartOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Orders</div><div className='px-3 ml-20'></div></li></NavLink>
        
        

        <NavLink to = "wallet"> <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold">  <div className='px-3  '> <IoWalletOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Wallet</div>  <div className='px-3 ml-20'> </div> </li> </NavLink>
        
        <Link to = "/tickets">  <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoTicketOutline className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Ticket</div>  <div className='px-3 ml-20'></div></li></Link>
       
       

        <NavLink to = "/edit-profile"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <PiNotePencilBold className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>Edit Profile</div>  </li></NavLink>
        
     
        <NavLink to = "/need-help"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center mt-[80px] hover:text-black hover:font-bold"> <div className='px-3  '> <FaRegQuestionCircle className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>help</div>  <div className='px-3 ml-16'> </div></li></NavLink>
      
        
        <hr />
        <NavLink to = "/login"><li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center mt-1 hover:text-black hover:font-bold"> <div className='px-3  '> <MdOutlineAccountCircle className='mt-1 text-3xl' /></div> <div className={`${!open && "scale-0"}`}>login</div>  <div className='px-3 ml-16'> </div></li></NavLink>
        
      </ul>
    </div>
  )
}

export default Header