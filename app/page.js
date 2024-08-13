"use client";
import { Navbar } from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import { Slidernews } from "@/pages/api/component/slider";
import Trending from "./trendingpage/page";
import { AllBlogPage } from "./allblogPost/plogpage";

// import { ArticleCard } from "@/pages/api/component/ArticleCard";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Slidernews />
        <Trending />
        <AllBlogPage/>
        <Footer />
 
      </div>
    </main>
  );
}
