'use client'
import Image from "next/image";

import { NetworkCard } from "./components/NetworkCard/NetworkCard";
import { DetailNetworkTable } from "./components/DetailNetworkTable/DetailNetworkTable";

export default function Home() {
  return (
    <main className={`flex flex-col w-full my-8`}>
          <div className="flex flex-wrap m-4 justify-center ">
            <NetworkCard/>         
            <NetworkCard/>  
            <NetworkCard/>         
            <NetworkCard/>         
          </div>
          <DetailNetworkTable/>     
      </main>
  );
}
