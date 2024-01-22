import axios from 'axios'
import store from '../store/store.js';

const user = store.getState().auth.user;
const userId = user?._id

const uploadProduct = async (formData) => {
  try {
    console.log(userId);
    const URL = `http://localhost:8000/api/v1/users/products/${userId}/add-new/product`;
    const response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Error uploading product: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log('Product uploaded successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error uploading product:', error);
    throw error; 
  }
};

const getAllProducts = async () => {
  try {
    const URL = `http://localhost:8000/api/v1/users/products/${userId}/get-all-products`;

    const response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log('Products fetched successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export  {
  uploadProduct,
  getAllProducts
};
