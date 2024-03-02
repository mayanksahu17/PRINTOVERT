import React from 'react';
import needhelp from '../../assets/needhelp.png';
import { NavLink } from 'react-router-dom';
import { TbMessageUp } from "react-icons/tb";

function Needhelp() {
  return (
    <div className='bg-blue-200 w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='font-bold text-5xl text-blue-900 mt-8'>Need Help?</h1>
        <p className='mt-4 text-xl font-semibold'>We are here to empower PRINTOVERT Merchants by delivering a delightful support experience that minimizes efforts and maximizes success.</p>
      </div>

      <div className='mt-12 text-center'>
        <div className='font-semibold'>Send us a message and we'll get back to you in a snap</div>
        <NavLink to="/contact-us">
          <button className='rounded-2xl p-2 h-10 w-40 mt-5 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2'>
            <div className='flex items-center'>
              message us <TbMessageUp className='h-6 w-6 ml-3' />
            </div>
          </button>
        </NavLink>
      </div>

      <div className='mt-12'>
        <img className='max-w-full h-auto' src={needhelp} alt="Need Help" />
      </div>
    </div>
  );
}

export default Needhelp;
