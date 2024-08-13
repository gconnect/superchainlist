'use client'
import Image from "next/image";

import { NetworkCard } from "./components/NetworkCard/NetworkCard";
import { DetailNetworkTable } from "./components/DetailNetworkTable/DetailNetworkTable";

export default function Home() {
  return (
    <main className={`flex flex-col w-full`}>
          <div className="grid grid-cols-3 m-4">
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>         
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/> 
          </div>
          <DetailNetworkTable/>  
          <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>       
      </main>
  );
}
