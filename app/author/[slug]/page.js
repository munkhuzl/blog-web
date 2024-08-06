
import { parse } from "next/dist/build/swc";
export default async function Page({params}){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const newArticles= await response.json();


    return (
    <main>
      <div className="container mx-auto"> 
        <div>{article.title}</div>
        <div className="prose">{parse(article.body_html)}</div>
      </div>
      </main>
)
}