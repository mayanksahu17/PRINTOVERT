import React, { useEffect, useState } from 'react';
import Requestcard from './Requestcard';
import { addwalletamount, getAllWalletRequests } from '../actions/wallet.js';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Walletrequest() {
  const [walletRequests, setWalletRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [isAuthenticated, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      if (!isAuthenticated) {
        navigate("/admin/admin-login");
        return; 
      }
      const response = await getAllWalletRequests();
      setWalletRequests(response); 
    } catch (error) {
      console.error('Error fetching wallet requests:', error);
      setError('Error fetching wallet requests');
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className='bg-blue-200 w-full h-full flex-grow overflow-y-auto'>
      <div className='bg-blue-200 w-full h-180'>
        <h2 className='font-bold mt-8 ml-7 font-cerebriSans text-3xl text-blue-900'>Wallet Requests</h2>
        <h5 className='text-gray-600 ml-7 font-bold'>Let's have a Tour to the Wallet</h5>
      </div>
      <div className='mt-4'><hr /></div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {!loading && !error && (
        <div className='flex flex-wrap justify-center'>
          {walletRequests?.map((request) => (
            <Requestcard 
              key={request._id} 
              walletRequest={request} 
              handleApprove={() => handleApprove(request.amount, request.userid, request._id)} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Walletrequest;
