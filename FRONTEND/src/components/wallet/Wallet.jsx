import React from 'react'
import { NavLink } from 'react-router-dom'
function Wallet() {
  return (
    
      <div className='bg-blue-200 w-full h-180 '>
        <div className='flex'>
      <h1 className=' font-bold mt-8 ml-7   text-blue-900  text-4xl'>Wallet</h1>
      <NavLink to = "/payment">  <button
       className='h-8 w-40 rounded-3xl text-white mt-10 ml-6 border bg-blue-700  hover:bg-blue-500
        hover:text-white'>Add Balance</button> </NavLink>
      
      </div>
      <p className='ml-7 mt-1'>Check your Wallet</p>


<div className='flex justify-content-between'>
 
<div className=' h-32 w-72 bg-white rounded-xl ml-7 mr-4 mt-5' >

<div className=' h-full w-full'>
<h1 className='text-black font-semibold text-xl ml-5  '>Balance</h1>
<p className='text-sm ml-5 mb-2 '>Total Wallet Available Balance</p>

</div>
<div className='ml-5 -mt-14 text-3xl font-bold'>
  RS 400
</div>
</div>

<div className=' h-32 w-72 bg-white rounded-xl ml-4 mt-5 mr-4' >

<div className=' h-full w-full'>
<h1 className='text-black font-semibold text-xl ml-5  '>Spent</h1>
<p className='text-sm ml-5 mb-2 '>Total spent amount Available </p>

</div>
<div className='ml-5 -mt-14 text-3xl font-bold'>
  RS 400
</div>
</div>

<div className=' h-32 w-72 bg-white rounded-xl ml-4  mt-5 mr-4' >

<div className=' h-full w-full'>
<h1 className='text-black font-semibold text-xl ml-5  '>COD</h1>
<p className='text-sm ml-5 mb-2 '>Total Wallet Available Balance</p>

</div>
<div className='ml-5 -mt-14 text-3xl font-bold'>
  RS 400
</div>
</div>

</div>





<div className='bg-blue-200 w-full h-180 '>
      
      
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







</div>

  )
}

export default Wallet
