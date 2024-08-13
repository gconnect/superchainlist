'use client'
import Image from "next/image";

import { NetworkCard } from "./components/NetworkCard/NetworkCard";

export default function Home() {
  return (
    <main className={`flex w-full`}>
          <div className="grid grid-cols-3 m-4">
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>         
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>         
          </div>
      </main>
  );
}
