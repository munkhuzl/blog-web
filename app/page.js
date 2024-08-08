"use client";
import { Navbar } from "@/components/navbar";
import React from "react";
<<<<<<< HEAD:app/page.js
=======
import { AllBlog } from "@/components/allblog";
import Footer from "@/components/footer";

import Link from "next/link";
import Trending from "./[author]";
>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/index.js

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
<<<<<<< HEAD:app/page.js
        <Slidernews/>
        {/* <Page2 />  */}
        <Trending />
        <AllBlog/>
=======

        <Trending />
        {/* <Body/> */}
        <AllBlog />
>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/index.js
        <Footer />
      </div>
    </main>
  );
}
