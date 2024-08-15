import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'

export const DetailNetworkTable = () => {
  const theme = useAppSelector((state) => state.theme.themeState);
  return (
    <div className='flex flex-col justify-center items-center my-16'>
      <h2 className={` ${theme ? '' : 'text-red-500'} text-center md:text-2xl mb-8 text-lg`}>
        Base Mainnet RPC URL List
      </h2>
      <div className='overflow-x-auto w-full'>
        <table className="table-auto min-w-full rounded-lg">
          <thead>
            <tr className='border rounded-lg'>
              <th className='border p-2'>RPC Server Address</th>
              <th className='border p-2'>Height</th>
              <th className='border p-2'>Latency</th>
              <th className='border p-2'>TPS</th>
              <th className='border p-2'>Score</th>
              <th className='border p-2'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border rounded-lg'>
              <td className='p-2 border truncate'>wss://base-rpc.publicnode.com</td>
              <td className='p-2 border'>12345676</td>
              <td className='p-2 border'>0.803s</td>
              <td className='p-2 border'>0.803s</td>
              <td className='p-2 border'>
                <Image src="./assets/green-check.svg" alt="check" width={24} height={24} />
              </td>
              <td className='p-2 border text-red-500 cursor-pointer'>Connect Wallet</td>
            </tr>

            <tr className='border rounded-lg'>
              <td className='p-2 border truncate'>wss://base-rpc.publicnode.com</td>
              <td className='p-2 border'>12345676</td>
              <td className='p-2 border'>0.803s</td>
              <td className='p-2 border'>0.803s</td>
              <td className='p-2 border'>
                <Image src="./assets/warning-circle.svg" alt="check" width={24} height={24} />
              </td>
              <td className='p-2 border text-red-500 cursor-pointer'>Connect Wallet</td>
            </tr>

            <tr className='border rounded-lg'>
              <td className='p-2 border truncate'>wss://base-rpc.publicnode.com</td>
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
    </div>
  );
};
