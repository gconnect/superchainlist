import React from 'react'
import Image from 'next/image'
import { MenuItems } from './MenuItems'
export const SideBar: React.FC = () => {
  return (
    <div className='border-r h-screen p-4 m-4 w-1/3'>
        <Image 
          src={'./assets/superchainlist-logo.svg'} 
          alt='superchain-list-logo' 
          width={300} 
          height={300} 
          />
        <p className='my-2 '>Unified Health Hub for OP Stack Chains</p>
        <p className='my-8 text-justify'>SuperchainList is a comprehensive health check 
          dashboard designed to provide real-time network health status and 
          essential information for the various OP stack chains. </p>
          <MenuItems/>
    </div>
  )
}
