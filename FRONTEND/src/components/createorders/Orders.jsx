import React from 'react';

function Orders() {
  const orderData = {
    name: 'Y',
    images: [
      "http://res.cloudinary.com/dwyyrm9xw/image/upload/v1705740620/am2aaoawwysjpe2nca5a.jpg",
      "http://res.cloudinary.com/dwyyrm9xw/image/upload/v1705740621/lfvfao5msbcx39ogwu3j.jpg",
      "http://res.cloudinary.com/dwyyrm9xw/image/upload/v1705740623/hi9hha5plrudwsim9pfw.jpg",
      "http://res.cloudinary.com/dwyyrm9xw/image/upload/v1705740625/oij6p9xvybfwc97kkovs.jpg",
    ],
    color: 'x',
    brand: 'x',
    category: 'x',
    description: 'x',
    price: 10,
    stock: 10,
    rating: 2,
    shipped: true,
    delivered: false,
    ordered: false,
    createdAt: '2024-01-20T08:50:26.462Z',
    updatedAt: '2024-01-20T08:50:26.462Z',
  };

  return (
    <div className='h-[380px] w-[280px] bg-white mt-8 ml-8 hover:shadow-gray-600 hover:shadow-2xl rounded-2xl hover:bg-blue-400'>
      <div className='h-[60%] w-[100%] flex flex-wrap justify-center items-center'>
        <img className='cover border-2 border-solid border-black rounded-xl h-[90%] w-[90%] bg-white' src={orderData.images[0]} alt="" />
      </div>
      <div className='flex flex-col justify-evenly h-[40%] items-center hover:bg-blue-400'>
        <div className='flex justify-between items-center w-[80%]'>
          <span className='text-sm'>name: <span className='font-bold text-base'>Hello</span></span>
          <span className='text-sm'>Size: <span className='font-bold text-base'>Hello</span></span>
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
