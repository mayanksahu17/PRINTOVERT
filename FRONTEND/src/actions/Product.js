import axios from 'axios'


const uploadProduct = async (userId,formData) => {
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

const updateProduct = async (productId, userId, updateData) => {
  try {
    console.log(productId,userId,updateData);
    const apiUrl = `http://localhost:8000/api/v1/users/products/${userId}/products/${productId}`;
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData.data;
    } else {
      const errorData = await response.json();
      console.error('Error updating product:', errorData.message || 'An error occurred');
      return null;
    }
  } catch (error) {
    console.error('Unexpected error updating product:', error);
    return null;
  }
};

export  {
  uploadProduct,
  getAllProducts,
  updateProduct
};
