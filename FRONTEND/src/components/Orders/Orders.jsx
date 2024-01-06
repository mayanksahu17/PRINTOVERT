import React from 'react'

function Orders() {
  return (
    <div className='bg-blue-200 w-full h-180 '>
      <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>All Orders</h1>
      <p className='ml-7 mt-1'>Check your Orders</p>
      <div className='bg-blue-700 h-11 w-50 ml-6 mr-6 rounded-t-xl mt-4 '>
        <li className='flex justify-evenly text-white  px-10 text-center p-2 '>
            <ul>QTY</ul>
            <ul>Order Date</ul>
            <ul>Product Detail</ul>
            <ul>Amount</ul>
            <ul>Status</ul>
            <ul>Tracking ID</ul>
            <ul>Delivery Company</ul>
        </li>
      </div>

      
      <div className='bg-white h-11 w-50 ml-6 mr-6 '>
        <li className='flex justify-evenly text-Black  px-10 text-center p-2 '>
            <ul>1</ul>
            <ul>12-12-2023</ul>
            <ul>view</ul>
            <ul>165</ul>
            <ul>-</ul>
            <ul>12546987456</ul>
            <ul>Blue Dart</ul>
        </li>
      </div>


    </div>
  )
}

export default Orders