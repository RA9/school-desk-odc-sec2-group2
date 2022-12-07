import React from "react";
import Navbar from "./Navbar";
export default function About() {
    return (
        <>
            <Navbar />

            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-auto pb-4">About Us</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-auto">Having observed over the years that students are face with issue about identifying a University to attend after high School, knowing how those Universities are running, getting information about scholarships, etc, SchoolDesk was basically build to solve those problems.
                            SchoolDesk is a quick access online environment that was build inorder to help students and parents garther information about various Universities in Liberia.
                            <br/> <br/>
                            SchoolDesk was actually build to serve as middle man between schools and students around liberia. We help students get quick information from schools and also send information to schools through this platform. </p>
                    </div>
                    <div class="w-full lg:w-1/3">
                        <img class="w-full h-full" src="https://i.pinimg.com/564x/ed/d7/22/edd722c919805a4ce19e96aa1adb88b5.jpg" alt="A group of People" />
                    </div>
                </div>

                <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-auto pb-4">Our Story</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-auto">SchoolDesk is a quick access online environment that was build by four individuals inorder to help students and parents garther information about what ever University in Liberia they may desire to eroll at.
                            Having observed over the years that students are face with issue about identifying a University to attend after high School, knowing how those Universities are running, getting information about scholarships, etc, SchoolDesk was basically build to solve those problems. <br /> <br />
                            <b>KINDLY MEET OUR TEAM</b><br /> 1. Abraham MB Seleebay<br /> 2. I. Jose Kpadeh<br /> 3. Rashie Y. Garley<br />  4. Sumowoi P.Pewu Jr.  </p>
                    </div>
                    <div class="w-full lg:w-8/12 lg:pt-8">
                        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div class="p-6 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://media-exp1.licdn.com/dms/image/C4D03AQGt5Du5JxmnSQ/profile-displayphoto-shrink_800_800/0/1615563111584?e=2147483647&v=beta&t=DqUU3D47C2a_FPuBSau90NUpyKs8tOs-E9uhYkp3mKM" alt="Abraham featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Abraham featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-auto mt-4">Abraham MB Seleebay</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/197096589_101636852155110_827924949009236742_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHGAW7k3WdYskhQiMqkLmrZhE--S9MvrfmET75L0y-t-Se-B6OalUqv8ugMFt8fmZyp1uf2ynSIJjf9Gi7UkoQ3&_nc_ohc=G_sjDyvpZkQAX8Nk7Xu&tn=J7N5WhtnsyTJXql4&_nc_ht=scontent-lhr8-1.xx&oh=00_AfD_cCbN5wD1LDG2NIXe_MOG7BvaACNMCDx8_zUzV0lcTA&oe=63B7EA60" alt="Olivia featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-auto mt-4">I. Jose Kpadeh</p>
                            </div>
                            <div class="p-3 pb-5 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/302003704_796921505077372_1618285712647944259_n.jpg?stp=c30.0.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFaU44PA1n7jzXx-BbN39Nwj8-3nnU6wJ6Pz7eedTrAnvxAH23J_ezgkZaRPI7n2GMgTRrb1MLOq1ZZKuMptkL7&_nc_ohc=HzpG3k_8pRAAX_zGA8x&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AfAmp3SCRTaDsMna5wHo5ktsbcfuFYxRxv87P9whB5u50g&oe=639642A6" alt="Liam featued Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-auto mt-4">Rashie Y. Garley</p>
                            </div>
                            <div class="p-4 pb-3 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/224562024_1250785928701449_3688528728739283235_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeF5k6Ogrm6-rbduQ3LAyi2rpZHJW67BqjOlkclbrsGqM0bdRhdOgxvCiogAEnu53D73y88cgJn2xhfq-p-6d_nt&_nc_ohc=KQfNDEA70QQAX_BOEPg&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCDsOutQt14JL2PeFm9k42oSS7eOl5TwyL6HJ1DjP2hcw&oe=6395D5EF" alt="Elijah featured image" />
                                <img class="md:hidden block" src="https://i.pinimg.com/280x280_RS/67/e9/bd/67e9bdffd5cd7aed57957604c6a3f157.jpg" alt="Elijah featured image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-auto mt-4">Sumowoi P. Pewu Jr.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-16 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="https://i.pinimg.com/236x/60/64/95/6064956425f6fe22817252b2c3176f04.jpg" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">SchoolDesk is here to solve all your problems</h2>
                            <p class="mt-6 text-gray-600"> We provide information about various Universities in Libeia.</p>
                            <p class="mt-4 text-gray-600"> Universities such as: BlueCrest, Starz, University Of Libeia, AUWA, UMU, AME, AMEZ, Stella Maris Polytechnic, Barshell University, etc.</p>
                            <p class="mt-6 text-gray-600"> We provide information about upcoming events at the various Universities lasted above.</p>
                            <p class="mt-6 text-gray-600"> We provide information about entrance at these Universities.</p>
                            <p class="mt-6 text-gray-600"> We provide information about enrollment at these Universities.</p>
                            <p class="mt-6 text-gray-600"> We provide information about scholarships at these Universities.</p>
                            <p class="mt-6 text-gray-600"> We provide information about programs at these Universities.</p>
                            <p class="mt-6 text-gray-600"> We help you get in touch with these Universities online.</p>
                            <p class="mt-6 text-gray-600"> We provide information about taking transfer at these Universities.</p>
                            <p class="mt-6 text-gray-600"> We provide almost every information regarding these Universities.</p>
                            <p class="mt-6 text-gray-600"> Remember! with SchoolDesk, all your worries are over.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SchoolDesk</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                        </li>
                        <li>
                            <a href="/notification" class="mr-4 hover:underline md:mr-6">Notification</a>
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
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">SchoolDesk™</a>. All Rights Reserved.
                </span>
            </footer>
        </>


    )
}