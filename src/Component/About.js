import React from "react";
import Navbar from "./Navbar";
export default function About() {
    return (
        <>
            <Navbar />

            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div class="w-full lg:w-8/12">
                        <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>

                <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div class="w-full lg:w-8/12 lg:pt-8">
                        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                                <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-16 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                            <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SchoolDesk</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                        </li>
                        <li>
                            <a href="notification" class="mr-4 hover:underline md:mr-6">Notification</a>
                        </li>
                        <li>
                            <a href="/about" class="mr-4 hover:underline md:mr-6 ">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">SchoolDesk™</a>. All Rights Reserved.
                </span>
            </footer>
        </>


    )
}