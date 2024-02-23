const apiUrlBase = '';

const uploadProduct = async (userId, formData) => {
  try {
    console.log(userId);
    const apiUrl = `/api/users/products/${userId}/add-new/product`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    if (!responseData.success) {
      throw new Error(`Error uploading product: ${responseData.message}`);
    }

    console.log('Product uploaded successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error uploading product:', error);
    throw error;
  }
};

const getAllProducts = async (userId) => {
  try {
    const apiUrl = `/api/users/products/${userId}/get-all-products`;

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    if (!responseData.success) {
      throw new Error(`Error fetching products: ${responseData.message}`);
    }

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
    const apiUrl = `/api/users/products/${userId}/products/${productId}`;

    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    const responseData = await response.json();
    console.log(responseData);
    if (responseData.success) {
      console.log('Product updated successfully:', responseData);
      return responseData.data;
    } else {
      console.error('Error updating product:', responseData.message || 'An error occurred');
      return null;
    }
  } catch (error) {
    console.error('Unexpected error updating product:', error);
    return null;
  }
};

const getAllOrderedProducts = async (userId) => {
  try {
    const apiUrl = `/api/users/${userId}/cart`;

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    if (!responseData.success) {
      throw new Error(`Error fetching products: ${responseData.message}`);
    }

    console.log('Products fetched successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export {
  uploadProduct,
  getAllProducts,
  getAllOrderedProducts,
  updateProduct
};
