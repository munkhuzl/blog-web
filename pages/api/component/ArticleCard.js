import Link from "next/link";
import Image from "next/image";
export function ArticleCard({ articles }) {
  return (
    <div key={articles.id} className="shadow-lg card bg-base-100">
      <div className="card-body">
        <div className="flex gap-2">
          {articles.tag_list.map((tag) => (
            <div className="badge badge-primary">{tag}</div>
          ))}
        </div>
        <Image
          src={articles.social_image}
          width={500}
          height={500}
          className="bg-slate-600 object-cover"
        />
        <Link href={articles.url} target="_blank">
          {articles.title}
        </Link>
      </div>
    </div>
  );
}
