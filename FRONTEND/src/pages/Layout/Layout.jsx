import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../components/Header/Header'
function Layout() {
  return (
  <>
  <div className='flex h-[800px]'>
  <Header />
  <Outlet />
  </div>

  </>
  )
}

export default Layout