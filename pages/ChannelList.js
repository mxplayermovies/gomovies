import Table from '@components/Table '
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';


import WorldClock from '@components/WorldClock';

const ChannelList = () => {
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [ ])

  return (
    <div>
      
         <WorldClock />
      
<div className="flex  text-blue-600 text-center ">
    <Link href="/">
               <button className="close-button  mx-10" >
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Back </h2>  
          </button></Link>
          </div>
<Table />



  </div>

  
  )
}

export default ChannelList