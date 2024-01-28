import axios from "axios";

const getAllProducts = async () => {
    const apiUrl =  `http://localhost:8000/api/v1/admin/ordered/get-all-products`
  
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

const getAllActiveOrders = async()=>{

}
const getAllDeliveredOrders = async()=>{
  const apiUrl =  `http://localhost:8000/api/v1/admin/delivered/get-all-products`

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



const updateProduct = async ({ ordered, delivered, shipped , prodctId }) => {
  const apiUrl = `http://localhost:8000/api/v1/admin/${prodctId}/update-product`;
  const data = { ordered, delivered, shipped };

  try {
    const response = await axios.patch(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const updatedData = response.data;
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
    getAllDeliveredOrders
  }