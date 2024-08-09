"use client";
import { Navbar } from "@/components/navbar";
import React from "react";
import { AllBlog } from "@/components/allblog";
import Footer from "@/components/footer";
import { Slidernews } from "@/pages/api/component/slider";
import Trending from "./blog/page";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <Link href={"/contact"}>Contact</Link> */}
        <Navbar />
        <Slidernews />
        {/* <Page2 />  */}
        <Trending />
        <AllBlog />
>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/index.js
        <Footer />
      </div>
    </main>
  );
}
