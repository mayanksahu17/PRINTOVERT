import React, { useState } from 'react';
import { registerUser } from '../../actions/auth';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
  const [show, setShow] = useState('password');
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const  uploadata = {
      fullName :`${data.firstName} ${data.lastName}`,
      email : data.email ,
      username : data.firstName ,
      password : data.password,
      phoneNumber : data.phoneNumber
    }
  console.log(uploadata);
   
    try {
    
      await registerUser(uploadata);

      navigate('/login');

    } catch (error) {
     
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='bg-blue-200 h-180'>
      <div>
        <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-5xl text-blue-900'>Signup </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between w-[1300px] mt-16 font-semibold '>
          <div className='ml-7 text-xl'>Name</div>
          <div className='w-[40%] flex justify-between mr-48'>
            <input {...register('firstName')} className='rounded-lg p-2 w-[45%]' type='text' placeholder='First Name' />
            <input {...register('lastName')} className='rounded-lg p-2 w-[45%] mr-8' type='text' placeholder='Last Name' />
          </div>
        </div>

        <hr className='mt-10' />

        <div className='flex justify-between w-[90%] mt-16 font-semibold '>
          <div className='ml-7 text-xl'>Email-ID</div>
          <div className='w-[50%] flex justify-between'>
            <input {...register('email')} className='rounded-lg p-2 w-[45%]' type='text' placeholder='Enter your email' />
          </div>
        </div>

        <hr className='mt-10' />

        <div className='flex justify-between w-[90%] mt-16 font-semibold '>
          <div className='ml-7 text-xl'>Phone Number</div>
          <div className='w-[30%] flex justify-between mr-5'>
            <input {...register('phoneNumber')} className='rounded-lg p-2 w-[100%]' type='text' placeholder='Enter your phone number' />
          </div>
        </div>
        <hr className='mt-10' />

        <div className='flex justify-between w-[90%] mt-16 font-semibold '>
          <div className='ml-7 text-xl'>Password</div>
          <div className='w-[80%] flex justify-between ml-64 '>
            <input
              {...register('password')}
              className='rounded-lg p-2 w-[45%] ml-64 '
              type={show}
              placeholder='Enter new password'
            />
          </div>
        </div>

        <hr className='mt-10' />

        <div className='flex w-full ml-[77%] mt-3'>
          <input className='mr-2 w-3 h-6' type='checkbox' onClick={() => setShow((prevShow) => (prevShow === 'password' ? 'text' : 'password'))} />
          <p>Show Password</p>
        </div>

        <div className='flex w-[90%] mt-6 font-bold '>
          <button type='submit' className='rounded-2xl w-28 bg-blue-600 h-10 ml-10 hover:text-blue-500 hover:bg-white'>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
