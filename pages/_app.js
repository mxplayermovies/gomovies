import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';


function Application({ Component, pageProps }) {
 

  return ( 
    <>
     <div className="center">
        <GoogleAnalytics measurementId="G-4YRYZ4XKWN" />
        <Script async data-id="101407379" src="//static.getclicky.com/js"></Script>

     
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
