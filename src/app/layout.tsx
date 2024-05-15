import { Metadata as NextMetadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Script from 'next/script'
import GoogleTagManager from '@/components/GoogleTagManager'


const inter = Inter({ subsets: ['latin'] })

const gtmId = 'G-REYHDZZ5K8'

const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Watch Online Movies',
    url: 'https://watchonlinemovies.vercel.app/',
    image: [
      'https://watchonlinemovies.vercel.app/wp-content/uploads/2023/05/favicon.ico'
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://watchonlinemovies.vercel.app/logo.png',
      width: 280,
      height: 80
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://watchonlinemovies.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://watchonlinemovies.vercel.app/search?q={search_term_string}'
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
            '@id':
              'https://watchonlinemovies.vercel.app/author/watchnewsonline/',
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

export const metadata: Metadata = {
  title: 'Watch Online Movies™',
  description:
    ' Watch free movie, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!',
  keywords:
    'watch online movie, watch online movie latest movie, free movie, films, free movie online, free movie online, online movie, watch online movie free sites, watch free movie online free, free online movie, watch movie online, watch online movie, watch movie free online, online watch movie, free new movie online, watch movie online free, movie 2 watch, free full movie, online movie watch, movie online watch, online movie for free, online watch movie, 2024 Latest movie, 2024 latest movie online',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    canonicalUrl: 'https://watchonlinemovies.vercel.app',
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
       
          
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <cript
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
     
        <Script src='../../propler/ads.js' defer />
        <GoogleTagManager gtmId={gtmId} />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
