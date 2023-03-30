import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='overflow-hidden'>
      <Outlet></Outlet>
    </div>
  )
}
