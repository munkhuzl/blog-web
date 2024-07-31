import { Navbar } from "@/components/navbar";
import React from "react";
import { Trending } from "@/components/trending";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Trending />
        <Footer/>
        
      </div>
    </main>
  )
}