import { IProps } from '@/interfaces/Style'
import React from 'react'

export const NetworkLogo = ({ style }: IProps) => {
  return (
    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="21.5" cy="20" rx="21.5" ry="20" fill={style}/>
      <path d="M29.2188 19H22.0938V17.5H22.6875C23.0024 17.5 23.3045 17.3946 23.5272 17.2071C23.7499 17.0196 23.875 16.7652 23.875 16.5V14.5C23.875 14.2348 23.7499 13.9804 23.5272 13.7929C23.3045 13.6054 23.0024 13.5 22.6875 13.5H20.3125C19.9976 13.5 19.6955 13.6054 19.4728 13.7929C19.2501 13.9804 19.125 14.2348 19.125 14.5V16.5C19.125 16.7652 19.2501 17.0196 19.4728 17.2071C19.6955 17.3946 19.9976 17.5 20.3125 17.5H20.9062V19H13.7812C13.6238 19 13.4728 19.0527 13.3614 19.1464C13.2501 19.2402 13.1875 19.3674 13.1875 19.5C13.1875 19.6326 13.2501 19.7598 13.3614 19.8536C13.4728 19.9473 13.6238 20 13.7812 20H16.1562V22H15.5625C15.2476 22 14.9455 22.1054 14.7228 22.2929C14.5001 22.4804 14.375 22.7348 14.375 23V25C14.375 25.2652 14.5001 25.5196 14.7228 25.7071C14.9455 25.8946 15.2476 26 15.5625 26H17.9375C18.2524 26 18.5545 25.8946 18.7772 25.7071C18.9999 25.5196 19.125 25.2652 19.125 25V23C19.125 22.7348 18.9999 22.4804 18.7772 22.2929C18.5545 22.1054 18.2524 22 17.9375 22H17.3438V20H25.6562V22H25.0625C24.7476 22 24.4455 22.1054 24.2228 22.2929C24.0001 22.4804 23.875 22.7348 23.875 23V25C23.875 25.2652 24.0001 25.5196 24.2228 25.7071C24.4455 25.8946 24.7476 26 25.0625 26H27.4375C27.7524 26 28.0545 25.8946 28.2772 25.7071C28.4999 25.5196 28.625 25.2652 28.625 25V23C28.625 22.7348 28.4999 22.4804 28.2772 22.2929C28.0545 22.1054 27.7524 22 27.4375 22H26.8438V20H29.2188C29.3762 20 29.5272 19.9473 29.6386 19.8536C29.7499 19.7598 29.8125 19.6326 29.8125 19.5C29.8125 19.3674 29.7499 19.2402 29.6386 19.1464C29.5272 19.0527 29.3762 19 29.2188 19ZM20.3125 14.5H22.6875V16.5H20.3125V14.5ZM17.9375 25H15.5625V23H17.9375V25ZM27.4375 25H25.0625V23H27.4375V25Z" fill="white"/>
    </svg>

  )
}
