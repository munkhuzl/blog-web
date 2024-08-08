"use client";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
export default function Contact (){
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto w-[645px] h-[895px] p-[100] py-16 ">   
                <h1  className="text-black text-start text-2xl font-bold mb-2"> Contact Us</h1>
                <div className="text-wrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>    
            <div className="mt-5 mb-5 border-spacing-2 grid grid-cols-2 justify-evenly">
                <div className=" text-black  shadow-lg border-r-amber-50 w-[294px] h-[193px] justify-center pb-4 " > Address
                    <p className="text-gray-400 text-wrap">1328 Oak Ridge Drive, 
                        Saint Louis, Missouri</p>
                </div>
                <div className=" text-black  shadow-lg border-r-amber-50 w-[294px] h-[193px] justify-center ">Contact
                    <p className="text-gray-400">313-332-8662
                    info@email.com</p>
                </div>
                <div className=" mt-10 bg-gray-100 w-[645px] h-[400px] px-[20px]">
                    <h1 className="text-2xl text-black mb-5 mt-10">Leave a message</h1>
                    <form className="container mx-auto ">
                        <div class="grid gap-6 mb-6 grid-cols-2">
                            <div>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div class="mb-6 mt-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Subject" required />
                        </div> 
                        <div class="mb-6">
                            <input type="sybject" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Write a message" required />
                        </div> 
                    
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                </form>

                </div>

            </div>
            </div>
            <Footer/>
        </div>

    )
}

