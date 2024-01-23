import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import Orders from './Orders';
import store from '../../store/store.js';
import{ setProducts , removeProducts} from '../../store/allProducts.js';
// import {getAllProducts} from '../../actions/Product.js'



function CreateOrder() {
  const dispatch = useDispatch(); 
  const productData = useSelector((state) => state.allProductData.allProductData);
  
  const user = store.getState().auth.user; 
  const userId = user?._id



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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        const productData = response.data;
        console.log(productData);
        dispatch(setProducts({ data: productData }));
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='bg-blue-200 w-full h-180 '>
      <div>
        <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Create Orders</h1>
        <p className='ml-12 mt-1  text-gray-600 '>Place Order and Enjoy </p>
       
      </div>

      <div className='flex'>
        {productData?.map((product) => (
          <Orders key={product._id} orderData={product} userId={userId} />
        ))}
      </div>

      <div className='h-18 w-full ml-10 flex mt-32'>
       
        {/* <Button  className='hover:bg-red-600 ' children={'Delete Product'} /> */}
      </div>
    </div>
  );
}

export default CreateOrder;
