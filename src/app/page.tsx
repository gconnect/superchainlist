'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setThemeState } from "@/lib/features/theme/themeSlice";

export default function Home() {
  const theme = useAppSelector((state: any) => state.theme.themeState);
  const dispatch = useAppDispatch();

  return (
    <main className={`flex min-h-screen flex-col text-black items-center justify-between p-24 ${theme ? "dark" : "light"}`}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
          Welcome to SuperchainList
        </p>
          { theme ? < FaToggleOn  size={36} color="red" onClick={() => dispatch(setThemeState(false))}/> : 
          <FaToggleOff size={36} color="black"  onClick={() => dispatch(setThemeState(true))}/>
           }
          <ConnectButton/>
      </div>
    </main>
  );
}
