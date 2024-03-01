import { getAllImages } from "./Image";
import axios from 'axios';

const addTicket = async (userId, formData) => {
  try {
    console.log(userId);
    const apiUrl = `/api/v1/users/${userId}/create-ticket`; // Relative path with proxy setup
    
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.success) {
      console.log('Ticket submitted succes  sfully', response.data);
      return response.data.data;
    } else {
      console.error('Error submitting ticket:', response.data.message || 'An error occurred');
    }
  } catch (error) {
    console.error('Unexpected error submitting ticket:', error);
  }
};



const getAllTicket = async (userId) => {
  try {
    console.log(userId);
    const apiUrl = `/api/v1/users/${userId}/tickets`; // Relative path with proxy setup
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response); // Log the entire response

    if (response.data.success) {
      const ticketData = response.data.data.data; // Adjusted to extract data from the Axios response structure
      console.log('Ticket Received successfully', ticketData);

      return ticketData;
    } else {
      console.error('Error Receiving ticket:', response.data.message || 'An error occurred');
    }
  } catch (error) {
    console.error('Unexpected error Receiving ticket:', error);
  }
};

  

export {
    addTicket,
    getAllTicket
}