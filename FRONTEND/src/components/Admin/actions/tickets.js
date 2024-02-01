import axios from "axios";


const getAllTickets = async()=>{

    const apiURL = `https://3wrmxn2x-8000.inc1.devtunnels.ms/api/v1/admin/get/all-tickects`


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