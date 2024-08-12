import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { MdCheckBox } from 'react-icons/md'

export const Header = () => {
  return (
    <div className='flex justify-between m-8'>
      <input type='text' className='p-4 rounded h-12 w-2/4' placeholder='search for an OP chain'/>
      <div className='flex'>
        <div className='m-2'>
        <input type='checkbox'/> <span>Include Testnet</span> 
        </div>
        <ConnectButton/>
      </div>
    </div>
  )
}
