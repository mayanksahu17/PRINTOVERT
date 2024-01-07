import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../../components/Admin/Header/Header'
function AdLayout() {
  return (
  <>
  <div className='flex h-[800px]'>
  <Header />
  <Outlet />
  </div>

  </>
  )
}

export default AdLayout