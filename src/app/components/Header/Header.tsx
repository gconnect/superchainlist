'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAppSelector } from '@/lib/hooks';

export const Header = () => {
  const theme = useAppSelector((state: any) => state.theme.themeState);

  return (
    <div className='flex justify-between m-8'>
      <div className='flex-1 min-w-0'>
        <input 
          type='text' 
          className={`p-4 ${theme ? '' : 'border border-light_search_outline'} rounded h-12 w-3/4`}
          placeholder='Search for an OP chain'
        />
      </div>

      <div className='flex items-center'>
        <div className='m-2 flex items-center'>
          <input type='checkbox'/>
          <span className='ml-2'>Include Testnet</span>
        </div>
        <ConnectButton/>
      </div>
    </div>
  );
};
