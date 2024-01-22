import React from 'react';

function Orders({ orderData }) {
  return (
    <div className='h-[450px] w-[280px] bg-white mt-8 ml-4 hover:shadow-gray-600 hover:shadow-2xl rounded-2xl '>
      <div className='h-[60%] w-[100%] flex flex-wrap justify-center items-center'>
        <img className='cover border-2 border-solid border-black rounded-xl h-[90%] w-[90%] bg-white' src={orderData.image0} alt="" />
      </div>
      <div className='flex flex-col justify-evenly h-[40%] items-center '>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>name: <span className='font-bold text-base'>{orderData.name}</span></span>
          <span className='text-sm'>Size: <span className='font-bold text-base'>{orderData.size}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>Color: <span className='font-bold text-base'>{orderData.color}</span></span>
          <span className='text-sm'>Quantity: <span className='font-bold text-base'>{orderData.stock}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>Address: <span className='font-bold text-base'>{orderData.shipped ? 'Shipped' : 'Not Shipped'}</span></span>
          <span className='text-sm'>Price/item: <span className='font-bold text-base'>{orderData.price}</span></span>
        </div>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>Status:</span>
          <span className={`bg-${orderData.ordered ? 'green' : 'yellow'}-300 px-3 text-base rounded-2xl pb-1`}>
            {orderData.ordered ? 'Ordered' : 'Pending...'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Orders;
