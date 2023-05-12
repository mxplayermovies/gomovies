import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from "next/link";

function ATFAAds() {
  const [showAd, setShowAd] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000); // Display ad after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div>
     
      {showAd && !isClosed && (
        // Add your ad component here
        <>
           <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-black bg-opacity-100 transition-opacity"></div>


  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          
          <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-Center">
    
          
            <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
             
            <Image class=""  src='https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681609917/adult-18_wjhoqc.svg' alt='Logo' width={200} height={200}  loading="lazy"/>
            </div>
            <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h1 class="text-xl font-bold leading-6 text-red-600" id="modal-title">Are You Sure You Want to Continue?</h1>
              <div class="mt-2">
                <p class="text-lg font-bold text-gray-500">This Part of the Website Requires you to be 18 years of Age or Older.</p>
                </div>
            </div>
          </div>

    
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex flex flex-col items-center justify-center sm:flex-row-reverse sm:px-6">
      {remainingTime > 0 && (
        <div class="text-xl font-bold text-red-600">

          Connecting To Server in {remainingTime} Sec...
        </div>
      )}
       {remainingTime <= 0 && (
        <Link href="/" >
      <button onClick={handleClose} type="button" className=" inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 ">Exit </button></Link>
    )}
   {remainingTime > 0 && (
        <div class="text-xl font-bold text-red-600">

      
        </div>
      )}
       {remainingTime <= 0 && (
     <button onClick={handleClose} type="button" className=" inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 ">Enter </button>
  )}
 
      </div>
      <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-center">
              <div class="mt-2">
                <p class="text-lg font-bold text-gray-500">Please Verify your age to view this content, or click EXIT to Leave </p>
              </div> </div>
    </div>
  </div>
</div>
</div>
          
        </>
      )}
    </div>
  );
}

export default ATFAAds;