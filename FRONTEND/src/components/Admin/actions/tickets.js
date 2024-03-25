import axios from "axios";


const getAllTickets = async()=>{

    const apiURL = `https://printovert-backend.onrender.com/api/v1/users/login/api/v1/admin/get/all-tickects`


    try {
        const response = await axios.get(apiURL, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const data = response.data;
        console.log(data.data);
  
        return data.data;
      } catch (error) {
        console.error('Error getting tickets:', error);
      }
}

export  {getAllTickets}