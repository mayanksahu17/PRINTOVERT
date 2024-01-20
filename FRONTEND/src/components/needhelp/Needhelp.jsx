import React from 'react'
import needhelp from '../../assets/needhelp.png'
import { NavLink } from 'react-router-dom'
import { TbMessageUp } from "react-icons/tb";



function Needhelp() {
    return (
        <div className='bg-blue-200 w-full h-[800px] '>
      <div className='mt-8 ml-8'>
    
     <h1 className='font-bold mt-7 ml-  text-blufont-cerebriSans text-blue-900 co text-5xl'>Need Help ?</h1>
     <br/>
     <p className='ml-12 mt-1 text-2xl font-semibold'>We are here to empower PRINTOVERT Merchants <br /> by delivering a delightful support experience   <br />that minimizes efforts and maximes succes. </p>
     </div>

  <div className='ml-28 mt-28'>
      <div className='font-semibold'>Send us a message and well get back <br /> to you in a snap</div>
      <NavLink to = "/contact-us">
      <button className=' rounded-2xl p-2 h-10 w-40 mt-5  bg-white hover:bg-blue-600 hover:text-white  border-gray-600 border-2'><div className=' flex ml-3 -mt-[2px] font-semibold '>message us <TbMessageUp  className='flex h-6 w-6 ml-3 '/> 
</div></button>
      </NavLink>
      
  </div>
  
  <div className='h-96 w-80 ml-[50%] -mt-40 ml-7'>
      <img className='' src={needhelp} alt="" />
  </div>
  
   
      </div>
    )
}

export default Needhelp