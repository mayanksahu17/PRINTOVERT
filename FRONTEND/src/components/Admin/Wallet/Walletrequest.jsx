import React from 'react'

function Walletrequest() {
  return (
    <>
    
    <div  className='bg-blue-200 w-[100%] h-[100%]'>
  
    <div className='bg-blue-200 w-full h-180'> 
                <h2 className='font-bold mt-8 ml-7 font-cerebriSans text-3xl text-blue-900'>Wallet Reqeuests</h2>
                <h5 className='text-gray-600 ml-7 font-bold '>Let's have a Tour to the Wallet</h5>
                </div>
   <div className='mt-4'><hr /></div>


   <div className='w-[1150px] flex mt-5 ml-10 h-80 bg-gray-100 rounded-xl'>
<div className='h-72  w-72 rounded-xl mt-5 mr-5 ml-5 bg-blue-300'></div>
<div className='h-72  w-72 rounded-xl mt-5 bg-blue-300'></div>

<div className='flex mt-64 ml-32'>
<div className='w-[50%] flex justify-between'><button className='ml-8 rounded-2xl p-2 w-[80%] h-8 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 font-semibold'><div className=' -mt-2'>Approve</div></button></div>
<div className='w-[50%] flex justify-between'><button className='ml-10 rounded-2xl p-2  w-52 h-8  bg-white hover:bg-blue-600 hover:text-white  border-gray-600 border-2 font-semibold'><div className=' -mt-2'> Reject</div></button> </div>
</div>

   </div>


  
  
    </div>
      
      
     
    
    
    </>
      
    )
}

export default Walletrequest