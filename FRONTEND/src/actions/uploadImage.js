import { addImage } from "../store/imageslice";

const uploadImage = async (file, userId) => {
  try {
    console.log(userId);
    const apiUrl = `http://localhost:8000/api/v1/users/image/${userId}`;

    if (!file) console.log("file leke a bhai ");

    const formData = new FormData();
    formData.append('Image', file);


    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData,
      headers: {},
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("result data : ", data);

    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};




const getAllImages = async (userId, dispatch) => {

  const apiUrl = `http://localhost:8000/api/v1/users/all-image/${userId}`;

  console.log(userId);
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const images = data.data;
    dispatch(addImage({ images: images }));
    console.log(images);
    return images;

  } catch (error) {
    console.error('Error getting images:', error);
  }
};

export {
  getAllImages,
  uploadImage
}