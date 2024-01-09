import axios from 'axios'

//  const API_BASE_URL = String(import.meta.env.API_BASE_URL)


const api = axios.create({
    baseURL: "/api/v1/users",
    headers: {
      'Content-Type': 'application/json',
      // You can set other headers if needed, such as authorization headers, etc.
    },
  });

 


const loginUser = async (userData) => {
  try {
    //   console.log("login",userData);
    // const response = await api.post('/login', userData);
    // console.log(response.data);
    // return response.data;

    const response  = await axios.post('/api/v1/users/login',userData)
    console.log(response.data);

  } catch (error) {
   
    console.log(error.response.data);
    throw error.response.data;
  }
};

export  {
    loginUser
}