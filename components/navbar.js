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
        <Link
          href={"/contact"}
          className="hidden lg:block text-center text-gray-600"
        >
          Contact
        </Link>

        <GiHamburgerMenu
          onClick={openMenu}
          className="lg:hidden mr-0 flex justify-end "
        />
  

       
              <script className=" w-40 mr-50 lg:block"
            async
            src="https://cse.google.com/cse.js?cx=a2f92a53251be4655"
          ></script>
          <div className="gcse-search start-end"> </div>
        
      </span>
      </div>
      
  );
}



