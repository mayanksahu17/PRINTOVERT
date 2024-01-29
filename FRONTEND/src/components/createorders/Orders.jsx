import React, { useState } from 'react';
import Button from '../button/Button';

function Orders({ orderData, handleUpdate }) {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleBuyClick = async () => {
    try {
      await handleUpdate(orderData);
      setRefreshFlag(!refreshFlag);
    } catch (error) {
      setErrorMessage(error.message); 
    }
  };

  return (
    <div className='h-[400px] w-[250px] bg-white mt-8 ml-8 hover:shadow-gray-600 hover:shadow-2xl rounded-2xl'>
      <div className='h-[60%] w-[100%] flex flex-wrap justify-center items-center'>
        <img className='cover p-2 border-2 border-solid border-black rounded-xl h-[90%] w-[90%] bg-white' src={orderData.image0} alt='' />
      </div>
      <div className='flex flex-col justify-evenly h-[40%] items-center'>
        <div className='flex justify-between items-center w-[80%]'>
          {/* <span className='font-semibold text-sm'>name: <span className=' text-base'>{orderData.name}</span></span> */}
          {/* <span className='font-semibold text-sm'>Size: <span className=' text-base'>{orderData.size}</span></span> */}
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          {/* <span className='font-semibold text-sm'>Color: <span className=' text-base'>{orderData.color}</span></span> */}
          <span className='font-semibold text-sm'>Quantity: <span className=' text-base'>{orderData.quantity}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          {/* <span className='font-semibold text-sm'>Address: <span className=' text-base'>{orderData.shipped ? 'Shipped' : 'Not Shipped'}</span></span> */}
          <span className='font-semibold text-sm'>Price/item: <span className=' text-base'>{orderData.price}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>Status:</span>
          <span className={`${orderData.ordered ? ' bg-green-500' : 'bg-yellow-300'} px-2 text-base rounded-2xl pb-1`}>
            {orderData.ordered ? 'Ordered' : 'Pending...'}
          </span>
          {!orderData.ordered && (
            <Button children={'Buy'} className='h-8' onClick={handleBuyClick} />
          )}
        </div>
        {errorMessage && <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>} {/* Display error message if exists */}
      </div>
    </div>
  );
}

export default Orders;
