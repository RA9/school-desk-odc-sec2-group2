import React from "react";
import Navbar from "./Navbar";
export default function Notification() {
  return (
    <>
      <Navbar />
      <div>
        <div class="h-screen grid place-items-center my-8">
          <div class="lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-10 shadow-sm">
            <div class="inline-flex items-center justify-between w-full">
              <h3 class="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">Notifications</h3>
              <button
                class="inline-flex text-xs sm:text-sm bg-white px-2 sm:px-3 py-2 text-blue-500 items-center rounded font-medium
         shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-blue-500
          hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-800 dark:hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
                Close
              </button>
            </div>
            <p class="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">Today</p>
            <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
              <div class=" inline-flex items-center justify-between w-full">
                <div class="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                    alt="Form Icon" class="w-6 h-6 mr-3" />
                  <h3 class="font-bold text-base text-gray-800">Updates</h3>
                </div>
                <p class="text-xs text-gray-500">
                  2 min ago
                </p>
              </div>
              <p class="mt-1 text-sm">
                Hey! Do you remember about choosing your training regime?
              </p>
            </div>
            <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
              <div class=" inline-flex items-center justify-between w-full">
                <div class="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                    alt="Messages Icon" class="w-6 h-6 mr-3" />
                  <h3 class="font-bold text-base text-gray-800">Messages</h3>
                </div>
                <p class="text-xs text-gray-500">
                  1 hour ago
                </p>
              </div>
              <p class="mt-1 text-sm">
                You have a new message
              </p>
            </div>
            <p class="mt-8 font-medium text-gray-500 dark:text-white text-sm sm:text-base">Yesterday</p>
            <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
              <div class=" inline-flex items-center justify-between w-full">
                <div class="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                    alt="Form Icon" class="w-6 h-6 mr-3" />
                  <h3 class="font-bold text-base text-gray-800">Updates</h3>
                </div>
                <p class="text-xs text-gray-500">
                  12:47
                </p>
              </div>
              <p class="mt-1 text-sm">
                Always remember to bring yourself up to speed with the latest info from SchoolDesk
              </p>
            </div>
            <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
              <div class=" inline-flex items-center justify-between w-full">
                <div class="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                    alt="Messages Icon" class="w-6 h-6 mr-3" />
                  <h3 class="font-bold text-base text-gray-800">Messages</h3>
                </div>
                <p class="text-xs text-gray-500">
                  12:43
                </p>
              </div>
              <p class="mt-1 text-sm">
                We're glad you've decided to use our Platform! Stay tuned!
              </p>
            </div>
            <button
              class="inline-flex text-sm bg-white justify-center px-4 py-2 mt-12 w-full text-red-500 items-center rounded font-medium
     shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-red-500
      hover:text-white hover:-translate-y-1 hover:scale-110 dark:hover:bg-white dark:text-gray-800 dark:hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 sm:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Clear all notifications
            </button>
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
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">SchoolDesk™</a>. All Rights Reserved.
        </span>
      </footer>
    </>

  )
}