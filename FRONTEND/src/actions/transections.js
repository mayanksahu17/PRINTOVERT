import axios from 'axios';

const getAllUserTransactions = async (userId) => {
  const apiUrl = `/api/v1/users/${userId}/transactions`; // Relative path with proxy setup

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
    });

    if (response.data.success) {
      const transactions = response.data.data; // Assuming your transactions are in a 'data' property
      return transactions;
    } else {
      throw new Error(`Error: ${response.data.message || 'An error occurred'}`);
    }
  } catch (error) {
    console.error('Error fetching user transactions:', error.message);
    throw error; // You may want to handle or log the error further in your application
  }
};


  export {
    getAllUserTransactions
  }