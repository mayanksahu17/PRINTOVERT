import axios from 'axios'
import store from '../store/store.js';

const user = store.getState().auth.user;
  const userId =  user?._id 
const uploadProduct = () => {
  try {
    const URL = `http://localhost:8000/api/v1/users/products/${userId}/add-new/product`;

  // Retrieve images from localStorage
  const image1 = localStorage.getItem('image1');
  const image2 = localStorage.getItem('image2');
  const image3 = localStorage.getItem('image3');
  const image4 = localStorage.getItem('image4');

  if (!image1) {
    console.log("image 1 nahi h bhai ");
  }

  // Retrieve product data from Redux store
  const productData = {
    image : image1,
    image : image2,
    image : image3,
    image : image4,
    name: store.getState().product.name,
    color: store.getState().product.color,
    size: store.getState().product.size,
    price: store.getState().product.price,
    stock: store.getState().product.stock,
    rating: store.getState().product.rating,
    shipped: store.getState().product.shipped,
    delivered: store.getState().product.delivered,
    ordered: store.getState().product.ordered,
    brand: store.getState().product.brand,
  };

  
  const formData = new FormData();
  Object.entries(productData).forEach(([key, value]) => {
    formData.append(key, value);
  });
 
   console.log(formData);
  axios.post(URL, formData)
    .then(response => {
      console.log('Product uploaded successfully:', response.data);
     
    })
    .catch(error => {
      console.error('Error uploading product:', error);
     
    });
  } catch (error) {
    console.error('Error uploading product:', error);
  }
  
};

export default uploadProduct;
