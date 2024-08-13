import { IProps } from '@/interfaces/Style'
import React from 'react'

export const HomeLogo = ({ style }: IProps) => {
  return (
    <svg width="43" height="45" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="21.5" cy="22.5" rx="21.5" ry="22.5" fill={style}/>
      <path d="M15 27H18V21H24V27H27V18L21 13.5L15 18V27ZM13 29V17L21 11L29 17V29H22V23H20V29H13Z" fill="white"/>
    </svg>
  )
}
