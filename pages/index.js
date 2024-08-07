import { Navbar } from "@/components/navbar";
import React from "react";
import { AllBlog } from "@/components/allblog";
import Footer from "@/components/footer";
import Page from "./[author]/[slug]";
import { ArticleCard } from "./api/component/ArticleCard";
import Page2 from "./[author]";
import Link from "next/link";
import Trending from "./[author]";
// import Body from "./api/component/Body";
import UncontrolledExample, { Swipe } from "./api/component/slider";
import Contact from "./[author]/contact";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        {/* <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link> */}
        <Navbar />
        <UncontrolledExample/>
        {/* <Page2 />  */}
        <Trending />
        {/* <Body/> */}
        <AllBlog/>

        <Footer />
    
      </div>
    </main>
  );
}
