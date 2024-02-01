import React from 'react';
import { addwalletamount, getAllWalletRequests } from '../actions/wallet.js';

function Requestcard({ walletRequest  }) {
  const { _id, image, userId, amount, createdAt, updatedAt,status } = walletRequest;


  
  const handleApprove = async (amount, userId, requestId) => {
    try {
      console.log("function");
      setLoading(true);
      setError(null);
      await addwalletamount(amount, userId, requestId); 
      fetchData();
    } catch (error) {
      console.error('Error adding wallet amount:', error);
      setError('Error adding wallet amount');
    } finally {
      setLoading(false);
    }
  };
  const handleReject = async (amount, userId, requestId) => {
    try {
      console.log("function");
      setLoading(true);
      setError(null);
      await addwalletamount(amount, userId, requestId); 
      fetchData();
    } catch (error) {
      console.error('Error adding wallet amount:', error);
      setError('Error adding wallet amount');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='w-[350px] ml-10 bg-gray-100 rounded-xl mt-3'>
      <div className='h-72 w-72 rounded mt-10 mr-7 ml-7'>
        <img src={image} alt='' className='h-full w-full rounded' />
      </div>
      <div className='font-semibold ml-7'>
        <p>Status: {status}</p>
        <p>User-Id: {userId}</p>
        <p>Amount Request: ${amount}</p>
      </div>
      <div className='flex mt-4 mb-10'>
        <div className='w-[50%] flex justify-between mb-3'>
          <button onClick={handleApprove(walletRequest.amount, walletRequest.userid, walletRequest._id)} className='ml-8 rounded-2xl p-2 w-[80%] h-8 text-center bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 font-semibold'>
            Approve
          </button>
        </div>
        <div className='w-[50%] flex justify-between mb-3 mr-3'>
          <button  onClick={handleReject} className='ml-10 rounded-2xl p-2 w-52 h-8 bg-white hover:bg-red-600 hover:text-white border-gray-600 border-2 font-semibold'>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Requestcard;
