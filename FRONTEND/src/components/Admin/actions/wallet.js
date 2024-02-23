import axios from 'axios';

const url = `/api/v1/admin/get-wallet-requests`;

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



const addwalletamount = async(amount, userId , requestId) => {
  const apiUrl = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/add-wallet-amount`;
  console.log({  amount, userId , requestId});
  try {
    const response = await axios.post(apiUrl, { amount, userId, requestId });
    
    // Handle success response
    if (response.data.success) {
      console.log('Wallet amount added successfully:', response.data.message);
      // You can perform additional actions here if needed
    } else {
      console.error('Failed to add wallet amount:', response.data.message);
      // Handle the failure case appropriately
    }
  } catch (error) {
    // Handle the error case
    console.error('Error adding wallet amount:', error);
  }
};

 const rejectRequest =async (userId,requestId)=>{
  const apiUrl = `/api/v1/admin/add-wallet-amount`;
  
  try {
    const response = await axios.post(apiUrl, { amount, userId, requestId });
    
    if (response.data.success) {
      console.log('Wallet amount added successfully:', response.data.message);
    } else {
      console.error('Failed to add wallet amount:', response.data.message);
      
    }
  } catch (error) {
    console.error('Error adding wallet amount:', error);
  }
 } 




export { 
  addwalletamount,
  getAllWalletRequests,
  rejectRequest}

