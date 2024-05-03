import liveData from '../public/live.json'
import movieData from '../public/movie.json'
import tvshowData from '../public/tvshow.json'
import adultData from '../public/adult.json'
import Head from 'next/head'
import ShareButtons from '@components/ShareButtons'
// import ExtensionInstallation from '@components/ExtensionInstallation';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
// For example, in styles/globals.css
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [live, setlive] = useState(liveData)
  const [movie, setmovie] = useState(movieData)
  const [tvshow, settvshow] = useState(tvshowData)
  const [adult, setadult] = useState(adultData)
  const [flashing, setFlashing] = useState(true);

  const shareMessage = 'Watch Now !!! Watch Online Movies™ - For Movies, TV Show & Sports!';

  useEffect(() => {
    // Flashing effect interval (toggle flashing state every 500ms)
    const interval = setInterval(() => {
      setFlashing((prevFlashing) => !prevFlashing);
    }, 500);

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  const uwatchfreeSchema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Watch Online Movies",
      "url": "https://watchonlinemovies.vercel.app/",
      "image": ["https://watchonlinemovies.vercel.app/wp-content/uploads/2023/05/favicon.ico"],
      "logo": {
        "@type": "ImageObject",
        "url": "https://watchonlinemovies.vercel.app/logo.png",
        "width": 280,
        "height": 80
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://watchonlinemovies.vercel.app/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://watchonlinemovies.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]);
  
  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://watchonlinemovies.vercel.app/author/watchnewsonline/',
        name: 'Dr Trailer',
        url: 'https://watchonlinemovies.vercel.app/author/watchnewsonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://watchonlinemovies.vercel.app/#organization',
        name: 'Watch Online Movies™',
        url: 'https://watchonlinemovies.vercel.app/'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlinemovies.vercel.app/#website',
        url: 'https://watchonlinemovies.vercel.app/',
        name: 'Watch Online Movies™',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://watchonlinemovies.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://watchonlinemovies.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://watchonlinemovies.vercel.app/#webpage',
        url: 'https://watchonlinemovies.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://watchonlinemovies.vercel.app/author/uwatchfreeonline/',
          name: 'Dr Trailer',
          url: 'https://watchonlinemovies.vercel.app/author/uwatchfreeonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://watchonlinemovies.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://watchonlinemovies.vercel.app/',
            url: 'https://watchonlinemovies.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://watchonlinemovies.vercel.app/author/watchnewsonline/',
              name: 'Dr Trailer',
              url: 'https://watchonlinemovies.vercel.app/author/watchnewsonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://watchonlinemovies.vercel.app/#organization',
              name: 'Watch Online Movies™',
              url: 'https://watchonlinemovies.vercel.app/'
            }
          }
        ]
        // "sameAs": ["https://www.your-social-media-profile1.com", "https://www.your-social-media-profile2.com"]
      }
    ]
  })

  return (
    <div className='w-full bg-black'>
      <Script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
        strategy='beforeInteractive'
      />

      <div className='container mx-auto'>
        <Head>
        <title>
            {' '}
            Watch Online Movies™ - For Movies, TV Show & Sports Live.{' '}
          </title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='watch online movies, latest movies, free movies, films, free movies online, free movies online, online movies, watch online movie free sites, watch free movies online free, free online movies, watch movies online, watch online movies, watch movies free online, online watch movie, free new movies online, watch movies online free, movies 2 watch, free full movies, online movie watch, movies online watch, online movies for free, online watch movies, 2024 Latest Movies, 2024 Latest Movies online'
          />
          <meta
            name='description'
            content='Watch free Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <link rel='canonical' href='https://watchonlinemovies.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Watch Online Movies™ - For Movies, TV Show & Sports Live.'
          />
          <meta
            property='og:description'
            content='Watch free Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <meta property='og:url' content='https://watchonlinemovies.vercel.app/' />
          <meta
            property='og:site_name'
            content='Watch Online Movies™ - For Movies, TV Show & Sports Live.'
          />
          <meta
            property='og:image'
            content='https://watchonlinemovies.vercel.app/og_image.jpg'
             />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='Watch Online Movies™ - For Movies, TV Show & Sports Live.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content='4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0'
          />
          <meta
            name='facebook-domain-verification'
            content='du918bycikmo1jw78wcl9ih6ziphd7'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dm0zffs8dj8pcb3gd'
          />
          <meta name='monetag' content='5c1338da4436ca30815b74198d2dfe20' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
             <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BFiNtErWPSlY1EdDYECv3rzPp2d5bVs46-O6I4iILsKtA2USCyBEakKcLs7yooH4Gj36tIvYtQtpZ0qZVfhHyAU' });
          `
          }}
        />
        </Head>
        {/* <ExtensionInstallation /> */}
    <ShareButtons
        title="Watch Online Movies™"
        description="For Movies, TV Show & Sports social platform"
        shareMessage={shareMessage}
      />
        <main className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1
            className=' text-center py-5 font-bold text-3xl items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          >
            Watch Online Movies™ - For Movies, TV Show & Sports live.  </h1>
         <p className=' text-center  font-bold text-lg items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          > 
"Watch Online Movies™ - For Movies, Tv Shows & Sports Live" is a platform that provides access to a wide range of high-definition movies, tv shows & live Live streaming online. With this platform, users can enjoy a diverse selection of movies, tv shows & live Live spanning various genres, including action, drama, comedy, thriller, romance, live and more.

The platform aims to offer a seamless and enjoyable watching experience, allowing users to browse through a vast collection of movies, tv shows & live Live and watch them instantly without the need for downloading. Additionally, it may provide features such as personalized recommendations, user ratings, and reviews to help users discover new movies, tv shows & live Live tailored to their preferences.

Overall, "Watch Online Movies™ - For Movies, Tv Shows & Sports Live" strives to be a go-to destination for enthusiasts looking for convenient and high-quality streaming options for their entertainment needs.

</p>
<p className=' text-center font-bold text-lg items-center justify-center'
            style={{ color: '#FF0000',  textShadow: '5px 5px 2px #000', marginTop:'20px' }}>
        To enhance your experience on our website, please install the SquareX - Be Secure & Anonymous Chrome extension from the Chrome Web Store:
        <br />
        <button
  className={`btn btn-success ${flashing ? 'btn-flashing' : ''}`}
  onClick={() => {
    // Handle button click event
  }}
>
        <a href="https://chrome.google.com/webstore/detail/squarex-be-secure-anonymo/kapjaoifikajdcdehfdlmojlepfpkpoe" className=' text-center font-bold text-lg items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000', marginTop:'20px' }} target="_blank" rel="noopener noreferrer">
          Install SquareX 
        </a></button>
      </p>




          <div className='py-8'>
         
          </div>
          <div className='container mt-0 '>
            <Tabs>
              <TabList className={styles.tabList}>
               
                <Tab
                  className={`${styles.tab} ${styles.movie}`}
                  style={{
                    fontWeight: 'bold',
                    textShadow: '2px 5px 5px #000000'
                  }}
                >
                  Movies
                </Tab>
                <Tab
                  className={`${styles.tab} ${styles.tvshow}`}
                  style={{
                    fontWeight: 'bold',
                    textShadow: '2px 5px 5px #000000'
                  }}
                >
                  TV Shows
                </Tab>
                <Tab
                  className={`${styles.tab} ${styles.adult}`}
                  style={{
                    fontWeight: 'bold',
                    textShadow: '2px 5px 5px #000000'
                  }}
                >
                  Adult
                </Tab>
                 <Tab
                  className={`${styles.tab} ${styles.live}`}
                  style={{
                    fontWeight: 'bold',
                    textShadow: '2px 5px 5px #000000'
                  }}
                >
                  Live
                </Tab>
              </TabList>

            
{/* Repeat the above structure for other categories like 'live' and 'market' */}


              <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
    {/* Display images in a grid */}

    {movie.map(movieItem => (
      <div key={movieItem.id} className='flex flex-col justify-between'>
        <a href={`/movie/${movieItem.id}`}>
          <div className='relative'>
            <Image
              src={movieItem.image}
              alt={movieItem.title}
              className='w-full '
              // loading='lazy'
              width={500}
              height={500}
              priority
              style={{
                maxWidth: '100%',
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '25px',
                // boxShadow: '0 0 10px 0 #40D7BC',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '2px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {movieItem.badge}
            </div>
            {/* <div
              style={{
                position: 'absolute',
                // position: 'relative',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '5px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {newsItem.genre}
            </div> */}
            <h2 className="text-white text-lg font-semibold mt-2">{movieItem.title}</h2>
          </div>
        </a>
        {/* <h2 className="text-center text-xl mt-2">{movie.title}</h2> */}
      </div>
    ))}
  </div>
</TabPanel>

{/* Repeat the above structure for other categories like 'live' and 'market' */}


              <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
    {/* Display images in a grid */}

    {tvshow.map(tvshowItem => (
      <div key={tvshowItem.id} className='flex flex-col justify-between'>
        <a href={`/tvshow/${tvshowItem.id}`}>
          <div className='relative'>
            <Image
              src={tvshowItem.image}
              alt={tvshowItem.title}
              className='w-full '
              width={500}
              height={500}
              priority
              style={{
                maxWidth: '100%',
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '25px',
                // boxShadow: '0 0 10px 0 #40D7BC',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '2px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {tvshowItem.badge}
            </div>
            {/* <div
              style={{
                position: 'absolute',
                // position: 'relative',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '5px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {newsItem.genre}
            </div> */}
            <h2 className="text-white text-lg font-semibold mt-2">{tvshowItem.title}</h2>
          </div>
        </a>
        {/* <h2 className="text-center text-xl mt-2">{movie.title}</h2> */}
      </div>
    ))}
  </div>
</TabPanel>

{/* Repeat the above structure for other categories like 'live' and 'market' */}


              <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
    {/* Display images in a grid */}

    {adult.map(adultItem => (
      <div key={adultItem.id} className='flex flex-col justify-between'>
        <a href={`/adult/${adultItem.id}`}>
          <div className='relative'>
            <Image
              src={adultItem.image}
              alt={adultItem.title}
              className='w-full '
              width={500}
              height={500}
              priority
              style={{
                maxWidth: '100%',
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '25px',
                // boxShadow: '0 0 10px 0 #40D7BC',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '2px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {adultItem.badge}
            </div>
            {/* <div
              style={{
                position: 'absolute',
                // position: 'relative',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '5px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {newsItem.genre}
            </div> */}
            <h2 className="text-white text-lg font-semibold mt-2">{adultItem.title}</h2>
          </div>
        </a>
        {/* <h2 className="text-center text-xl mt-2">{movie.title}</h2> */}
      </div>
    ))}
  </div>
</TabPanel>
  <TabPanel>
  <h2
            className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          >
           Monday 29th April 2024 - Schedule Time UK GMT </h2>

  <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
 
    {live.map(liveItem => (
      <div key={liveItem.id} className='flex flex-col justify-between'>
        <a href={`/live/${liveItem.id}`}>
          <div className='relative'>
            <Image
              src={liveItem.image}
              alt={liveItem.title}
              className='w-full '
              width={500}
              height={500}
              priority
              style={{
                maxWidth: '100%',
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '25px',
                // boxShadow: '0 0 10px 0 #40D7BC',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontWeight: 'bold',
                color: '#40D7BC',
                padding: '2px',
                borderRadius: '5px',
                // fontSize: '12px',
                textShadow: '3px 3px 3px #000'
              }}
            >
              {liveItem.badge}
            </div>
          
            <h2 className="text-white text-lg font-semibold mt-2" >{liveItem.name}</h2>
          </div>
        </a>
        {/* <h2 className="text-center text-xl mt-2">{movie.title}</h2> */}
      </div>
    ))}
  </div>
</TabPanel>

{/* Repeat the above structure for other categories like 'live' and 'market' */}

            </Tabs>
          </div>

                </main>
      </div>
    </div>
  )
}

export default HomePage
