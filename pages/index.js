import Image from "next/image";
import { Navbar } from "@/components/navbar";
import React from "react";
import { Trending } from "@/components/trending";


export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <div className="font-bold">All Blog Post</div>
        <Trending/>
      </div>
    </main>
  )
}