'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAppSelector } from "@/store";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { useAppDispatch } from "@/store";
import { setThemeState } from "@/store/themeSlice";

export default function Home() {
  const themeState = useAppSelector((state: any) => state.theme.themeState);
  const dispatch = useAppDispatch();

  return (
    <main className={`flex min-h-screen flex-col text-black items-center justify-between p-24 ${themeState ? "bg-black" : "bg-white"}`}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
          Welcome to SuperchainList
        </p>
          { themeState ? <FaToggleOff size={36} color="red" onClick={() => dispatch(setThemeState(false))}/> : 
          <FaToggleOn  onClick={() => dispatch(setThemeState(true))}/>
           }
          <ConnectButton/>
      </div>
    </main>
  );
}
