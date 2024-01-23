import React from 'react'

function AdOrders() {

    return (
        <>
            
            <div  className='h-[100%] w-[100%] bg-blue-200 ' >
      <div>
        
        <h1 className='font-bold mt-8 ml-8  text-blue font-cerebriSans text-blue-900 co text-5xl'>Customer Order Pending</h1>
        <h5 className='text-black      ml-10  '>This product is Pending</h5>
           
        </div>
      <div className='h-96 w-72 bg-white mt-20 ml-20 hover:shadow-gray-600 hover:shadow-2xl rounded-2xl hover:bg-blue-400'>
      <div className='h-[60%] w-[100%] flex justify-center items-center '>
        <img className='cover border-2 border-solid border-black rounded-xl h-[90%] w-[90%] bg-white' src="" alt="" />
      </div >
     <div className='flex flex-col justify-evenly h-[40%] items-center hover:bg-blue-400'>
     <div  className='flex justify-between items-center  w-[80%] '>
        <span>username: <span> hello</span></span>
        <span>size: <span> hello</span></span>
      </div>
      <div  className='flex justify-between items-center   w-[80%] '>
        <span>colour: <span>hello</span></span>
        <span>quantity: <span>hello</span></span>
      </div>
      <div  className='flex justify-between items-center w-[80%] '>
        <span>address: <span>hello</span></span>
        <span>price/item: <span>hello</span></span>
      </div>
      <div  className='flex justify-between items-center w-[80%] '>
        <span>status:</span>
        <span className='bg-yellow-300 px-7 text-lg rounded-2xl pb-1'>panding...</span>
      </div>
     </div>
    </div>
<div className='flex justify-evenly mt-32 mb-48 '>
  <button className='border-2 border-black border-solid px-16 py-2 rounded-xl hover:bg-blue-600 hover:text-white text-blue-600'>Select Item</button>
  <button className='border-2 border-black border-solid px-16 py-2 rounded-xl  hover:bg-red-600 hover:text-white text-blue-600'>Delete Item</button>
</div>
</div>

        </>
      )
}

export default  AdOrders