import { addImage } from "../store/imageslice";

// here we hardcoded url for testing purpose 
const uploadImage = async (file , userId) => {
    try {
      // const apiUrl = `http://localhost:8000/api/v1/users/image/${userId}`;
      const apiUrl = `http://localhost:8000/api/v1/users/image/65a1212e8499b765747f3650`;
     if (!file) console.log("file leke a bhai ");
      const formData = new FormData();
      formData.append('Image', file);
  
    
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: { },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
   
      const data = await response.json();
      console.log("result data : " , data);
     
      return data;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };
  

// actions/uploadImage.js

const getAllImages = async (userId, dispatch) => {
  const apiUrl = `http://localhost:8000/api/v1/users/all-image/65a1212e8499b765747f3650`;
  // const apiUrl = `http://localhost:8000/api/v1/users/all-image/${userId}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.success) {
      const images = data.data; 
      // dispatch(addImage({ images }));
      return data;
    } else {
      console.error('Failed to get images:', data.message);
    }
  } catch (error) {
    console.error('Error getting images:', error);
  }
};
  export {
    getAllImages,
    uploadImage
  }