import axios from 'axios';
// const jwt = require('jsonwebtoken');
// import conf from '../conf/config';

import Cookies from 'js-cookie';
const ACCESS_TOKEN= "abcdefghijklmno^@!pqrstuvwx%^&yzABCDEFGHIJ|||+_*&^%$@!KLMNOPQRSTUVWX*&^%$@!YZ012"

const handleLogin = async (userData) => {
  const apiUrl = 'https://printovert-backend.onrender.com/api/v1/users/login';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Login request failed');
    }

    const data = await response.json();
  
    localStorage.setItem("accessToken", data.data.accessToken)
    localStorage.setItem("refreshToken",data.data.refreshToken)
    if (data.success) {
      const user = data.data.user;

      console.log('User Data:', user);

      const refreshToken = user.refreshToken;
   
    
     
     

      return user;
    } else {
      // Handle login failure
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};



// Function to refresh access token using the refresh token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await axios.post('/api/v1/refresh-token', { refreshToken });

    if (response.data.success) {
      const newAccessToken = response.data.data.accessToken;

      // Update the access token in localStorage
      localStorage.setItem('accessToken', newAccessToken);

      console.log('Access Token Refreshed:', newAccessToken);
    } else {
      console.error('Failed to refresh access token:', response.data.message);
    }
  } catch (error) {
    console.error('Error refreshing access token:', error.message);
  }
};


const registerUser = async (userData) => {
  try {
    const response = await fetch('/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      if (response.status === 409) {
        console.error('Registration failed: User already exists');
        throw new Error('Registration failed: User already exists');
      } else {
        console.error('Registration failed:', response.statusText);
        throw new Error('Registration failed');
      }
    }

    const responseData = await response.json();

    if (responseData.success) {
      console.log('User registered successfully:', responseData);

      // Optionally, you can handle tokens and localStorage as needed

      return responseData;
    } else {
      console.error('Registration failed:', responseData.message);
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('An error occurred during registration:', error.message);
    throw error;
  }
};




const updateProfile = async (userId, userData) => {
  try {
    const apiUrl = `/api/v1/users/${userId}/update-account`;

    const response = await axios.patch(apiUrl, userData);

    if (response.data.success) {
      console.log('Profile updated successfully:', response.data);
      return response.data;
    } else {
      console.error('Failed to update profile:', response.statusText);
      // Handle failure (e.g., show an error message)
      return null;
    }
  } catch (error) {
    console.error('Unexpected error updating profile:', error);
    // Handle unexpected errors
    return null;
  }
};


      const getUser = async()=>{
        const token = localStorage.getItem('accessToken');

        console.log(token);
        fetch('/api/v1/users/current-user', {
          method: 'GET',
          headers: {
            'Authorization':`Bearer${token}`
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to verify user');
          }
          return response.json(); // assuming response is JSON
        })
        .then(data => {
          console.log('User verified:', data);
          return  data.data;
          // dispatch(login({ user: data.data, token: token }));

        })
        .catch(error => {
          console.error('Error verifying user:', error);
        });}

export {
  handleLogin,
  registerUser,
  refreshAccessToken,
  updateProfile,
  getUser
}
