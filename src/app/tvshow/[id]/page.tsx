import tvContainer from "@/components/tvContainer";
import VideoPlayer from "@/components/VideoPlayer";
import { getImagePath } from "@/lib/getImagePath";
import Styles from '../../../../styles/video-player.module.css'
import Script from 'next/script'
import Head from 'next/head'

import {
  gettvDetails,
  gettvVideos,
  getPopulartvs,
} from "@/lib/gettvs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: " Watch Online Movies™ - The Best Movies Platform HD Movies.",
};

interface Props {
  params: {
    id: string;
  };
}

const tvDetails = async ({ params: { id } }: Props) => {
  const tvs = await gettvVideos(id);
  const videos = tvs.map((tv: any) => ({
    id: tv.id,
    iso_639_1: tv.iso_639_1,
    iso_3166_1: tv.iso_3166_1,
    key: tv.key,
    name: tv.name,
    official: tv.official,
    published_at: tv.published_at,
    site: tv.site,
    size: tv.size,
    type: tv.type,
  }));
  const details: any = await gettvDetails(id);
  const popoulartvs = await getPopulartvs();

  const embedUrl = `https://vidsrc.to/embed/tv/${id}/`;

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Watch Online tvs',
      url: 'https://watchonlinetvs.vercel.app/',
      image: [
        'https://watchonlinetvs.vercel.app/wp-content/uploads/2023/05/favicon.ico'
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'https://watchonlinetvs.vercel.app/logo.png',
        width: 280,
        height: 80
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://watchonlinetvs.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://watchonlinetvs.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://watchonlinetvs.vercel.app/author/watchnewsonline/',
        name: 'Dr Trailer',
        url: 'https://watchonlinetvs.vercel.app/author/watchnewsonline/',
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
        '@id': 'https://watchonlinetvs.vercel.app/#organization',
        name: 'Watch Online tvs™',
        url: 'https://watchonlinetvs.vercel.app/'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlinetvs.vercel.app/#website',
        url: 'https://watchonlinetvs.vercel.app/',
        name: 'Watch Online tvs™',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://watchonlinetvs.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://watchonlinetvs.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://watchonlinetvs.vercel.app/#webpage',
        url: 'https://watchonlinetvs.vercel.app/',
        name: 'tv',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://watchonlinetvs.vercel.app/author/uwatchfreeonline/',
          name: 'Dr Trailer',
          url: 'https://watchonlinetvs.vercel.app/author/uwatchfreeonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://watchonlinetvs.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://watchonlinetvs.vercel.app/',
            url: 'https://watchonlinetvs.vercel.app/',
            headline: 'tv',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id':
                'https://watchonlinetvs.vercel.app/author/watchnewsonline/',
              name: 'Dr Trailer',
              url: 'https://watchonlinetvs.vercel.app/author/watchnewsonline/',
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
              '@id': 'https://watchonlinetvs.vercel.app/#organization',
              name: 'Watch Online tvs™',
              url: 'https://watchonlinetvs.vercel.app/'
            }
          }
        ]
        // "sameAs": ["https://www.your-social-media-profile1.com", "https://www.your-social-media-profile2.com"]
      }
    ]
  })

  
  return (
    <div>
       <Head>
          <title>
            {' '}
            Watch Online Movies™ - The Best Movies Platform HD Movies.{' '}
          </title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinetvs.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='/favicon.ico'
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
            content='uwatchfree, uwatchfree latest tv, free tv, films, free tv online, free tv online, online tv, watch online tv free sites, watch free tv online free, free online tv, watch tv online, watch online tv, watch tv free online, online watch tv, free new tv online, watch tv online free, tv 2 watch, free full tv, online tv watch, tv online watch, online tv for free, online watch tv, 2024 Latest tv, 2024 Latest tv online'
          />
          <meta
            name='description'
            content='Watch free tv, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <link rel='canonical' href='https://watchonlinetvs.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
          />
          <meta
            property='og:description'
            content='Watch free tv, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <meta
            property='og:url'
            content='https://watchonlinetvs.vercel.app/'
          />
          <meta
            property='og:site_name'
            content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
          />
          <meta
            property='og:image'
            content='https://watchonlinetvs.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
          />
          
          <link
            rel="alternate"
            hrefLang="en-us"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-gb"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-ca"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-au"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-se"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-fr"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-dk"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-no"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="/"
          />

          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinetvs.vercel.app/sitemap.xml'
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
        <Script src='../../../propler/ads.js' defer />
      <div className="px-10 ">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group">
            <Image
              src={getImagePath(details?.backdrop_path)}
              alt={details?.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold underline decoration-[1px]">
              {details?.original_title}
            </h2>
            <p className="text-sm leading-6 tracking-wide mt-2">
              {details?.overview}
            </p>
            <p className="text-gray-200 text-sm">
              IMDB:{" "}
              <span className="text-white font-medium">
                {details.vote_average}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Votes:{" "}
              <span className="text-white font-medium">
                {details.vote_count}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Release Data:{" "}
              <span className="text-white font-medium">
                {details.release_date}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Genres:{" "}
              {details?.genres.map((item: any) => (
                <span key={item?.id} className="text-white font-medium mr-1">
                  {item?.name},
                </span>
              ))}
            </p>
            <p className="text-gray-200 text-sm">
              Tag Line:{" "}
              <span className="text-white font-medium">{details.tagline}</span>
            </p>
            <p className="text-gray-200 text-sm">
              Status:{" "}
              <span
                className={`font-medium ${
                  details?.status === "Released"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {details.status}
              </span>
            </p>
          </div>
        </div>
        <h1
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '1px 2px 2px #000' }}
        >
          Watch Online tv  {details?.original_title}{' '}
        </h1>
        <div className={Styles['iframe-container']}>
         {embedUrl && (
        <div className="w-full lg:w-1/2 min-h-96 flex justify-center items-center mt-6">
          <iframe
            src={embedUrl}
            className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl"
            frameBorder="0"
            allowFullScreen 
          style={{
  filter: 'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
  maxWidth: '100%',
  borderRadius: '20px',
  marginBottom: '20px', // Corrected to camelCase for marginBottom
}}

          ></iframe>
        </div>
      )}
    
      </div>
      <VideoPlayer videos={videos}  />
      </div>
      <div className="mt-6">
        <tvContainer
          tvs={popoulartvs}
          title="Popular tvs"
          isVertical
        />
      </div>
    </div>
  );
};

export default tvDetails;
