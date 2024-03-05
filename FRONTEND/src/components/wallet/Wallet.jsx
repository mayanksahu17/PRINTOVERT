import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import store from '../../store/store.js'
import {getAllUserTransactions} from '../../actions/transections.js'
import TransactionItem from './TransactionItem.jsx';
function Wallet() {
  const [transactions, setTransactions] = useState([]);
  const user =  store.getState().auth.user
  let wallet = user?.walletBalance || 0 
  let spent = user?.spent || 0
  const userId = user?._id

const navigate = useNavigate()


useEffect(() => {
  if (!user) {
    navigate("/login");
}
    // Fetch user transactions when the component mounts
    const fetchTransactions = async () => {
      try {
        const userTransactions = await getAllUserTransactions(userId);

        setTransactions(userTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
        // Handle the error appropriately
      }
    };

    fetchTransactions();
  }, [userId]);
 
  return (
    
      <div className='flex-grow overflow-y-auto p-4 bg-blue-200 w-full h-180 '>
        <div className='flex'>
      
      <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Wallet</h1>
      <NavLink to = "/payment">  <button
       className='h-10 w-40 rounded-3xl text-white mt-10 ml-10 border bg-blue-700  hover:bg-blue-500
        hover:text-white font-semibold'>Add Balance</button> </NavLink>
      
      </div>
      <p className='ml-12 mt-1'>Check your Wallet</p>


      <div className='flex justify-content-between'>
      
      <div className=' h-32 w-72 bg-white rounded-xl ml-7 mr-4 mt-5' >

      <div className=' h-full w-full'>
      <h1 className='text-black font-semibold text-xl ml-5  '>Balance</h1>
      <p className='text-sm ml-5 mb-2 '>Total Wallet Available Balance</p>

      </div>
      <div className='ml-5 -mt-14 text-3xl font-bold'>
        {wallet}
      </div>
      </div>

      <div className=' h-32 w-72 bg-white rounded-xl ml-4 mt-5 mr-4' >

      <div className=' h-full w-full'>
      <h1 className='text-black font-semibold text-xl ml-5  '>Spent</h1>
      <p className='text-sm ml-5 mb-2 '>Total spent amount Available </p>

      </div>
          <div className='ml-5 -mt-14 text-3xl font-bold'>
           {spent}
          </div>
      </div>  

      <div className=' h-32 w-72 bg-white rounded-xl ml-4  mt-5 mr-4' >

      <div className=' h-full w-full'>
      <h1 className='text-black font-semibold text-xl ml-5  '>COD</h1>
      <p className='text-sm ml-5 mb-2 '>Total Wallet Available Balance</p>

      </div>
      <div className='ml-5 -mt-14 text-3xl font-bold'>
      {wallet}
      </div>
      </div>

      </div>





<div className='bg-blue-200 w-full h-180 '>

      
      <div className='bg-blue-700 h-11 w-50 ml-6 mr-6 rounded-t-xl mt-4 '>
        <li className='flex justify-evenly text-white  px-10 text-center p-2 '>
            <ul>No.</ul>
            <ul>Amount</ul>
            <ul>Order Date</ul>
            <ul>Response</ul>
            <ul>Tracking ID</ul>
            <ul>Delivery Company</ul>
        </li>
      </div>

      {transactions.map((transaction, index) => (
          <TransactionItem key={transaction._id} transaction={transaction} index={index} />
        ))}


    </div>







</div>

  )
}

export default Wallet
