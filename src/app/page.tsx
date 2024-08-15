'use client'
import Image from "next/image";

import { NetworkCard } from "./components/NetworkCard/NetworkCard";
import { DetailNetworkTable } from "./components/DetailNetworkTable/DetailNetworkTable";

export default function Home() {
  return (
    <main className={`flex flex-col w-full my-8`}>
          <div className="flex flex-wrap justify-center ">
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>         
            <NetworkCard/>         
          </div>
          <div className="mx-4">
          <DetailNetworkTable/>     
          </div>
      </main>
  );
}
