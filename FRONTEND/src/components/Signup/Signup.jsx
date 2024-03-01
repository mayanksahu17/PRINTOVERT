import React, { useState } from 'react';
import { registerUser } from '../../actions/auth';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
  const [show, setShow] = useState('password');
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const onSubmit = async (data) => {
    if (!(data.firstName && data.password && data.phoneNumber && data.username)) {
      setError("All feilds are required ")
    }else{
      const  uploadata = {
        fullName :`${data.firstName}`,
        email : data.email ,
        username : data.username ,
        password : data.password,
        phoneNumber : data.phoneNumber
      }
      console.log(uploadata);
        
    try {
    
      await registerUser(uploadata);
      setError("")
      navigate('/login');

    } catch (error) {
     
      console.error('Registration failed:', error);
    }
    console.log(uploadata);
  };
    }
   
 
 

  return (
    <div className='bg-blue-200 w-full h-180 '>
    <div>
      <h1 className='font-bold mt-8 ml-8 text-blufont-cerebriSans text-blue-900 co text-5xl'>Sign Up</h1>
      <p className='ml-12 mt-1'>Create Your Account </p>
    </div>
  
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='h-[560px] w-96 ml-[30%] mt-6 bg-slate-100 rounded-2xl hover:shadow-2xl'>
        <h1 className='ml-16 font-semi-bold p-4 text-2xl'>Create your Account</h1>
        {error && <div className='text-red-500 ml-28 '>{error}</div>}
        <div className='flex justify-between w-[90%] mt-12 font-semi-bold '>
          <div className='ml-7 text-xl'>Full Name</div>
          <div className='w-[50%] flex justify-between '>
            <input
              {...register('firstName')} // React Hook Form register for fullName
              className='rounded-lg p-2 w-[100%] h-7'
              type='text'
              placeholder='Enter your full name'
            />
          </div>
        </div>
  
        <div className='flex justify-between w-[90%] mt-10 font-semi-bold '>
          <div className='ml-7 text-xl'>Email</div>
          <div className='w-[50%] flex justify-between '>
            <input
              {...register('email')} // React Hook Form register for email
              className='rounded-lg p-2 w-[100%] h-7'
              type='text'
              placeholder='Enter your email'
            />
          </div>
        </div>
  
        <div className='flex justify-between w-[90%] mt-10 font-semi-bold '>
          <div className='ml-7 text-xl'>Username</div>
          <div className='w-[50%] flex justify-between '>
            <input
              {...register('username')} // React Hook Form register for username
              className='rounded-lg p-2 w-[100%] h-7'
              type='text'
              placeholder='Enter your username'
            />
          </div>
        </div>
  
        <div className='flex justify-between w-[90%] mt-10 font-semi-bold '>
          <div className='ml-7 text-xl'>Password</div>
          <div className='w-[50%] flex justify-between'>
            <input
              {...register('password')} // React Hook Form register for password
              className='rounded-lg p-2 w-[100%] h-7'
              type='password'
              placeholder='Enter your password'
            />
          </div>
        </div>
  
        <div className='flex justify-between w-[90%] mt-10 font-semi-bold '>
          <div className='ml-7 text-xl'>Phone Number</div>
          <div className='w-[50%] flex justify-between '>
            <input
              {...register('phoneNumber')} // React Hook Form register for phoneNumber
              className='rounded-lg p-2 w-[100%] h-7'
              type='number'
              placeholder='Enter your phone number'
            />
          </div>
        </div>
  
      
  
        <div className='flex justify-end mt-12 mr-10'>
          <NavLink to='/login'>
            <div className='flex justify-between mr-10 '>
              <span>
                Don't have any account{' '}
                <span className='ml-0 text-blue-500 underline'>
                  <div className='-mt-1 text-'>Sign In</div>
                </span>
              </span>
            </div>
          </NavLink>
  
          <button type='submit' className='ml-3 rounded-2xl p-2 w-[100px] h-9 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 '>
            <div className=' -mt-1'>Sign Up </div>
          </button>
        </div>
      </div>
    </form>
  </div>
  
 );
}

export default Signup;
