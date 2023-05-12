import '/styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';
import { Image } from 'cloudinary-react'





function Application({ Component, pageProps }) {
 

  return ( 
    <>
     <div className="center">
     <Script
        src="https://js.wpadmngr.com/static/adManager.js"
        data-admpid="82683"
        strategy="afterInteractive"
      />
        <GoogleAnalytics measurementId="G-4YRYZ4XKWN" />

     
        <PageTransition>  
          <Hamburger />
          <Component {...pageProps} />
          <Footer />
        </PageTransition>
     </div>
   </>
  );
}



export default Application;
