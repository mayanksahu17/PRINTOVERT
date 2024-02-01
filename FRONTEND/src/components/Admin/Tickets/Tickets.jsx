import React, { useEffect, useState } from 'react';
import { getAllTickets } from '../../Admin/actions/tickets.js';
import store from '../../../store/store.js'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const  user = store.getState().auth.user
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/admin-login");
      return; 
    }
    getAllTickets()
      .then(response => {
        // Assuming response.data contains the ticket data
        setTickets(response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
       
        setError('An error occurred while fetching tickets.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full bg-blue-200 flex-grow overflow-y-auto p-4">
         <div>
        <h1 className="font-bold mt-8 ml-8 text-blue font-cerebriSans text-blue-900 co text-5xl">Tickets</h1>
        <h5 className="text-black ml-10">Let's have the tour to the Tickets</h5>
      </div>
      <hr  className='mt-3'/>
      {loading &&  <p className='text-black font-semibold text-xl ml-7  mt-2'> Tickets are Loading.</p>} 

      <div className='flex flex-wrap '>

      {tickets?.map(ticket => (
        <div key={ticket._id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-[550px]  mt-5 ml-3 flex">
          <div className=''>
          <h2 className="text-xl font-bold mb-2">{ticket.subject}</h2>
          <p className="text-gray-600 mb-2">Status: {ticket.status}</p>
          <p className="text-gray-600 mb-2">Callback Number: {ticket.callBackNumber}</p>
          <p className="text-gray-600 mb-2">Response: {ticket.response}</p>
          <p className="text-gray-600 mb-2">Description: {ticket.description}</p>
          <p className="text-gray-600 mb-2">Image : <a className='text-blue-400' > go to image</a></p>
          <p className="text-gray-600 mb-2">Created At: {new Date(ticket.createdAt).toLocaleString()}</p>
          <p className="text-gray-600 mb-2">Updated At: {new Date(ticket.updatedAt).toLocaleString()}</p>
          </div> 
          <div className='border-2 border-black h-full w-full'>
            <img src= {ticket.image} alt=""  />
          </div>
      
        </div>
      ))}
      </div>
    </div>
  );
}

export default Tickets;
