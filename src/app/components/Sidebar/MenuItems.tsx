import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

interface Imenu {
  name: string
  icon: string
  link?: string
  action?: () => void
}

const menuItems: Imenu[] = [
  {
    name: "Dashboard",
    icon: "./assets/home-icon.svg",
    link: "#home"
  },
  {
    name: "Add RPC",
    icon: "./assets/rpc-icon.svg",
    link: "/"
  },
  {
    name: "Add Network",
    icon: "./assets/network-icon.svg",
    link: "/"
  },
  {
    name: "Source code",
    icon: "./assets/source-code-icon.svg",
    link: "/"
  }
]


export const MenuItems = () => {

  const theme = useAppSelector((state: any) => state.theme.themeState);
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col justify-between'>
      <div>
        {menuItems.map((item) => 
        (<div className='flex hover:bg-dark_button_bg p-2 rounded-full my-4 cursor-wait'>
          <Image src={item.icon} width={36} height={36} alt={item.name}/>
          <p className='m-2'>{item.name}</p>
        </div>)
        )}
      </div>
 
      <div className='flex p-2 rounded-full my-4 cursor-wait'>
      { theme ? < FaToggleOn className='text-dark_toggle_bg' size={36} 
            onClick={() => dispatch(setThemeState(false))}/> : 
            <FaToggleOff size={36} color="black"  
            onClick={() => dispatch(setThemeState(true))}/>
            }
        <p className='m-2'>Toggle Theme</p>
      </div>
    </div>
  )
}
