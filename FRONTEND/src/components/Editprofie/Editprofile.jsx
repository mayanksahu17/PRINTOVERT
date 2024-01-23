import React, { useState } from 'react';
import { updateProfile } from '../../actions/auth.js';
import store from '../../store/store.js';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice.js';
function EditProfile() {

  const user = store.getState().auth.user;
  const userId = user?._id;
  const dispatch = useDispatch()
  const [name, setName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [address, setAddress] = useState(user?.address || '');
  const [message,setMessage] = useState("")

  const updateuserProfile = async () => {
    console.log(user);
    const userData = {
      fullName : name,
      email,
      phoneNumber,
      address,
    };
    console.log(userData);
    const response = await updateProfile(userId, userData);

    if (response) {
      console.log('Profile updated successfully:', response);
      dispatch(login({user : response.data}))
      setMessage("Profile updated successfully:")
      
      // Handle success (e.g., show a success message)
    } else {
      console.error('Failed to update profile');
      setMessage("Failed to update profile")
      // Handle failure (e.g., show an error message)
    }
  };

  return (
    <div className='bg-blue-200 w-full h-180'>
      <div>
        <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-5xl text-blue-900'>
          Personal Detail
        </h1>
        <p className='ml-12 mt-1'>Don't forget to save your changes</p>
      </div>

      <div className='flex justify-between w-[90%] mt-16 font-semibold '>
        <div className='ml-7 text-xl'>Name</div>
        <div className='w-[50%] flex justify-between'>
          <input
            className='rounded-lg p-2 w-[45%]'
            type='text'
            placeholder={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <hr className='mt-10' />

      <div className='flex justify-between w-[90%] mt-16 font-semibold '>
        <div className='ml-7 text-xl'>Email-ID</div>
        <div className='w-[50%] flex justify-between'>
          <input
            className='rounded-lg p-2 w-[45%]'
            type='text'
            placeholder={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <hr className='mt-10' />

      <div className='flex justify-between w-[90%] mt-16 font-semibold '>
        <div className='ml-7 text-xl'>Phone Number</div>
        <div className='w-[50%] flex justify-between'>
          <input
            className='rounded-lg p-2 w-[45%]'
            type='text'
            placeholder={phoneNumber}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <hr className='mt-10' />

      <div className='flex justify-between w-[90%] mt-16 font-semibold '>
        <div className='ml-7 text-xl'>Address</div>
        <div className='w-[50%] flex justify-between'>
          <input
            className='rounded-lg p-2 w-[45%]'
            type='text'
            placeholder={address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <hr className='mt-10' />

      <div className='flex w-[90%] mt-6 font-bold '>
        <div className='ml-7 mr-10 text-2xl'></div>
        {message &&(<p className='font-semibold text-xl'>{message}</p>)}
        <button
          className='h-10 w-40 rounded-3xl text-white ml-10 border bg-blue-700 hover:bg-blue-500 hover:text-white font-semibold'
          onClick={updateuserProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
