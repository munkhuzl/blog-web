<<<<<<<< HEAD:app/article/page.js
"use client";
import { Navbar } from "@/components/navbar";
========
import Head from "next/head";
>>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/[author]/slug.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Footer from "@/components/footer";
export default function Page(){
    const [article, setArticle] =useState();
    const [loading, setLoading]= useState(false);
    const router = useRouter();
    const {author, slug } = router.query;
    useEffect(() =>{
        if (router.isReady){
            getArticle();
        }
        }, [router.isReady]);  
    function getArticle(){
        fetch(`https://dev.to/api/articles/${author}/${slug}`)
        .then((response) =>{
            return response.json();
        })
        .then((detail) => {
            setArticle(detail);
            setLoading(false);
            });
    }
    if (!article) return <div>Loading...</div>
    return (
<<<<<<<< HEAD:app/article/page.js
        <>
            <Navbar/>
========
        <div>
            <Head>
                <meta property="og:title" content="Hello World"/>
            </Head>
>>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/[author]/slug.js
            <div classname="container mx-auto ">
                <div>{article.title}</div>
                <div className="prose">{parse(article.body_html)}</div>
            </div>
<<<<<<<< HEAD:app/article/page.js
            <Footer/>
        </>
       
========
        </div>
>>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541:pages/[author]/slug.js
    );
}