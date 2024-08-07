import { Navbar } from "@/components/navbar";
import React from "react";
import { AllBlog } from "@/components/allblog";
import Footer from "@/components/footer";

import Link from "next/link";
import Trending from "./[author]";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        {/* <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link> */}
        <Navbar />

        <Trending />
        {/* <Body/> */}
        <AllBlog />
        <Footer />
      </div>
    </main>
  );
}
