import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useForm } from 'react-hook-form';
import {loginUser} from '../../actions/auth.js'
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
    // console.log(data);
      const user = await loginUser(data); 

     if (user) dispatch(login(user));

      // Redirect to another page upon successful login
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid username or password. Please try again.'); 
    }
  };

  return (
    <div className='bg-blue-200 w-full h-180 '>
      <div>
        <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-3xle-900 co text-4xl'>Sign In</h1>
        <p className='ml-7 mt-1'>Create Your Account </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='h-96 w-96 ml-[30%] mt-14 bg-slate-100 rounded-2xl hover:shadow-2xl'>
          <h1 className='ml-16 font-semi-bold p-4 text-2xl'>Login to your Account</h1>

          <div className='flex justify-between w-[90%] mt-16 font-semi-bold '>
            <div className='ml-7 text-xl'>Username</div>
            <div className='w-[50%] flex justify-between '>
              <input
                {...register('username')} // React Hook Form register for username
                className='rounded-lg p-2 w-[100%] h-7'
                type='text'
                placeholder='Enter the detail'
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
                placeholder='Enter the detail'
              />
            </div>
          </div>

          {error && <div className='text-red-500 ml-7 mt-2'>{error}</div>}

          <div className='flex justify-end mt-16 mr-10'>
            <NavLink to='/signup'>
              <div className='w-[100px] flex justify-between ml-3'>
                <button className='ml-0 rounded-2xl p-2 w-[350px] h-7 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2'>
                  <div className=' -mt-2'>Sign Up </div>
                </button>
              </div>
            </NavLink>

            <button type='submit' className='ml-3 rounded-2xl p-2 w-[100px] h-7 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 '>
              <div className=' -mt-2'>Sign In </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
