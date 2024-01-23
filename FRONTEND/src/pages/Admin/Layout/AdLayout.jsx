import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../../components/Admin/Header/Header'
function AdLayout() {
  return (
  <>
  <div className='flex  overflow-hidden'>
  <Header />
  <Outlet />
  </div>
  </>
  )
}

export default AdLayout