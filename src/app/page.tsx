'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";
import { SideBar } from "./components/Sidebar/SideBar";
import { Header } from "./components/Header/Header";
import { NetworkCard } from "./components/NetworkCard/NetworkCard";

export default function Home() {


  return (
    <main className={`flex min-h-screen w-full`}>
      <div className="grid grid-cols-2">
        <div className="w-2/3">
            <SideBar/>
          </div>
          <div className="flex-col">
            <div className="">
              <Header/> 
            </div>
            <div className="grid grid-cols-2">
            <NetworkCard/>         
            <NetworkCard/>         

            </div>

          </div>
          </div>
    </main>
  );
}
