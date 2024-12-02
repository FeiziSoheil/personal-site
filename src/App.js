import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Light from './Components/Light/Light'
import routes from './Routes'
import { useRoutes } from 'react-router-dom'

export default function App() {
   const router = useRoutes(routes);

  return (
    <div className='bg-primary relative flex flex-col md:flex-row py-4 md:py-14 px-4 md:px-8 gap-4 md:gap-14 min-h-screen'>
      <Light className='absolute top-0 left-0 w-full'/>
      
      {/* Sidebar for mobile: hidden on desktop */}
      <div className='block md:hidden'>
        <SideBar />
      </div>
      
      {/* Sidebar for desktop: hidden on mobile */}
      <div className='hidden md:block md:w-1/4'>
        <SideBar />
      </div>
      
      <div className='w-full md:w-3/4 sm:h-[600px] mt-0  border rounded-3xl py-10 p-4 md:p-8 overflow-y-auto h-screen  no-scrollbar'>
        {router}
      </div>
    </div>
  )
}