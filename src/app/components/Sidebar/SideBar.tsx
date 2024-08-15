'use client'
import React from 'react'
import Image from 'next/image'
import { MenuItems } from './MenuItems'
import {  useAppSelector } from "@/lib/hooks";
import { SuperchainListLogo } from '../svg/SuperchainListLogo';

export const SideBar: React.FC = () => {
  const theme = useAppSelector((state: any) => state.theme.themeState);

  return (
    <div className={`border-r ${theme ? 'border-r-slate-500 side-dark ' : 'side-light'} h-full p-4`}>    
    {/* <div className={`fixed top-0 left-0 border-r ${theme ? 'border-r-slate-500 side-dark ' : 'side-light'} h-screen p-4 w-3/12`}>     */}
       <SuperchainListLogo style={ theme ? '#B80018' : 'white'}/>  
        <p className='my-2 '>Unified Health Hub for OP Stack Chains</p>
        <p className='my-8 text-justify hyphens-auto'>SuperchainList is a comprehensive health check 
          dashboard designed to provide real-time network health status and 
         <br/> essential information for the various OP stack chains. </p>
          <MenuItems/>
    </div>
  )
}
