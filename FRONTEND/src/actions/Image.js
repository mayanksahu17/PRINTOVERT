import { addImage } from "../store/imageslice";
import axios from 'axios';

const uploadImage = async (file, userId) => {
  try {
    console.log(userId);
    const apiUrl = `/api/v1/users/image/${userId}`; // Relative path with proxy setup

    if (!file) console.log("file leke a bhai ");

    const formData = new FormData();
    formData.append('Image', file);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data;
    console.log("result data : ", data);

    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};


const libuploadImage = async (file, userId) => {
  try {
    console.log(userId);
    const apiUrl = `/api/v1/users/${userId}/upload/library/image`; // Relative path with proxy setup

    if (!file) console.log("file leke a bhai ");

    const formData = new FormData();
    formData.append('Image', file);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data;
    console.log("result data : ", data);

    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};


const getAllImages = async (userId, dispatch) => {
  const apiUrl = `/api/v1/users/all-image/${userId}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error getting images');
    }

    const data = await response.json();

    const images = data.data;
    dispatch(addImage({ images }));

    return images;
  } catch (error) {
    console.error('Error getting images:', error);
  }
};
  

export {
  getAllImages,
  uploadImage,
  libuploadImage
}