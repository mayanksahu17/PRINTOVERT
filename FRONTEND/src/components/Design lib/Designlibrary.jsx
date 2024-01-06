import React, { useState } from 'react';
import { IoIosCloudUpload } from 'react-icons/io';

function Designlibrary() {
  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  const getImageUrl = () => {
    // Implement functionality for getting image URL
    // This function can be defined based on your requirements
  };

  return (
    <div className='bg-blue-200 w-full h-[800px]'>
      <div className='flex'>
        <div className='mt-12 ml-14'>
          <h1 className='text-5xl font-bold text-blue-800'>Design Library</h1>
          <h4 className='text-gray-600 mt-1'>Choose your Design</h4>
        </div>
        <button
          className='w-24 h-10 text-blue-500 font-bold bg-white rounded-lg border-black border-r-blue-700 border-r-2 border-l-2 border-t-2 border-b-2 mt-16 ml-14 flex hover:bg-blue-700 hover:text-white'
          onClick={toggleUploadForm}
        >
          <IoIosCloudUpload className='text-xl mt-3 ml-1' />
          <h1 className='ml-1 mt-2'>Upload</h1>
        </button>
      </div>

      {showUploadForm && (
        <form className='uploadDiving h-40 w-96 border-2 rounded-2xl border-blue-500/100 ml-56 bg-transparent
         hover:bg-white'>
          <label htmlFor='imageInput' className='drop-container' id='dropcontainer'>
            <span className='drop-title text-3xl font-bold ml-24 text-blue-500 ' >Drop files here</span>
              <h1 className='mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500 '>Or</h1>
            <div className='flex'>
            <input type='file' id='imageInput' accept='image/*' className='w-32 mt-5 ml-7' required />
            <div className='btn-collectioninput-fs16 '>
            <button id='inputCancel'  onClick={getImageUrl} className='w-28 h-18 text-blue-500 font-bold text-center
             bg-white rounded-lg border-black border-r-blue-700 border-r-2 border-l-2 mt-5
             border-t-2 border-b-2  ml-14 flex hover:bg-blue-700 hover:text-white'><h1 className='ml-3 mt-0'>Add image</h1></button>
          </div>
              </div>
          </label>
        </form>
 )} 
        <div className='mt-14 ml-14 flex flex-wrap'>
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
         
      
         </div>

 
    </div>


  );
}

export default Designlibrary;