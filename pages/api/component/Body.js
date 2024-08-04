import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

export default function Body (){
    const [articles, setArticles]= useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=arindam_1729")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setArticles(data);
        });
        }, []);

    return(
        <div className="container mt-20 mx-auto">
            <div className="grid md:grid-cols-2 lg:md:grid-cols-2 gap-4">
                {articles.map((item) => 
                <div key={item.id} className="shadow-lg card bg-base-100">
                    <div className="card-body"> 
                        <Image src={item.social_image} width={500} height={500} />
                        <Link href={item.url} target="_blank">{item.title}</Link>
                    <div className="flex items-center gap-2"></div>
                    <div> 
                        {articles.user.name}
                    </div>
                    <div>{dayjs(articles.published_at).locale("mn").fromNow()}</div>
                    </div>
                </div>
                  )};
            </div>
        </div>    
    )
}