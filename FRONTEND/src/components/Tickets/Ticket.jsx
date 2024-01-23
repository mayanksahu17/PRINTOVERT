import React, { useState } from 'react';
import { uploadImage } from '../../actions/Image.js';
import store from '../../store/store.js';
import {addTicket, getAllTicket} from '../../actions/ticket.js'
import { useEffect } from 'react';
import Tickets from './Tickets.jsx'
function Ticket() {
  const user = store.getState().auth.user;
  let userId = user?._id

  const [loading, setLoading] = useState(true); // Added loading state
  const [message, setMessage] = useState(""); // Added loading state


  const [showUploadForm, setShowUploadForm] = useState(false);
  const[tickets , setTickets] = useState(null)
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
    console.log(formData);
    setMessage("Ticket Raising Please wait")
    const response = await addTicket(userId,formData)
    console.log("response" ,response);
      toggleUploadForm()
      setMessage("")
    

  };
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getAllTicket(userId);

        setTickets(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchTickets();
  }, [userId,showUploadForm]);
 

  return (
    <div className='bg-blue-200 w-full h-180'>
      <div className='flex'>
        <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-blue-900 co text-5xl'>Ticket</h1>
        <button
          onClick={toggleUploadForm}
          className='h-10 w-40 rounded-3xl text-white mt-10 ml-12 border bg-blue-700 hover:bg-blue-500 hover:text-white font-semibold'
        >
          Raise a Ticket
        </button>
      </div>
      <p className='ml-12 mt-1'>Raise and Check Ticket</p>

      {showUploadForm && (
        <form
          className='uploadDiving h-520 w-[1300px] border-2 border-blue-500 rounded-2xl border-blue-450/150 font-semibold mt-3 ml-3 mr6 bg-transparent'
          onSubmit={handleSubmit}
        >
          <div className='flex'>
            <div className='flex-col ml-10 mt-1'>
              <h1>Subject :</h1>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                className='h-8 w-[400px] rounded-xl mt-3 text-center'
              />
            </div>

            <div className='flex-col ml-10'>
              <h1> Call Back Number :</h1>
              <input
                type='text'
                name='callBackNumber'
                value={formData.callBackNumber}
                onChange={handleInputChange}
                className='h-8 w-[200px] rounded-xl mt-3 text-center'
              />
            </div>

            <div className='flex-col ml-10'>
              <h1> Query for :</h1>
              <input
                type='text'
                name='query'
                value={formData.query}
                onChange={handleInputChange}
                className='h-8 w-[200px] rounded-xl mt-3 text-center'
              />
            </div>
          </div>

          <h2 className='mt-10 ml-10'>Description</h2>
          <textarea
            name='description'
            id=''
            cols='140'
            rows='4'
            placeholder='  Enter your description'
            value={formData.description}
            onChange={handleInputChange}
            className='mt-1 ml-10 rounded-xl'
          ></textarea>

          <input type='file' name='' id='' onChange={handleFileChange} className='w-[1140px] h-8 ml-10 mt-2 mb-4 border-2' />
          {message&& (<p className='text-blue-700 ml-10'>{message}</p>)}
          <div className='flex ml-10 mb-4'>
            <button
              type='button'
              className='text-blue-700 w-[100px] h-10 rounded-lg mt-6 border-blue-700 border-2 border-solid'
              onClick={toggleUploadForm}
            >
              CANCEL
            </button>
            <button
              type='submit'
              className='text-white ml-4 w-[100px] h-10 rounded-lg mt-6 bg-blue-700 border-white-700 border-2 border-solid'
            >
              CONFIRM
            </button>
          </div>
        </form>
      )}

      <div className='bg-blue-200 w-full h-180 '>
        <div className='bg-blue-700 h-11 w-50 ml-6 mr-6 rounded-t-xl mt-4 '>
          <li className='flex justify-evenly text-white  px-10 text-center p-2 '>
            <ul>Ticket Id</ul>
            <ul>Subject</ul>
            <ul>Createdat</ul>
            <ul>Discription</ul>
            <ul>CallBack Number</ul>
            <ul>Status</ul>
            <ul>Response</ul>
            
          </li>
        </div>
        <div>
        {loading ? (
          <p className='text-blue-700 ml-10' >Loading...</p>
        ) : (
          <div>
            {tickets?.map((ticket) => (
              <Tickets key={ticket._id} ticket={ticket} />
            ))}
          </div>
        )}
    </div>
      </div>
    </div>
  );
}

export default Ticket;
