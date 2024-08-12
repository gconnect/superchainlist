'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";
import { SideBar } from "./components/Sidebar/SideBar";

export default function Home() {


  return (
    <main className={`flex min-h-screen`}>
      <div className="">
        <div className="">
            <SideBar/>
          </div>
           
            <ConnectButton/>
      </div>
    </main>
  );
}
