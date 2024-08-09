"use client";
import { Navbar } from "@/components/navbar";
import React from "react";

import Footer from "@/components/footer";
import { Slidernews } from "@/pages/api/component/slider";
import Trending from "./trendingpage/page";
import { AllBlog } from "./allblogPost/plogpage";
import { ArticleCard } from "@/pages/api/component/ArticleCard";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <Navbar />
        <Slidernews />
        <Trending />
       <AllBlog/>
        <Footer />
        <ArticleCard/>
      </div>
    </main>
  );
}
