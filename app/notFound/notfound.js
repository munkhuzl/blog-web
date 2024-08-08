"use client";

import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
export function Notfound(){
    return(
        <>
            <Navbar/>
                <div className="mx-auto flex flex-cols-2">
                    <div className="text-5xl" >404</div>
                    <div>
                        <h1>Page not Found</h1>
                        <p>We're sorry. This page is unkhnown or does not exist the page yoy are looking for.</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back to Home
                        </button>
                    </div>
                </div>
            <Footer/> 
        </>
    )
}