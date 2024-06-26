// import { Metadata as NextMetadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Script from 'next/script'
import GoogleTagManager from '@/components/GoogleTagManager'
import WebpushrComponent from '@/components/WebpushrComponent'

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

// export const metadata: Metadata = {
//   title: 'Watch Online Movies™',
//   description:
//     ' Watch free movie, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!',
//   keywords:
//     'watch online movie, watch online movie latest movie, free movie, films, free movie online, free movie online, online movie, watch online movie free sites, watch free movie online free, free online movie, watch movie online, watch online movie, watch movie free online, online watch movie, free new movie online, watch movie online free, movie 2 watch, free full movie, online movie watch, movie online watch, online movie for free, online watch movie, 2024 Latest movie, 2024 latest movie online',
//     robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
//     canonicalUrl: 'https://watchonlinemovies.vercel.app',
// }

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='https://watchonlinemovies.vercel.app/sitemap.xml'
        />
        <meta property="og:locale" content="en_US" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
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
          content='watch online movie, watch online latest movie, free movie, films, free movie online, free movie online, online movie, watch online movie free sites, watch free movie online free, free online movie, watch movie online, watch online movie, watch movie free online, online watch movie, free new movie online, watch movie online free, movie 2 watch, free full movie, online movie watch, movie online watch, online movie for free, online watch movie, 2024 Latest movie, 2024 Latest movie online'
        />

        <meta
          name='description'
          content='Watch free Movie, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!'
        />
        <link rel='canonical' href='https://watchonlinemovies.vercel.app/' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
        />
        <meta
          property='og:description'
          content='Watch free Movie, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!'
        />
        <meta
          property='og:url'
          content='https://watchonlinemovies.vercel.app/'
        />
        <meta
          property='og:site_name'
          content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
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
          content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
        />
        <meta property='og:type' content='video.movie' />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
          content='WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg'
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
*/}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        /> 

        <Script src='../../propler/ads.js' defer />
        <GoogleTagManager gtmId={gtmId} />
        <WebpushrComponent />
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
