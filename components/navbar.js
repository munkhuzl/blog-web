"use client";
import { Image } from "next/image";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
//  function closeMenu(){
//     setOpen(false);
//  }

export function Navbar() {
  const [open, setOpen] = useState();
  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }
  return (
    <div className=" mx-auto container flex items-center w-full lg:space-between  sticky top-0 bg-white text-gray-900 dark:text-white  align  mt-4 z-10">
      <div className="mx-auto text-black justify-start">Metablog</div>
      <span className=" gap-10 flex flex-auto w-64 justify-center ">

        {/* // flex justify-center
        // flex flex-col items-center  */}

        <Link
          href={"/article"}
          className="hidden lg:block text-center text-gray-600"
        >
          Home
        </Link>
        <Link
          href={"/Pages/page"}
          className="hidden lg:block text-center text-gray-600"
        >
          Blog
        </Link>
        <Link href={"/contact"} className="hidden lg:block text-center text-gray-600">
          Contact
        </Link>

        <GiHamburgerMenu onClick={openMenu} className="lg:hidden mr-0 flex justify-end " />
      </span>

            <label class=" hidden w-40 mr-50 lg:block">
              <span class="sr-only">Search</span>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
            </label>
        
    </div>
  );
}



