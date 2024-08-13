import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { GithubIcon, HomeIcon, NetworkIcon, RPCIcon } from '@/components/svg/index';

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

  const iconMapping:  { [key: string]: JSX.Element }  = {
    "Dashboard": <HomeIcon style={theme ? '#919AC0' : '#E38793'} />,
    "Add RPC": <RPCIcon  style={theme ? '#919AC0' : '#E38793'}/>,
    "Add Network": <NetworkIcon style={theme ? '#919AC0' : '#E38793'} />,
    "Source code": <GithubIcon style={theme ? '#919AC0' : '#E38793'}/>
  };


  return (
    <div className='flex flex-col justify-between'>
      <div>
        {menuItems.map((item, index) => 
        (<div key={index} className={`flex ${theme ? 'hover:bg-dark_button_bg' : 'hover:bg-light_button_bg'}  p-2 rounded-full my-4 cursor-pointer`}>
          {React.cloneElement(iconMapping[item.name])}
          <p className='m-2'>{item.name}</p>
        </div>)
        )}
      </div>

      <div className='flex p-2 rounded-full my-4 cursor-pointer'>
      { theme ? < FaToggleOn className={`text-dark_toggle_bg `} size={36} 
            onClick={() => dispatch(setThemeState(false))}/> : 
            <FaToggleOff className='text-light_toggle_bg ' size={36}  
            onClick={() => dispatch(setThemeState(true))}/>
            }
        <p className='m-2'>Toggle Theme</p>
      </div>
    </div>
  )
}
