import { name } from "@/components/dayjs-mn"
import Link from "next/link";

import Image from "next/image";

const tags = [
    {value: "all", name: "All"},
    {value: "design", name: "Design"},
    {value: "travel", name: "Travel"},
    {value: "fashion", name: "Fashion"},
    {value: "technology", name: "Technology"},
    {value: "technology", name: "Branding"},
    {value: "viewall", name: "View All"},
]
import { useEffect, useState } from "react"

export default function Page1() {
    // const [selectedCategory, selectedCategory]= useState("all");
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

    async function loadArticles(){
        setLoading(true)
       const response= await fetch(`https://dev.to/api/articles?username=devluc&tag=${selectedCategory}`)
       const tagsArticles = await response.json();
       setArticles(tagsArticles);
       setLoading(false);

    }
    
//     useEffect(() => {
//         loadArticles();
// // },[selectedCategory]);

    return(
        <div>
            <div>All Blog Post </div>
            {/* <div className="flex gap-4">
                {tags.map((tag)=>(
                <div key={tags.value} className={`cursor-pointer hover:text-orange-500 font-bold ${selectedCategory === tags.value > "text-orange-600"} `} onClick={() => selectedCategory(tags.value)}>
                    {tags.name}
                </div>
                ))}
            </div> */}
              <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-3">
                {articles.map((item) => (
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
        </div>
    )
}