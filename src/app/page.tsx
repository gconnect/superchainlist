'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";
import { SideBar } from "./components/Sidebar/SideBar";
import { Header } from "./components/Header/Header";

export default function Home() {


  return (
    <main className={`flex min-h-screen w-full`}>
      <div className="flex">
        <div className="w-1/3">
            <SideBar/>
          </div>
          <Header/>          
          </div>
    </main>
  );
}
