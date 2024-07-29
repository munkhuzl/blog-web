import {Image} from "next/image";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
    //  function closeMenu(){
    //     setOpen(false);
    //  }
    
export function Navbar(){
    const [open, setOpen] = useState();
     function openMenu(){
        setOpen(true);
     }
    return (
        <div className="flex fixed justify-between  w-full mb-10 h-10 bg-white ">
            <div className="">  MetaBlog 
            <div> 
                    {/* <Image src="./public/Union.png" /> */}
                </div>
            </div>
               
            <span className="flex hidden align-center justify-between md:align-center  mr-20  lg:block">
                <Link href={'/trending'} className="hidden lg:block text-center text-gray-600">Home</Link>
                <Link href={'/trending'} className="hidden lg:block text-center text-gray-600">Blog</Link>           
                <Link href={'/trending'} className="hidden lg:block text-center text-gray-600">Contact</Link>
                
                <div className="hidden lg:block text-right  order-last ">
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        {/* <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                        </span> */}
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                </div>
                 <button onClick={openMenu} className="lg:hidden mr-0"> </button>     
                 <button className="bg-slate-200 dark:text-black bg-white rounded hidden lg:block gap-10 font-bold"> Download CV</button>
                 <GiHamburgerMenu onClick={openMenu} className="lg:hidden mr-0 "/>  
            </span> 
            <div className="md:hidden  justify-end">burger_menu</div>
        </div>
    );
}