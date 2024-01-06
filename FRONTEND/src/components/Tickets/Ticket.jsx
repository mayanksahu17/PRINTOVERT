import React, { useState } from 'react';

function Ticket() {

  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };
  return (
   
    
    <div className='bg-blue-200 w-full h-180 '>
    <div className='flex'>
  <h1 className=' font-bold mt-8 ml-7  text-blue-900 font-cerebriSans text-3xle-900 co text-5xl'>Check Ticket</h1>
  <button  onClick={toggleUploadForm} className='h-8 w-40 rounded-3xl text-white mt-10 ml-6 border bg-blue-700  hover:bg-blue-500 hover:text-white'>Raise a Ticket</button>
  
  </div>
  <p   className='ml-7 mt-1'> Raise and Check Ticket</p>

  {showUploadForm && (
        <form className='uploadDiving h-520 w-[1200px] border-2 border-blue-500 rounded-2xl border-blue-450/150 font-semibold mt-3   ml-3 mr6 bg-transparent'>
         <div>
         <div className='flex'>

<div className='flex-col ml-10 mt-1' >
<h1>Subject : </h1>
<input type="text" className='h-8 w-[400px] rounded-xl mt-3 text-center ' />
</div>

<div className='flex-col ml-10' >
<h1> Call Back Number : </h1>
<input type="text" className='h-8 w-[200px] rounded-xl mt-3 text-center ' />
</div>

<div className='flex-col ml-10' >
<h1> Query for : </h1>
<input type="text" className='h-8 w-[200px] rounded-xl mt-3 text-center ' />
</div>

</div>
          <h2 className='mt-10 ml-10'>Description</h2>
          <textarea name="" id="" cols="140" rows="4" placeholder='  Enter your description' className='mt-1 ml-10 rounded-xl'></textarea>
         </div>
        
        <input type="file" name="" id=""  className='w-[1140px] h-8 ml-10 mt-2 mb-4 border-2'/>
        
        <div className='flex ml-10 mb-4'>
<button className='text-blue-700 w-[100px] h-10 rounded-lg mt-6 border-blue-700 border-2 border-solid  '>CANCLE</button>
<button className='text-white ml-4 w-[100px] h-10 rounded-lg mt-6 bg-blue-700 border-white-700 border-2 border-solid  '>CONFIRM</button>

</div>
        </form>
 )} 
<div className='bg-blue-200 w-full h-180 '>
  
  
  <div className='bg-blue-700 h-11 w-50 ml-6 mr-6 rounded-t-xl mt-4 '>
    <li className='flex justify-evenly text-white  px-10 text-center p-2 '>
        <ul>Subject</ul>
        <ul></ul>
        <ul>Submit Date</ul>
        <ul>Ticket</ul>
        <ul>Status</ul>
        <ul>Response</ul>
        <ul>Action</ul>
    </li>
  </div>

  
  <div className='bg-white h-11 w-50 ml-6 mr-6 '>
    <li className='flex justify-evenly text-Black  px-10 text-center p-2 '>
        <ul>Here is an example</ul>
        
        
        <ul>12-12-2023</ul>
            
        <ul>View</ul>
        
        <ul><button>Pending</button></ul>

        <ul>N/A</ul>
        
        <ul><button className=''>Delete</button></ul>
    </li>
  </div>


</div>







</div>


  )
}

export default Ticket
