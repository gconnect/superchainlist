'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { CustomConnectButton } from '../CustomConnectButton';
import { CgMenuLeft } from "react-icons/cg";
import { SideBar } from '../Sidebar/SideBar';

export const Header = () => {
  const theme = useAppSelector((state: any) => state.theme.themeState);
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className='md:hidden mx-4 flex my-8 justify-between items-center'>
        <CgMenuLeft className='mr-16' size={24} onClick={() => setShow(!show)} />
        <CustomConnectButton isHeader={true} style={`bg-buttonColor rounded text-white`}/>
      </div>
      {show ? 
      <div className='absolute w-full h-full'>
        <SideBar/>
      </div>
       : null}
      <input 
          type='text' 
          className={`p-4 mt-4 mx-4 ${theme ? '' : 'border border-light_search_outline'} md:w-11/12 hidden rounded h-12`}
          placeholder='Search for an OP chain'
        /> 
    <div className={`justify-between  mx-8 ${!show ? 'md:flex' : 'hidden'}`}>   
      <div className='md:flex flex-1 min-w-0 mt-8 hidden'>
        <input 
          type='text' 
          className={` p-4 mt-4 ${theme ? '' : 'border border-light_search_outline'} w-7/12 rounded h-12`}
          placeholder='Search for an OP chain'
        />
      </div>

      <div className='flex items-center mt-8'>
        <div className='m-2 md:flex items-center hidden'>
          <input type='checkbox'/>
          <span className='ml-2'>Include Testnet</span>
        </div>
        <CustomConnectButton isHeader={true} style={`bg-buttonColor rounded text-white md:block hidden`}/>
      </div>
    </div>
    </div>
  );
}


