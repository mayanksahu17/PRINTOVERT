import axios from 'axios';


  

const handleLogin = async (userData) => {
  const apiUrl = 'http://localhost:8000/api/v1/users/login';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data.success) {
  
      const user = data.data.user;

      console.log('User Data:', user);

      const refreshToken = user.refreshToken;
      const accessToken = user.accessToken;

 
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);

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

    const response = await axios.post('http://localhost:8000/api/v1/refresh-token', { refreshToken });

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
    const response = await fetch('http://localhost:8000/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('User registered successfully:', responseData);

      const user = responseData.data.user;
      // const refreshToken = user.refreshToken;
      // const accessToken = user.accessToken;

      // Store tokens in localStorage
      // localStorage.setItem('accessToken', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);

      // console.log('Access Token:', accessToken);
      // console.log('Refresh Token:', refreshToken);

      return responseData;
    } else if (response.status === 409) {
      console.error('Registration failed: User already exists');
      throw new Error('Registration failed: User already exists');
    } else {
      console.error('Registration failed:', response.statusText);
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('An error occurred during registration:', error.message);
    throw error;
  }
};


export {
  handleLogin,
  registerUser,
  refreshAccessToken
}