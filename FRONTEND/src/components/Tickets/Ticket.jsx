import React, { useState } from 'react';
import { uploadImage } from '../../actions/Image.js';
import store from '../../store/store.js';
import { addTicket, getAllTicket } from '../../actions/ticket.js';
import { useEffect } from 'react';
import Tickets from './Tickets.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
function Ticket() {
  const user = store.getState().auth.user;
  let userId = user?._id;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [tickets, setTickets] = useState(null);
  const [formData, setFormData] = useState({
    subject: '',
    callBackNumber: '',
    query: '',
    description: '',
    image: '',
  });

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const imageURL = await uploadImage(file, userId);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: imageURL.data.imageURL,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Ticket Raising Please wait");
    const response = await addTicket(userId, formData);
    toggleUploadForm();
    setMessage("");
  };


    const navigate = useNavigate()

  
  useEffect(() => {
    if (!user) {
      navigate("/login");
  }
    const fetchTickets = async () => {
      try {
        const data = await getAllTicket(userId);
        setTickets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, [userId, showUploadForm]);

  return (
    <div className='p-4 bg-blue-200 min-h-screen h-screen w-screen'>
      <h1 className='text-3xl font-bold text-blue-900 mt-8 mb-4'>Ticket</h1>
      <button
        onClick={toggleUploadForm}
        className='w-full h-10 text-white bg-blue-700 rounded-lg'
      >
        Raise a Ticket
      </button>

      {showUploadForm && (
        <form onSubmit={handleSubmit} className='mt-4'>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleInputChange}
            placeholder='Subject'
            className='w-full px-4 py-2 mb-2 border rounded-lg'
          />
          <input
            type='text'
            name='callBackNumber'
            value={formData.callBackNumber}
            onChange={handleInputChange}
            placeholder='Call Back Number'
            className='w-full px-4 py-2 mb-2 border rounded-lg'
          />
          <input
            type='text'
            name='query'
            value={formData.query}
            onChange={handleInputChange}
            placeholder='Query for'
            className='w-full px-4 py-2 mb-2 border rounded-lg'
          />
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Description'
            rows='4'
            className='w-full px-4 py-2 mb-2 border rounded-lg'
          ></textarea>
          <input
            type='file'
            onChange={handleFileChange}
            className='w-full px-4 py-2 mb-2 border rounded-lg'
          />
          {message && <p className='text-blue-700'>{message}</p>}
          <div className='flex justify-end space-x-4'>
            <button
              type='button'
              className='w-28 h-10 text-blue-700 border border-blue-700 rounded-lg'
              onClick={toggleUploadForm}
            >
              CANCEL
            </button>
            <button
              type='submit'
              className='w-28 h-10 bg-blue-700 text-white rounded-lg'
            >
              CONFIRM
            </button>
          </div>
        </form>
      )}

      <div className='mt-4'>
        {loading ? (
          <p className='text-blue-700'>Loading...</p>
        ) : (
          <div>
            {tickets?.map((ticket) => (
              <Tickets key={ticket._id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticket;
