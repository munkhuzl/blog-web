import Image from "next/image";
import { Navbar } from "./api/component/navbar";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <div className="font-bold">All Blog Post</div>
      </div>
    </main>
  );
}