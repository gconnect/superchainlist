import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const NetworkCard = () => {
  return (
    <div className='flex p-8'>
      <div className='flex flex-col bg-dark_button_bg rounded p-8 text-center items-center justify-center'>
        <p>Current Block</p>
        <p>123456</p>
      </div>
      <div className='bg-dark_card_bg rounded p-8'>
        <div className='flex justify-between m-2'>
          <Image src={'./assets/eth-icon.svg'} alt='eth' width={24} height={24}/>
          <p className='mx-2'>Base Mainnet</p>
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
        <div className='flex justify-center my-2'>
        <ConnectButton/>
        </div>
        <div className='flex justify-center my-2'>
        <Image src={'./assets/arrow-down.svg'} alt='eth' width={24} height={24}/>
        </div>
      </div>
    </div>
  )
}
