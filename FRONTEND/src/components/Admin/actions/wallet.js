import axios from 'axios';

const url = `http://localhost:8000/api/v1/admin/get-wallet-requests`;

const getAllWalletRequests = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data); // Log the response data
    return response.data.data; // Return the response data if needed
  } catch (error) {
    console.error('Error fetching wallet requests:', error);
    throw error; // Re-throw the error to handle it outside
  }
};

export default getAllWalletRequests;

