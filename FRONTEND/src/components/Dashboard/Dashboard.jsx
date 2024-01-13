import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { NavLink , useNavigate} from 'react-router-dom';
import store from '../../store/store.js';
function Dashboard() {
const navigate = useNavigate()
    const user = store.getState().auth?.user;
    let spent = user?.spent || 0
    let order = user?.orders.length || 0
    let wallet = user?.walletBalance || 0 
    let totalOrder = user?.totalOrders || 0

    if(!user){
        navigate("/login")
    }
    console.log("user at dahboard " ,user);
    

  return (
        <>
        
    
      
       
        <div className='bg-blue-200 w-full h-[800px]'> 
            <h2 className='font-bold mt-8 ml-7 font-cerebriSans text-3xl text-blue-900'>Main Dashboard</h2>
            <h5 className='text-gray-600 ml-7 font-bold '>Let's have a Tour to the Dashboard</h5>

            <div className='flex flex-wrap'>

            <div className=' bg-white h-28 ml-7 mt-10 rounded-2xl w-64'>
           
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Spent</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>${spent}</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Total orders</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>{totalOrder}</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Wallet Balance</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>${wallet}</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Active Orders</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>0</h2>
            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Wallet Balance</h3>
                <h4 className='ml-6 text-lg'>${wallet}</h4> 
                <NavLink to = "/wallet">
                <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View History</button>
                </NavLink>
                <NavLink to = "/payment">
                <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-8 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Add Amount</button>
                </NavLink>
               

            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Create a new Order</h3>
                <NavLink to =  "/create-orders">
                <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Create a new Order</button>
                </NavLink>
               
            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>My Orders</h3>
                <NavLink to =  "/orders">
                <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View all Orders</button>
                </NavLink>
            </div>
            
            <div className=' bg-white h-80 w-80 ml-7 mt-5 rounded-2xl'>

                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Contact Support</h3>
                <div className='text-9xl ml-24 mt-6'> <RiCustomerService2Fill/></div>
              <NavLink to =  "/contact-us">
                <button className='h-10 w-44 rounded-3xl text-black mt-20 ml-5 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Contact Us</button>
                </NavLink>
            </div>

            </div>
           


            </div>




           
        </>
    
  )
}

export default Dashboard



