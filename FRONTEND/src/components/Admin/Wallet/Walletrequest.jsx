import React, { useEffect, useState } from 'react';
import Requestcard from './Requestcard';
import getAllWalletRequests from '../actions/wallet.js';
import store from '../../../store/store.js';
import { useNavigate } from 'react-router-dom';
function Walletrequest() {
  const [walletRequests, setWalletRequests] = useState([]);
  const navigate = useNavigate()
  const isAuthenticated = store.getState().auth.user
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/admin-login")
     }
    const fetchData = async () => {
      try {
        const response = await getAllWalletRequests();
        setWalletRequests(response); // Set the fetched wallet requests data
      } catch (error) {
        console.error('Error fetching wallet requests:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-blue-200 w-full h-full flex-grow overflow-y-auto'>
      <div className='bg-blue-200 w-full h-180'> 
        <h2 className='font-bold mt-8 ml-7 font-cerebriSans text-3xl text-blue-900'>Wallet Requests</h2>
        <h5 className='text-gray-600 ml-7 font-bold'>Let's have a Tour to the Wallet</h5>
      </div>
      <div className='mt-4'><hr /></div>

      <div className='flex flex-wrap justify-center'>
        {walletRequests?.map((request) => (
          <Requestcard key={request._id} walletRequest={request} />
        ))}
      </div>
    </div>
  );
}

export default Walletrequest;
