import { Navbar } from "@/components/navbar";
import React from "react";
import { Trending } from "@/components/trending";
import Footer from "@/components/footer";
import Page1 from "./[author]";
import { ArticleCard } from "./api/component/ArticleCard";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Trending />
        <Footer/>
        <ArticleCard/>
        <Page1/>
      </div>
    </main>
  )
}