


const uploadImage = async (file , userId) => {
    try {
      const apiUrl = `http://localhost:8000/api/v1/users/image/${userId}`;
     if (!file) console.log("file leke a bhai ");
      const formData = new FormData();
      formData.append('Image', file);
  
      // Make a fetch request with the FormData
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: { },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
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
  const apiUrl = `http://localhost:8000/api/v1/users/all-image/${userId}`;

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
      dispatch(addImage({ images }));
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