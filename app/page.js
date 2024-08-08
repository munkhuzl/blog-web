"use client";
import { Navbar } from "@/components/navbar";
import React from "react";

import Footer from "@/components/footer";
import Trending from "./blog/page";

// import UncontrolledExample, { Swipe } from "./api/component/slider";
import { Slidernews } from "@/pages/api/component/slider";
import { AllBlog } from "@/components/allblog";
export default function Home() {
  return (
    <main>
      <div className="bg-white">
        {/* <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link> */}
        <Navbar />
        <Slidernews/>
        {/* <Page2 />  */}
        <Trending />
        <AllBlog/>
        <Footer />
    
      </div>
    </main>
  );
}
