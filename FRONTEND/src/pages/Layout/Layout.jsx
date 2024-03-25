import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
 import { getUser ,login} from '../../store/authSlice';
 import { useDispatch } from 'react-redux'


function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate("/login");
            return;
        }

        fetch('https://printovert-backend.onrender.com/api/v1/users/current-user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to verify user');
            }
            return response.json();
        })
        .then(data => {
            dispatch(login({ user: data.data, token: token }));
        })
        .catch(error => {
            localStorage.setItem('accessToken',"");
            console.error('Error verifying user:', error);
            console.log("Somthing went wrong plaese login ");
            navigate("/login");
        });
    }, [dispatch, navigate]);

  return (
    <div className='flex h-screen'> 
      <Header className='sticky top-0 bg-white z-50'  />
      <Outlet />
    </div>
  );
}

export default Layout;
