import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../components/Header/Header'
function Layout() {
  return (
  <>
  <div className='flex'>
  <Header />
  <Outlet />
  </div>

  </>
  )
}

export default Layout