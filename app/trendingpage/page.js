"use client";
import { name } from "@/components/dayjs-mn";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Trending() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState([]);

  async function loadArticle() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?username=syakirurahman&tag=${selectedCategory}&per_page=4`
    );
    const tagArticle = await response.json();
    setArticle(tagArticle);
    setLoading(false);
  }

  useEffect(() => {
    loadArticle();
  }, [selectedCategory]);

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="mx-auto text-2xl font-bold text-black mb-4 hidden lg:block">
          Trending
        </div>
        <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-4 p-0">
          {article.map((item) => (
            <div key={item.id} className="shadow-lg card bg-base-100">
              <div className="card-body w-289px h-360px">
                <Image
                  src={item.social_image}
                  width={293}
                  height={320}
                  className="rounded-md relative z-0 order-0 shadow-2xl container p-0" 
                />
                <div className="badge text-blue-500 absolute  p-0">
                  {item.tags_list && item.tags_list[0]}
                </div>
                <Link
                  href={`/${item?.path}`}
                  className="text-wrap font-bold absolute mt-16"
              s    target="_blank"
                >
                  {item.title}
                </Link>
                <div className="flex items-center gap-2">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
