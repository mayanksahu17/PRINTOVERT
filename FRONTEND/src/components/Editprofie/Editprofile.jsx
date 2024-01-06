import React from 'react'

function Editprofile() {
  return (
    
    <div className='bg-blue-200 w-full h-180 '>

    <div>
  <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-5xl text-blue-900 '>Personal Detail</h1>
  <p className='ml-7 mt-1'>Dont forget to save your changes </p>
  </div>

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Name</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[45%]' type="text" placeholder='Enter the detail' />
   <input className=' rounded-lg  p-2  w-[45%]' type="text" placeholder='Enter the detail' /></div>
</div>

<hr className='mt-10' />

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Email-ID</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[45%]' type="text" placeholder='Enter the detail' />
   <input className=' rounded-lg  p-2  w-[45%]' type="text" placeholder='Enter the detail' /></div>
</div>

<hr className='mt-10' />

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Phone Number</div>
  <div className='w-[50%] flex justify-between'><input className=' rounded-lg p-2 w-[100%]' type="text" placeholder='Enter the detail' /></div>
</div>
<hr className='mt-10' />

<div className='flex justify-between w-[90%] mt-16 font-semibold '>
  <div className='ml-7 text-xl'>Password</div>
  <div className='w-[80%] flex justify-between'>
    <input className=' rounded-lg p-2 w-[45%] mr-5' type="text" placeholder='Enter current password' />
   <input className=' rounded-lg  p-2  w-[45%] mr-5' type="text" placeholder='Enter new password' />
   <input className=' rounded-lg  p-2  w-[45%]' type="text" placeholder='Confirm Password' /></div>
</div>

<hr className='mt-10' />


<div className='flex w-full ml-[77%] mt-3'>
  <input  className='mr-2'  type="checkbox" />
  <p>Show Password</p>
</div>


<div className='flex   w-[90%] mt-6 font-bold '>
  <div className='ml-7 mr-10 text-2xl'>Addresses</div>
  <button className='rounded-2xl w-28 bg-blue-600'>Add New</button>
  </div>







  </div>
  )
}

export default Editprofile