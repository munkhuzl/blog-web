import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import 'dayjs/locale/mn' 
dayjs.locale('mn')


export function Trending() {
    const [article, setArticle] = useState([]);
    const [page,setPage] =useState(1);
    const [ended, setEnded] =useState(false);
    const [prePage, setPrePage]= useState ();

        useEffect(() => {
        fetch("https://dev.to/api/articles?username=dumebii&per_page=6")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArticle(data);
            });
    }, []);
  async function loadMore(){
        fetch(`https://dev.to/api/articles?username=dumebii&page=${page+1}&per_page=6`)
        .then((response) => {
            return response.json();
        })
        .then((newArticle) => {
            const updatedArticle = article.concat(newArticle)
            setArticle(updatedArticle);
            setPage(page + 1);
            if(newArticle.lenght < 6){
                setEnded(true);
            }
            setLoading(true);
        });

    }
    return (
        <div className="container mx-auto mt-10 ">
                <div className="font-bold">All Blog Post</div>
            <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-3">
                {article.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body">
                            <Image src={item.social_image} width={360} height={240} className="rounded-md"/>
                            <div className="badge text-blue-500 p-2">{item.tag_list[0]}</div>
                            <Link href={item.path} className="text-wrap font-bold" target="_blank">{item.title}</Link>
                            <div className="flex items-center gap-2">
                                <Image src={item.user.profile_image_90} width={36} height={36} className="rounded-full mt-1"/>
                                <div className="text-gray-500">{item.user.name}</div>
                                <div className="text-gray-500">{dayjs(item.published_at).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       {!ended &&(
            <div className="py-16 text-center" onClick={loadMore}>
                 <button className="btn bg-lg btn-accent">Load more</button>
            </div>
       )}
            
        </div>
    );
}
