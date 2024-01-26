import React, { useState, useEffect } from 'react';
import { IoIosCloudUpload } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, pushImage ,selectedImage } from '../../store/imageslice.js';
import { uploadImage, getAllImages,libuploadImage } from '../../actions/Image.js';
import store from '../../store/store.js';
import { useNavigate } from 'react-router-dom';


function Designlibrary() {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit, setError: setFormError } = useForm();
  const user = store.getState().auth.user;

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };
let x
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userId = user._id;
        const responseData = await getAllImages(userId, dispatch);
      
        setImages(responseData); // Update local state with fetched images
      }
    };

    fetchData();
  }, [user, dispatch,x,showUploadForm]);

  const onSubmit = async (data) => {
    const file = data.image[0];

    try {
      if (!file) {
        setFormError('image', { type: 'manual', message: 'Image file is required' });
        return;
      }

      setError('Image uploading, please wait...');

      const userId = user._id;
      const image = await libuploadImage(file, userId);
    
      // await libuploadImage(image.data.imageURL,userId)
      // Update the UI by immediately adding the new image to the images array
      dispatch(pushImage(image));
      setImages((prevImages) => [...prevImages, image]); // Update local state

      setError('');
      toggleUploadForm();
      x+=1
    } catch (error) {
      setFormError('image', { type: 'manual', message: 'Something went wrong while uploading the image' });
    }
  };
  
  

  return (
    <div className='bg-blue-200 w-full h-[800px] flex-grow overflow-y-auto p-4'>
      <div className='flex'>
        <div className=' '>
                    <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Design library </h1>
          
                    <h4 className=' ml-12 text-gray-600 mt-1'>Upload you'r varient</h4>
                   </div>
         <button
          className='w-40 h-10 text-white font-bold bg-blue-700  rounded-3xl  border-r-2 border-l-2 border-t-2 border-b-2 mt-10 ml-8 flex hover:bg-blue-500 hover:text-white'
          onClick={ toggleUploadForm}
        >
          <IoIosCloudUpload className='text-xl mt-3 ml-8' />
          <h1 className='ml-2 mt-2 font-semibold'>Upload</h1>
          </button>
          </div>

             {showUploadForm && (
           <form
          className='uploadDiving h-40 w-96 border-2 rounded-2xl border-blue-500/100 ml-56 bg-transparent hover:bg-white'
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor='imageInput' className='drop-container' id='dropcontainer'>
            {/* <span className='drop-title text-3xl font-bold ml-24 text-blue-500'>Drop files here</span>
            <h1 className='mr-18 w-fulll h-10 font-bold text-center mt-4 text-blue-500'>Or</h1> */}
            <div className=''>
              <input
                type='file'
                id='imageInput'
                accept='image/*'
                className=' w-38 ml-3 mt-4 '
                {...register('image', { required: 'Image file is required' })}
              /> 
              <div className=' btn-collectioninput-fs16 '>
                <button
                  id='inputCancel'
                  type='submit'
                
                  className='w-32 h-10 text-white font-bold bg-blue-700  rounded-3xl  mt-12 ml-60 flex hover:bg-blue-500 hover:text-white'>
                  <h1 className='ml-5 mt-2'>Add image</h1>
                </button>
              <span className='front-bold text-red-700 mt-12 ml-3'>{error}</span>
                

              </div>
            </div>
          </label>
        </form>
      )}
      <div className='mt-14 ml-14 flex flex-wrap'>
      {images && images?.map((imageUrl) => (
          <img
          onClick={()=>{dispatch(selectedImage({image:imageUrl }));
            navigate("/tshirt-designer")}}
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
