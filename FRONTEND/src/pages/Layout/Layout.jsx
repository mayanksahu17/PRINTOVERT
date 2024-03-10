import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library
import Header from '../../components/Header/Header';
 import { getUser ,login} from '../../store/authSlice';
 import { useDispatch } from 'react-redux'


function Layout() {
  const ACCESS_TOKEN_SECRET = "abcdefghijklmno^@!pqrstuvwx%^&yzABCDEFGHIJ|||+_*&^%$@!KLMNOPQRSTUVWX*&^%$@!YZ012";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);


  return (
    <div className='flex h-screen'> 
      <Header className='sticky top-0 bg-white z-50'  />
      <Outlet />
    </div>
  );
}

export default Layout;
