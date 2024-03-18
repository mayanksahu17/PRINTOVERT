import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice.js';
import { useForm } from 'react-hook-form';
import { handleLogin } from '../../actions/auth.js';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    
    try {
      console.log(data);
      const userData = await handleLogin(data);
      if (!userData) {
        setError('Invalid username or password. Please try again.');
      } else {
        dispatch(login({ user: userData, token: userData.refreshToken }));
        navigate('/');
      }
    } catch (error) {
      setError('Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If already logged in, redirect to home page
    if (localStorage.getItem('accessToken')){
      navigate("/")
    } 
  },[])

  return (
    <div className='bg-blue-200 min-h-screen flex flex-col justify-center items-center w-screen'>
      <div className='text-center'>
        <h1 className='font-bold mt-8 ml-8 text-blufont-cerebriSans text-blue-900 co text-5xl'>Sign In</h1>
        <p className='ml-12 mt-1'>Log in to Your Account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 w-full max-w-md'>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <h1 className='font-semibold text-xl mb-6'>Login to your Account</h1>

          <div className='mb-4'>
            <label htmlFor='username' className='text-lg font-semibold'>Username</label>
            <input
              {...register('username')}
              id='username'
              className='rounded-lg p-2 w-full mt-1'
              type='text'
              placeholder='Enter your username'
              disabled={loading}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='text-lg font-semibold'>Password</label>
            <input
              {...register('password')}
              id='password'
              className='rounded-lg p-2 w-full mt-1'
              type='password'
              placeholder='Enter your password'
              disabled={loading}
            />
          </div>

          {error && <div className='text-red-500 mb-4'>{error}</div>}

          <div className='flex justify-between items-center'>
            <NavLink to='/signup' className='text-blue-500 font-semibold hover:underline'>Don't have an account? Sign Up</NavLink>
            <button type='submit' className='rounded-lg p-2 w-32 h-10 bg-blue-600 text-white font-semibold hover:bg-blue-700' disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
