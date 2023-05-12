
import Link from 'next/link'

import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '/styles/video-player.module.css'
import IPLHighlights from 'pages/IPLHighlights';

import ShareButtons from '/components/ShareButtons';
import Script from 'next/script';
import { Image } from 'cloudinary-react'



import MatchInfo from '/components/MatchInfo';



const IPLMatch02  = () => {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

const match1 = {
  date: "April 08, 2023",
  time: "07:30 PM IST",
  venue: { name: "Wankhede Stadium,", city: "Mumbai." },
  umpires: { field: "Nikhil Patwardhan & Chris Gaffaney.", third: "Anil Chaudhary." },
};

const match2 = {
  date: "April 1, 2023",
  time: "3:00 PM IST",
  venue: { name: "Narendra Modi Stadium", city: "Ahmedabad" },
  umpires: { field: "Khalid Saiyed", third: "Virender Kumar Sharma" },
};

const schemaData   = {
  "@context": "https://schema.org",
  
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://uwatchfree.vercel.app/Sports-2023/IPL-2023/IPLMatch02"
    
  },
  "headline": "IPL Mumbai Indians vs Chennai Super Kings (2023) Sports Online Free | Uwatchfree™",
  "image": "https://uwatchfree.vercel.app/ipl-2023-match12.webp",

  "datePublished": '2023-01-01T09:00:00.000Z',
  "dateModified": '2023-01-01T09:00:00.000Z',
  "author": [{
      "@type": "Person",
      "name": "DrTrailer",
      "url": "https://uwatchfree.vercel.app/DrTrailer.png"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "Uwatchfree",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uwatchfree.vercel.app/og_image.jpg"
      }
    },
  "description": "Uwatchfree™ IPL CSK VS MI (2023) Sports Online Free | Watch Movies, TV-Series & Sports Live Online Free"

};

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};

  return (
    <div>
               <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
     <Head>
     <title>Watch IPL Live Matches (2023) Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree, daddylive, streaming free, livetv, freetvchannels, onlinetv, tvchannelsfree, watchtvlive, online tv channels, updated live stream, live sports streaming, stream sports live, watch live sports online, live sports online Live sports TV, free sports streaming, live sports channels, sports streaming services, online sports streaming, sports live stream free, sports live TV, live cricket streaming, live football streaming, live basketball streaming, live baseball streaming, live soccer streaming, live NHL streaming, live NFL streaming, live tennis streaming, live MMA streaming" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch IPL CSK VS MI (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Sports-2023/IPL-2023/IPLMatch02" />
<meta property="og:image" content="https://uwatchfree.vercel.app/ipl-2023-match12.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch IPL CSK VS MI (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://uwatchfree.vercel.app/ipl-2023-match12.webp" />
<meta name="description" content="Watch IPL CSK VS MI (2023) Sports Online on Uwatchfree™, You can also download IPL CSK VS MI (2023) in full HD quality to watch later offline." />
<script src="../../propler/ads.js" defer></script> 
<link rel="canonical" href="https://uwatchfree.vercel.app/TvShows/IPL-2023/" />
 

      </Head>
<Script src="../../propler/ads.js" defer />

      <div className="bg-gray-600 ">

        
    
        
    <h1 className="mb-4 py-5 font-bold leading-none tracking-tight text-white  text-center md:text-2xl lg:text-3xl dark:text-white"  style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>IPL Mumbai Indians vs Chennai Super Kings </h1>

    <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white  text-center md:text-2xl lg:text-3xl dark:text-white">Saturday 08th April 2023 - Schedule Time IST @ 07:30 </h2>
    <div className={styles['iframe-container']}>
    <iframe className="video responsive rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 webkitallowFullScreen mozallowFullScreen allowFullScreen" marginHeight="0" marginWidth="0" src="https://daddylivehd.sx/embed/stream-65.php" name="iframe_a" scrolling="no" allowFullScreen="yes" width="100%" height="100%" frameBorder="0" />
    </div>     
    <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">*Note: Pls Select the in the Player to Change your Language of your Choice and Setting  to Change the Quality of Video.</h3>
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />


    <div className="grid grid-cols-1 mx-20 sm:grid-cols-2  x:grid-cols-3 gap-4">
    
    <div className="flex justify-center">
    <Link href="../../../../Channel/Ch65">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
  Sky Sports Cricket 
      </button></Link>
    </div>
    <div className="flex justify-center">
    <Link href="../../../../Channel/Ch346">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
  Willow Cricket 
      </button></Link>
    </div>
    <div className="flex justify-center">
    <Link href="../../../../Channel/Ch370">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      Astro Cricket 
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../../../Channel/Ch369">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
  Fox Cricket 
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../../../Channel/Ch589">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
  Sky Sport 2 NZ 

      </button></Link>
      </div>
      </div>
    <div className="flex flex-col space-y-4 m-8">
    <h1 className="text-white text-3xl font-bold ">Match Details</h1>
      <MatchInfo {...match1} />
      </div>

    
 {/*

<MatchInfo {...match2} />
 
   
<div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">

<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "  onClick={togglePopup} >

        <h2 >Watch Offical Trailer</h2></button>
        </div>
   
        {showPopup && (
        <div className="popup-overlay">
         
         <div className="popup ">
               <button className="close-button" onClick={togglePopup}>
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button>
          <h2 className="text-2xl font-bold" >Offical Trailer IPL CSK VS MI (2023)</h2>
           <div className={styles['iframe-container']}>
 <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " webkitallowFullScreen mozallowFullScreen allowFullScreen src="https://sbface.com/e/9sglfjm39hfm.html" />
                   
             </div></div>
          </div>
       
      )}

      <style jsx>{`
        .popup-overlay {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

             .popup {
          width: 800px;
          background-color: gray;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          animation: slide-down 0.5s ease;
        }

       
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
       */} 
 
 <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white  text-center md:text-2xl lg:text-3xl dark:text-white">
24/7 Live Sports & Entertainment Channels</h2>
<h2  className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
    <a href="../Sports" > 
       Watch Other Sports</a></h2>

    <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
 
 


<IPLHighlights />

<Link href="../../SportsAds"><button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
 
  Back To Sports Section

</button></Link>
 


</div>
    </div> </div>
  )
}

export default IPLMatch02 ;