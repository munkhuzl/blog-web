import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import "dayjs/locale/mn";
dayjs.locale("mn");
const tags = [
  { value: "all", name: "All" },
  { value: "design", name: "Design" },
  { value: "travel", name: "Travel" },
  { value: "fashion", name: "Fashion" },
  { value: "technology", name: "Technology" },
  { value: "technology", name: "Branding" },
  { value: "viewall", name: "View All" },
];

export function AllBlog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [prePage, setPrePage] = useState();
  const [loading, setLoading] = useState(false);
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=dumebii&per_page=6")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      });
  }, []);
  async function loadMore() {
    setLoading(false);
    const response = await fetch(
      `https://dev.to/api/articles?username=dumebii&page=${page + 1}&per_page=6`
    );
    const newArticles = await response.json();
    const updatedArticles = articles.concat(newArticles);

    setArticles(updatedArticles);
    setPage(page + 1);
    if (newArticle.lenght < 6) {
      setEnded(true);
    }
    setLoading(false);
  }

  async function loadArticle() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?username=dumebii&tag=${selectedCategory}&per_page=6`
    );
    const tagArticle = await response.json();
    setArticle(tagArticle);
    setLoading(false);
  }

  useEffect(() => {
    loadArticle();
  }, [selectedCategory]);

  return (
    
    <div className="container mx-auto mt-20 hidden lg:block">
      <div className="font-bold text-black text-2xl mb-3">All Blog Post</div>
      <div className="flex gap-4 mb-3">
        {tags.map((tag) => (
          <div
            key={tag.value}
            className={`cursor-pointer hover:text-orange-500 font-bold mb-3 ${
              selectedCategory === tag.value > "text-orange-600"
            } `}
            onClick={() => selectedCategory(tag.value)}
          >
            {tag.name}
          </div>
        ))}
      </div>

      <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <div key={item.id} className="shadow-lg card bg-base-100">
            <div className="card-body">
              <Image
                src={item.social_image}
                width={360}
                height={240}
                className="rounded-md"
              />
              <div className="badge text-blue-500 p-2">{item.tag_list[0]}</div>
              <Link
                href={item.path}
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
      {!ended && (
        <div className="py-16 text-center" onClick={loadMore}>
          <button disabled={loading} className="btn bg-lg btn-accent">
            {loading && <span className="loading loading-spinner"></span>}
            Load more</button>
        </div>
      )}
    </div>
  );
}
