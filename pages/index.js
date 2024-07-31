import Image from "next/image";
import { Navbar } from "@/components/navbar";
import React from "react";
import { Trending } from "@/components/trending";


export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
    
        <Trending />
      </div>
    </main>
  )
}