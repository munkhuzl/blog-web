"use client";
import { name } from "@/components/dayjs-mn";
import Link from "next/link";
import Image from "next/image";

const tags = [
  { value: "all", name: "All" },
  { value: "design", name: "Design" },
  { value: "travel", name: "Travel" },
  { value: "fashion", name: "Fashion" },
  { value: "technology", name: "Technology" },
  { value: "technology", name: "Branding" },
  { value: "viewall", name: "View All" },
];

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

        <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-4">
          {article.map((item) => (
            <div key={item.id} className="shadow-lg card bg-base-100">
              <div className="card-body w-293 h-360px">
                <Image
                  src={item.social_image}
                  width={290}
                  height={360}
                  className="rounded-md container"
                />
                <div className="badge text-blue-500 p-2">
                  {item.tags_list && item.tags_list[0]}
                </div>
                <Link
                  href={`/${item?.path}`}
                  className="text-wrap font-bold"
                  target="_blank"
                >
                  {item.title}
                </Link>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.user.profile_image_90}
                    width={36}
                    height={36}
                    className="rounded-full mt-1"
                  />
                  <div className="text-gray-500">{item.user.name}</div>
                  <div className="text-gray-500">
                    {dayjs(item.published_at).fromNow()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
