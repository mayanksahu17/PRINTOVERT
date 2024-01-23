const getAllUserTransactions = async (userId) => {
    const apiUrl = `http://localhost:8000/api/v1/users/${userId}/transactions`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.data; // Assuming your transactions are in a 'data' property
  
    } catch (error) {
      console.error('Error fetching user transactions:', error.message);
      throw error; // You may want to handle or log the error further in your application
    }
  };
  

  export {
    getAllUserTransactions
  }