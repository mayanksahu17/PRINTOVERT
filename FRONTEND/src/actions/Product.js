import axios from 'axios'


const uploadProduct = async (userId, formData) => {
  try {
    console.log(userId);
    const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/users/products/${userId}/add-new/product`; // Relative path with proxy setup

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data.success) {
      throw new Error(`Error uploading product: ${response.data.message}`);
    }

    const responseData = response.data;
    console.log('Product uploaded successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error uploading product:', error);
    throw error;
  }
};


const getAllProducts = async (userId) => {
  try {
    const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/users/products/${userId}/get-all-products`; // Relative path with proxy setup

    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data.success) {
      throw new Error(`Error fetching products: ${response.data.message}`);
    }

    const responseData = response.data;
    console.log('Products fetched successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


const updateProduct = async (productId, userId, updateData) => {
  try {
    console.log(productId, userId, updateData);
    const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/users/products/${userId}/products/${productId}`; // Relative path with proxy setup
    const response = await axios.put(apiUrl, updateData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.success) {
      console.log('Product updated successfully:', response.data);
      return response.data.data;
    } else {
      console.error('Error updating product:', response.data.message || 'An error occurred');
      return null;
    }
  } catch (error) {
    console.error('Unexpected error updating product:', error);
    return null;
  }
};



const getAllOrderedProducts = async (userId) => {
  try {
    const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/users/${userId}/cart`; // Relative path with proxy setup

    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data.success) {
      throw new Error(`Error fetching products: ${response.data.message}`);
    }

    const responseData = response.data;
    console.log('Products fetched successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};





export  {
  uploadProduct,
  getAllProducts,
  getAllOrderedProducts,
  updateProduct
};
