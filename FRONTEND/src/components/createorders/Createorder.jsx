import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import Orders from './Orders';
import store from '../../store/store.js';
import{ setProducts , removeProducts} from '../../store/allProducts.js';
import {getAllProducts} from '../../actions/Product.js'



function CreateOrder() {
  const dispatch = useDispatch(); 
  const productData = useSelector((state) => state.allProductData.allProductData);
  
  const user = store.getState().auth.user; 
  const userId = user?._id

  const handleUpdate =async()=>{
    console.log(orderData._id,userId,updatedata);
    const response =  await updateProduct(orderData._id,userId,updatedata)
    console.log(response);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts(userId);
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
    <div className=' w-full h-180 flex-grow overflow-y-auto p-4 bg-blue-200'>
      <div>
        <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Create Orders</h1>
        <p className='ml-12 mt-1  text-gray-600 '>Place Order and Enjoy </p>
       
      </div>

      <div className='flex flex-wrap'>
        {productData?.map((product) => (
          <Orders key={product._id} orderData={product} userId={userId} handleUpdate={handleUpdate} price={product.price} />
        ))}
      </div>

      <div className='h-18 w-full ml-10 flex mt-32'>
       
        {/* <Button  className='hover:bg-red-600 ' children={'Delete Product'} /> */}
      </div>
    </div>
  );
}

export default CreateOrder;
