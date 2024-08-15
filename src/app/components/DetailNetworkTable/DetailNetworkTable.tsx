import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'

export const DetailNetworkTable = () => {
  const theme = useAppSelector((state) => state.theme.themeState)
  return (
    <div className='flex flex-col justify-center items-center my-16 mx-8'>
      <h2 className={` ${theme ? '' : 'text-red-500'} text-center text-2xl mb-8`}>Base Mainnet RPC URL List</h2>
      <table className="table-auto rounded-lg w-3/4">
        <thead className=''>
          <tr className='border rounded-lg'>
            <th className='border'>RPC Server Address</th>
            <th className='border' >Height</th>
            <th className='border'>Latency</th>
            <th className='border'>TPS</th>
            <th className='border'>Score</th>
            <th className='border'></th>
          </tr>
        </thead>
        <tbody>
        <tr className='border rounded-lg'>
            <td className='p-2 border'>wss://base-rpc.publicnode.com</td>
            <td className='p-2 border'>12345676</td>
            <td className='p-2 border'>0.803s</td>
            <td className='p-2 border'>0.803s</td>
          <td className='p-2 border'>
            <Image src="./assets/green-check.svg" alt="check" width={24} height={24} />
          </td>
          <td className='p-2 border text-red-500 cursor-pointer'>Connect Wallet</td>
        </tr>

        <tr className='border rounded-lg'>
            <td className='p-2 border'>wss://base-rpc.publicnode.com</td>
            <td className='p-2 border'>12345676</td>
            <td className='p-2 border'>0.803s</td>
            <td className='p-2 border'>0.803s</td>
          <td className='p-2 border'>
            <Image src="./assets/warning-circle.svg" alt="check" width={24} height={24} />
          </td>
          <td className='p-2 border text-red-500 cursor-pointer'>Connect Wallet</td>
        </tr>

        <tr className='border rounded-lg'>
            <td className='p-2 border'>wss://base-rpc.publicnode.com</td>
            <td className='p-2 border'>12345676</td>
            <td className='p-2 border'>0.803s</td>
            <td className='p-2 border'>0.803s</td>
          <td className='p-2 border'>
            <Image src="./assets/failed-circle.svg" alt="check" width={24} height={24} />
          </td>
          <td className='p-2 border text-red-500 cursor-pointer'>Connect Wallet</td>
        </tr>
        
    </tbody>
  </table>
    </div>
  )
}
