import axios from "axios";

const getAllProducts = async () => {
    const apiUrl =  `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/ordered/get-all-products`
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      console.error('Error getting images:', error);
    }
  };

const getAllActiveOrders = async () => {
    const apiUrl =  `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/active/get-all-products`
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      console.error('Error getting images:', error);
    }
  };

const getAllDeliveredOrders = async()=>{
  const apiUrl =  `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/delivered/get-all-products`

 try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      console.error('Error getting images:', error);
    }
}

const updateProduct = async (prodctId,{  delivered, shipped, active, rejected }) => {
  const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/${prodctId}/update-product`;
  console.log(apiUrl);
  const data = {  delivered, shipped, active, rejected };

  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update product');
    }

    const updatedData = await response.json();  
    console.log(updatedData);

    return updatedData;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
};


export {
    getAllProducts,
    updateProduct,
    getAllDeliveredOrders,
    getAllActiveOrders
  }