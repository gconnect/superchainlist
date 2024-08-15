'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAppSelector } from '@/lib/hooks';
import { CustomConnectButton } from '../CustomConnectButton';

export const Header = () => {
  const theme = useAppSelector((state: any) => state.theme.themeState);

  return (
    <div className='flex justify-between w-8/12 m-auto'>
      <div className='flex-1 min-w-0 mt-8'>
        <input 
          type='text' 
          className={` p-4 mt-4 ${theme ? '' : 'border border-light_search_outline'} rounded h-12 w-3/4 ml-52 `}
          placeholder='Search for an OP chain'
        />
      </div>

      <div className='flex items-center mt-8'>
        <div className='m-2 flex items-center'>
          <input type='checkbox'/>
          <span className='ml-2'>Include Testnet</span>
        </div>
        <CustomConnectButton isHeader={true} style={`bg-buttonColor rounded text-white`}/>
      </div>
    </div>
  );
};
