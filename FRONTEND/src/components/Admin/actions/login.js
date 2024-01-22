
const URL = " http://localhost:8000/api/v1/admin/login"
const handleLogin = async(adminData)=>{

    try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adminData),
        });
    
        const data = await response.json();
    
        if (data.success) {
    
          const user = data.data

          return user;
        } else {
         
          console.error('Login failed:', data.message);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
}

export {
    handleLogin
}