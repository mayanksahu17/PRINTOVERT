import React from 'react'
import Help from '../../assets/Help.svg'
import { NavLink } from 'react-router-dom'
function Needhelp() {
    return (
        <div className='bg-blue-200 w-full h-180 '>
      <div className='mt-40 ml-20'>
     <h1 className=' font-bold mt-8 ml-7  mb-5 text-blufont-cerebriSans text-3xle-900 co text-4xl'>Need Help ?</h1>
     <br/>
     <p className='ml-7 mt-1 text-2xl font-semibold'>We are here to empower PRINTOVERT Merchants <br /> by delivering a delightful support experience   <br />that minimizes efforts and maximes succes. </p>
     </div>

  <div className='ml-28 mt-40'>
      <div className='font-semibold'>Send us a message and well get back <br /> to you in a snap</div>
      <NavLink to = "/contact-us">
      <button className=' rounded-2xl p-2 h-10 w-40 mt-5  bg-white hover:bg-blue-600 hover:text-white  border-gray-600 border-2'><div className=' -mt-2 font-semibold'>Message Us</div></button>
      </NavLink>
      
  </div>
  
  <div className='h-96 w-80 ml-[50%] -mt-40'>
      <img src={Help} alt="" />
  </div>
  
   
      </div>
    )
}

export default Needhelp