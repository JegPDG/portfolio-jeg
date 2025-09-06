import React from 'react'
import { Outlet } from 'react-router'
import NavigationBar from '../components/medium/NavigationBar'

const MainLayout = () => {
  return (
    <div className='relative'>
      {/* Navigation bar */}
      <div className='fixed top-0 left-0 w-full z-50'>
        <NavigationBar></NavigationBar>
      </div>

      {/* Main contents */}
      <div className='pt-16'>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default MainLayout