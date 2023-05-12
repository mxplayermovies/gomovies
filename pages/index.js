import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import HeroBanner from '../components/HeroBanner';
import style from '../styles/styles.module.css';

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const HeroBannerContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
`;

const HeroBannerImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const VideoBackground = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
`;

const Header = styled.h1`
position: absolute;  
font-size: 24px;
top: 45%;
  text-align: center;
  color: white;
 
`;

const Text = styled.h2`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  font-size: 20px;
  text-align: center;
  top: 50%;
  color: white;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none; 
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 63%;
  transform: translate(-50%, -50%);
`;



const schemaData   = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"CollectionPage",
      "@id":"https://gomoviesfree.vercel.app/",
      "url":"https://gomoviesfree.vercel.app/",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "isPartOf":{
        "@id":"https://gomoviesfree.vercel.app/#website"
      },
      "about":{
        "@id":"https://gomoviesfree.vercel.app/#organization"
      },
      "description":"Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free",
      "breadcrumb":{
        "@id":"https://gomoviesfree.vercel.app/#breadcrumb"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://gomoviesfree.vercel.app/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://gomoviesfree.vercel.app/#website",
      "url":"https://gomoviesfree.vercel.app/",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "description":"Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free",
      "publisher":{
        "@id":"https://gomoviesfree.vercel.app/#organization"
      },
      "potentialAction":[
        {
          "@type":"SearchAction",
          "target":{
            "@type":"EntryPoint",
            "urlTemplate":"https://gomoviesfree.vercel.app/?s={search_term_string}"
          },
          "query-input":"required name=search_term_string"
        }
      ],
      "inLanguage":"en-US"
    },
    {
      "@type":"Organization",
      "@id":"https://gomoviesfree.vercel.app/#organization",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "url":"https://gomoviesfree.vercel.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://gomoviesfree.vercel.app/#/schema/logo/image/",
        "url":"https://gomoviesfree.vercel.app/logo.png",
        "contentUrl":"https://gomoviesfree.vercel.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free"
      },
      "image":{
        "@id":"https://gomoviesfree.vercel.app/#/schema/logo/image/"
      }
    }
  ]
};

const LandingPage = () => {


  return (
    <>
     <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
     <Head>
        <title>Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <meta property="fb:app_id" content="602176271414602" />
        <meta name='dailymotion-domain-verification' content='dmv6sg06w9r5eji88' />
        <meta name="monetag" content="076afbb772da1a62ef6f43756dfa5f65"></meta>
      <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
        <meta name="description" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content="gomovies,gomovies.to,gomovies.sx,gomovieshd.today,gomovieshd.us.org,gomovieshd.tw,f9movies,gomovies.123movies,gomovies-sc.com,streaming,latest movies,online tv,latest free movies,watch latest movies online" />
      <meta property="og:locale" content="en_US" />   
      <meta property=" Content-Security-Policy: frame-ancestors 'self' gomoviesfree.vercel.app *.gomoviesfree.vercel.app;" />
      <meta property="og:site_name" content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:description" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:url" content="https://gomoviesfree.vercel.app/" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image" content="https://gomoviesfree.vercel.app/og_image.jpg" />
      <meta property="og:image:secure_url" content="https://gomoviesfree.vercel.app/og_image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:description" content=" Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:image" content="https://gomoviesfree.vercel.app/og_image.jpg" />
    

      <link rel="alternate" hrefLang="en-us" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-gb" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-ca" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-au" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-se" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-fr" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-dk" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-no" 	href="https://gomoviesfree.vercel.app/"/>
  <link rel="alternate" hrefLang="x-default" 	href="https://gomoviesfree.vercel.app/"/>
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://gomoviesfree.vercel.app/" />

      </Head>
      <Link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
    
      <HeroBannerContainer >
      <HeroBanner
  src="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610087/og_image_okmgde.jpg"
  alt="Hero banner"
  loading="lazy"
  height={100}
/>
</HeroBannerContainer>
<PageContainer >
        <Header className='container mx-5'   style={{textShadow: "5px 5px 2px #000" }}>Welcome to Go Movies™ </Header>
        <Text className='container mx-5' style={{textShadow: "5px 5px 2px #000" }}>Watch Movies TV-Series & Sports Live Online Free </Text>
        <Link href="/page">
          <Button>Enter Free </Button>
        </Link> 
        <VideoBackground autoPlay muted loop>
          <source src="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866" type="video/mp4" />
        </VideoBackground>
      </PageContainer>
    </>
  );
};

export default LandingPage;
