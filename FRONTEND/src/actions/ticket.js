import { getAllImages } from "./Image";



const addTicket = async (userId,formData)=>{
    
    try {
        console.log(userId);
        const apiUrl = `http://localhost:8000/api/v1/users/${userId}/create-ticket`;
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          console.log('Ticket submitted successfully', response);
          return response.data;
        } else {
          console.error('Error submitting ticket:', response.statusText);
        }
      } catch (error) {
        console.error('Unexpected error submitting ticket:', error);
      }
}
const getAllTicket = async (userId) => {
    try {
      console.log(userId);
      const apiUrl = `http://localhost:8000/api/v1/users/${userId}/tickets`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response:', response); // Log the entire response
  
      if (response.ok) {
        const data = await response.json(); // Extract JSON data from the response
        console.log('Ticket Received successfully', data.data.data);

        return data.data.data;
      } else {
        console.error('Error Receiving ticket:', response.statusText);
      }
    } catch (error) {
      console.error('Unexpected error Receiving ticket:', error);
    }
  };
  

export {
    addTicket,
    getAllTicket
}