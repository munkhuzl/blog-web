
import { useState } from "react";

    //  function closeMenu(){
    //     setOpen(false);
    //  }
    
export function Navbar(){
    const [open, setOpen] = useState();
     function openMenu(){
        setOpen(true);
     }
    return (
        <div className="navbar flex justify-between w-full mb-10 h-10 bg-white  ">MetaBlog
            <div >
                <image src="./public/Union.png" className="width-[36px] height-[36px]"></image>
            </div>
            <span className="text-right gap-10 flex flex-1 text-left md:justify-between md:align-center items-end mr-20">
                <a href="" className="hidden lg:block text-right text-gray-600"> Home </a>
                <a href="" className="hidden lg:block text-right text-gray-600"> Blog </a>
                <a href="" className="hidden lg:block text-right text-gray-600">Contact</a>
                <div className="hidden lg:block text-right flex order-last ">
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                </div>
                 <button onClick={openMenu} className="lg:hidden mr-0"> </button>     
            </span> 
            <div className="md:hidden md:block justify-end">burger_menu</div>
        </div>
    )
}