import { Navbar } from "@/components/navbar";
import React from "react";
import { Trending } from "@/components/trending";
import Footer from "@/components/footer";
import Page from "./[author]/[slug]";
import { ArticleCard } from "./api/component/ArticleCard";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Trending />
        <Page/>
        <Footer/>
        {/* <ArticleCard/> */}
        
      </div>
    </main>
  )
}