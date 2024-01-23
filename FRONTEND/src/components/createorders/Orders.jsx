import React from 'react';
import Button from '../button/Button';
import { updateProduct } from '../../actions/Product.js';

function Orders({ orderData , userId }) {


  const updatedata = {
    "ordered":true,
    "delivered":false,
    "shipped":false,
    "price": orderData.price,
    "quantity": 1
    }
    
const handleUpdate =async()=>{
  console.log(orderData._id,userId,updatedata);
  const response =  await updateProduct(orderData._id,userId,updatedata)
  console.log(response);
}

  return (
    <div className='h-[450px] w-[280px] bg-white mt-8 ml-4 hover:shadow-gray-600 hover:shadow-2xl rounded-2xl '>
      <div className='h-[60%] w-[100%] flex flex-wrap justify-center items-center'>
        <img className='cover border-2 border-solid border-black rounded-xl h-[90%] w-[90%] bg-white' src={orderData.image0} alt="" />
      </div>
      <div className='flex flex-col justify-evenly h-[40%] items-center '>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='font-semibold text-sm'>name: <span className=' text-base'>{orderData.name}</span></span>
          <span className='font-semibold text-sm'>Size: <span className=' text-base'>{orderData.size}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='font-semibold text-sm'>Color: <span className=' text-base'>{orderData.color}</span></span>
          <span className='font-semibold text-sm'>Quantity: <span className=' text-base'>{orderData.stock}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='font-semibold text-sm'>Address: <span className=' text-base'>{orderData.shipped ? 'Shipped' : 'Not Shipped'}</span></span>
          <span className='font-semibold text-sm'>Price/item: <span className=' text-base'>{orderData.price}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>Status:</span>
          <span className={`${orderData.ordered ? ' bg-green-500' : 'bg-yellow-300'} px-2 text-base rounded-2xl pb-1`}>
                  {orderData.ordered ? 'Ordered' : 'Pending...'}
                </span>
        {
          orderData.ordered ?  " ":  (<Button children={'Buy'} className='h-8' onClick={handleUpdate} />) 
         }
          
        </div>
      </div>
    </div>
  );
}

export default Orders;
