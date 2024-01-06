import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
function Paymentpage() {
    return (
        <>
            <div className='bg-blue-200 w-full h-180'> 
            <div className='w-full flex'>
                <NavLink to ="/wallet">
                <div className='w-10 hover:bg-blue-600 hover:text-white rounded-lg text-center  mt-10 ml-8'>
                      <HiArrowNarrowLeft className='text-3xl ml-1' /> </div></NavLink>
           
            <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900  text-5xl'>Wallet</h1>
  
  </div> 
  <div className='ml-60'>

<div className=' mt-5 ml-48 ' >
    <div className='text-4xl text-black font-bold ml-12'>Scan & Pay</div>
    <div className=' text-black '>Enter your amount and Submit the Screenshot </div>
    <div className=' w-80 bg-white h-[450px]  justify-center py-5 rounded-2xl mt-2'>
    <div className='text-center font-bold text-2xl' >Brand Name</div>
    <img className='w-72 h-72 p-2 mt-10 border-gray-700 border-2 border-solid ml-4' src="https://imgs.search.brave.com/meDyiZHP6-aILvxlpWUrR8L_Ua4aKjibGy8G_r1gUh4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9xci1jb2RlXzg2/OTQyMy0xMDc3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" alt="" />
    <div className='text-center mt-3 font-semi  bold'>Scan the QR with any <br /> BharatQR / UPI enabled app</div>
    </div>

<div className='flex flex-col'>
    

  <input type="number" placeholder="Enter amount" className="w-[200px] h-8 rounded-xl mt-5 font-semibold text-center bg-white" min="0" />

<input  type = "file" placeholder='  Enter screenshort' className='w-[300px] h-10 rounded-xl mt-5 PY-2 bg-tranperent  border-gray-700 border-2 border-solid    '/> 
<div className='flex'>
<button className='text-blue-700 w-[100px] h-10 rounded-lg mt-6 border-blue-700 border-2 border-solid  '>CANCLE</button>
<button className='text-white ml-4 w-[100px] h-10 rounded-lg mt-6 bg-blue-700 border-white-700 border-2 border-solid  '>CONFIRM</button>

</div>
  </div>

</div>




</div>


            </div>    
        </>
    
  )
}

export default Paymentpage