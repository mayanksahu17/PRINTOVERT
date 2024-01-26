import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

function Layout() {
  return (
    <div className='flex h-screen'> 
      <Header className='sticky top-0 bg-white z-50' />
      {/* <div className='flex-grow overflow-y-auto p-4 bg-blue-200'>
      </div> */}
      <Outlet />
    </div>
  );
}

export default Layout;
