import React from 'react'
import Image from 'next/image'

export const DetailNetworkTable = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 mx-8'>
      <h2 className='text-center text-2xl mb-8'>Base Mainnet RPC URL List</h2>
      <table className="table-auto">
        <thead className=''>
          <tr className='border rounded-lg'>
            <th>RPC Server Address</th>
            <th>Height</th>
            <th>Latency</th>
            <th>TPS</th>
            <th>Score</th>
            <th></th>
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
        
    </tbody>
  </table>
    </div>
  )
}
