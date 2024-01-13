


const handleLogin = async () => {
  const apiUrl = 'http://localhost:8000/api/v1/users/login';
  const userData = {
    username: 'user4',
    password: 'user4',
  };

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
      // User is successfully logged in
      const user = data.data.user;

   
      console.log('User Data:', user);
     
    
      const refreshToken = user.refreshToken;
      console.log('Refresh Token:', refreshToken);
      return user
      // Handle your authentication state (update state, set cookies, etc.)
      // For example, you might want to redirect the user to a protected route
    } else {
      // Handle login failure
      console.error('Login failed:', data.message);
    }
   
  } catch (error) {
    console.error('Error during login:', error);
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
  




  

  export  {
    handleLogin ,
      registerUser 
      
  }