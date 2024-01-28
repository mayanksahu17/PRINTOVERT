import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../../components/Admin/Header/Header'
function AdLayout() {
  return (
  <>
  <div className='flex h-screen'>
  <Header className= "sticky top-0 bg-white z-50"/>
  <Outlet />
  </div>
  </>
  )
}

export default AdLayout