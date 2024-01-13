import React, { useState, useEffect } from 'react';
import { IoIosCloudUpload } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../store/imageslice.js';
import { uploadImage, getAllImages } from '../../actions/uploadImage.js';
import store from '../../store/store.js';

function Designlibrary() {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit, setError: setFormError } = useForm();

 let userId;
  
  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
       const user = store.getState().auth.user;
        userId = user._id;
       const responseData =  await getAllImages(userId, dispatch);
        dispatch(addImage({ images: responseData.data }));
      }
    };

    fetchData();
  }, [userId, dispatch]);
  

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  const images = useSelector((state) => state.images.images);

  const onSubmit = async (data) => {
    const file = data.image[0];
    try {
      if (!file) {
        setFormError('image', { type: 'manual', message: 'Image file is required' });
        return;
      }

      const user = store.getState().auth.user;
      const userId = user._id;
      const imageUrl = await uploadImage(file, userId);
      dispatch(addImage({ image: imageUrl }));
      setError('');
      toggleUploadForm(); // Close the form after a successful upload
    } catch (error) {
      setFormError('image', { type: 'manual', message: 'Something went wrong while uploading the image' });
    }
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
        <form
          className='uploadDiving h-40 w-96 border-2 rounded-2xl border-blue-500/100 ml-56 bg-transparent hover:bg-white'
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor='imageInput' className='drop-container' id='dropcontainer'>
            <span className='drop-title text-3xl font-bold ml-24 text-blue-500'>Drop files here</span>
            <h1 className='mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500'>Or</h1>
            <span className='text-red-700 ml-3'>{error}</span>
            <div className='flex'>
              <input
                type='file'
                id='imageInput'
                accept='image/*'
                className='w-32 mt-5 ml-7'
                {...register('image', { required: 'Image file is required' })}
              />
              <div className='btn-collectioninput-fs16 '>
                <button
                  id='inputCancel'
                  type='submit'
                  className='w-28 h-18 text-blue-500 font-bold text-center bg-white rounded-lg border-black border-r-blue-700 border-r-2 border-l-2 mt-5 border-t-2 border-b-2 ml-14 flex hover:bg-blue-700 hover:text-white'
                >
                  <h1 className='ml-3 mt-0'>Add image</h1>
                </button>
              </div>
            </div>
          </label>
        </form>
      )}
      <div className='mt-14 ml-14 flex flex-wrap'>
      {images && images.map((imageUrl) => (
          <img
            key={imageUrl}
            className='w-52 rounded-3xl hover:shadow-2xl ml-3 mt-3'
            src={imageUrl}
            alt=''
          />
        ))}


      </div>
    </div>
  );
}

export default Designlibrary;
