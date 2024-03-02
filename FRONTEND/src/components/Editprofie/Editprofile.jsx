import React, { useState, useEffect } from 'react';
import { updateProfile } from '../../actions/auth.js';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice.js';

function EditProfile() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.fullName || '');
      setEmail(user.email || '');
      setPhoneNumber(user.phoneNumber || '');
      setAddress(user.address || '');
    }
  }, [user]);

  const updateUserProfile = async () => {
    setLoading(true);
    try {
      const userData = { fullName: name, email, phoneNumber, address };
      const response = await updateProfile(user._id, userData);

      if (response) {
        dispatch(login({ user: response.data }));
        setMessage('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
        setMessage('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error.message);
      setMessage('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-blue-200 min-h-screen flex flex-col justify-center items-center p-4 w-screen'>
      <div className='text-center mb-8'>
        <h1 className='font-bold text-3xl text-blue-900'>Personal Details</h1>
        <p className='mt-2'>Don't forget to save your changes</p>
      </div>

      <div className='w-full max-w-md'>
        <input
          className='rounded-lg p-2 mb-4 w-full'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='rounded-lg p-2 mb-4 w-full'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='rounded-lg p-2 mb-4 w-full'
          type='text'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          className='rounded-lg p-2 mb-4 w-full'
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {message && <p className='text-green-500 mb-4'>{message}</p>}

        <button
          className='bg-blue-700 text-white font-semibold rounded-lg p-2 w-full'
          onClick={updateUserProfile}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Update Profile'}
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
