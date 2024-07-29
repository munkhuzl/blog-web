import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export function Trending() {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=devluc")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArticle(data);
            });
    }, []);
    return (
        <div className="container mx-auto relative">
            <div className="md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {article.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body">
                            <div className="badge badge-primary">{item.tag_list[0]}</div>
                            <Image src={item.social_image} width={500} height={500} />
                            <Link href={item.url} target="_blank">{item.title}</Link>
                            <div className="flex items-center gap-2">
                                <Image src={item.user.profile_image_90} width={50} height={50} />
                                <div className="">{item.published_at}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
