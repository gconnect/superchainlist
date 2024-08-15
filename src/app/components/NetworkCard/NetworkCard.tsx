import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {  useAppSelector } from "@/lib/hooks";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { CustomConnectButton } from '../CustomConnectButton';
import { useEthersSigner } from '@/utils/useEtherSigner';

export const NetworkCard = () => {
  const theme = useAppSelector((state: any) => state.theme.themeState);
 
  return (
    <div className='flex md:p-4 p-2'>
      <div className={`flex flex-col ${theme ? 'dark-card-1' : 'light-card-1'} rounded-tl-md rounded-bl-md  md:p-8 p-2 text-center items-center justify-center shadow-lg`}>
        <p>Current Block</p>
        <p className='text-2xl'>1234565675</p>
      </div>
      <div className={`${theme ? 'dark-card-2' : 'light-card-2'} rounded-tr-md rounded-br-md shadow-lg md:p-8 p-2`}>
        <div className='flex justify-between p-0'>
          <Image className='' src={'./assets/eth-icon.svg'} alt='eth' width={24} height={24}/>
          <p className='m-2'>Base Mainnet</p>
          <Image src={'./assets/round-circle.svg'} alt='eth' width={24} height={24}/>
        </div>
        <div className='flex justify-between m-2'>
          <p>ChainId</p>
          <p>Currency</p>
        </div>
        <div className='flex justify-between m-2'>
          <p>1 (0X1)</p>
          <p>Eth</p>
        </div>
        <div className='flex justify-center my-4'>
        <CustomConnectButton isHeader={false} style={theme ? ' bg-transparent border border-white rounded-full' :
                   'bg-transparent border border-red-400 text-red-400 rounded-full'}/>
        </div>
        <div className='flex justify-center'>
        <MdOutlineKeyboardDoubleArrowDown className={`${theme ? '' : 'red'}`} size={24} />
        </div>
      </div>
    </div>
  )
}
