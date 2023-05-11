import { useState, useEffect } from "react";


function SkipAds() {
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

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>


  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          
          <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-Center">
    
            <h2 class="text-4xl font-bold leading-6 text-red-600" id="modal-title">Connecting To Server 
           </h2>
            <h3 class="text-2xl font-bold leading-6 text-center items-center text-gray-500 my-5"  id="modal-title"> 
            Retrieving File Wait For 10 Sec...</h3> 
        
            <div class="mt-2">
            <video class="w-full"  autoPlay loop >
             
<source src="../../official-trailer.mp4" type="video/mp4" alt="Official Trailer" poster="https://Go Movies.vercel.app/coverads.webp">
</source>
</video>
            
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

      <button onClick={handleClose} type="button" className=" inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 ">Connected </button>
       )}
      </div>
    </div>
  </div>
</div>
</div>

        </>
      )}
    
    </div>
    
  );
}


export default SkipAds;