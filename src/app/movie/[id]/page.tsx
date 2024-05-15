import MovieContainer from '@/components/MovieContainer'
import VideoPlayer from '@/components/VideoPlayer'
import { getImagePath } from '@/lib/getImagePath'
import Styles from '../../../../styles/video-player.module.css'
import Script from 'next/script'
import ShareButtons from '@/components/ShareButtons';

import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies
} from '@/lib/getMovies'

import Image from 'next/image'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const MovieDetails = async ({ params: { id } }: Props) => {
  const movies = await getMovieVideos(id)

  const videos = movies.map((movie: any) => ({
    id: movie.id,
    iso_639_1: movie.iso_639_1,
    iso_3166_1: movie.iso_3166_1,
    key: movie.key,
    name: movie.name,
    official: movie.official,
    published_at: movie.published_at,
    site: movie.site,
    size: movie.size,
    type: movie.type
  }))
  const details: any = await getMovieDetails(id)
  const popoularMovies = await getPopularMovies()
  const ogImageUrl = details?.og?.image
  const embedUrl = `https://vidsrc.to/embed/movie/${id}/`

  const title = details?.original_title;
  const description = 'Watch Online Movies™ - For Movies & TV Show.';
  const image = getImagePath(details?.backdrop_path);

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
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlinemovies.vercel.app#website',
        url: 'https://watchonlinemovies.vercel.app',
        name: 'Watch Online Movies™',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}` : '/',
        url: details ? details.embedUrl : '/',
        name: details?.original_title,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        isPartOf: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}` : '/'
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}` : '/'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
        name: 'Dr Trailer',
        url: 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['https://watchonlinemovies.vercel.app']
      },
      {
        '@type': 'Article',
        '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#article` : '/',
        headline: details?.original_title,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'Movie',
        author: {
          '@id': 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: 'Watch Online Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!',
        image: getImagePath(details?.backdrop_path),
        name: details?.original_title,
        isPartOf: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#webpage` : '/'
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#webpage` : '/'
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#blogPost` : '/',
        headline: details?.original_title,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'Movie',
        author: {
          '@id': 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: 'Watch Online Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!',
        image: getImagePath(details?.backdrop_path),
        name: details?.original_title,
        isPartOf: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#webpage` : '/'
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': details ? `https://watchonlinemovies.vercel.app/${details.original_title.replace(/\s/g, '')}#webpage` : '/'
        }
      }
    ]
  });
  
  

  const baseUrl = 'https://watchonlinemovies.vercel.app/'
  const ldJsonData = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    // '@id': details ? details?.original_title.replace(/\s/g, '') : '/',
    // '@id': details ? `${baseUrl}movie/${details?.original_title.replace(/\s/g, '')}` : baseUrl,
    '@id': details ? details?.original_title.replace(/\s/g, '') : '/',
    name: details?.original_title,
    url: embedUrl ? details?.embedUrl : '/',
    description: details?.overview,
    image: getImagePath(details?.backdrop_path),
    genre: details?.genres.map((item: any) => item.name).join(', '),
    datePublished: details?.release_date,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: details?.original_title,
        urlTemplate: ''
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: details?.country
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Watch Online Movies™',
      logo: {
        '@type': 'ImageObject',
        url: 'https://watchonlinemovies.vercel.app/og_image.jpg' // Typo in URL, should be corrected
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  }

  return (
    <div>
      <title>{details?.original_title}</title>

      <link
        rel='sitemap'
        type='application/xml'
        title='Sitemap'
        href='https://watchonlinemovies.vercel.app/sitemap.xml'
      />
      <meta property='og:locale' content='en_US' />
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
      <meta property='og:title' content={details?.original_title} />
      <meta
        property='og:description'
        content='Watch free Movie, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!'
      />
      <meta property='og:url' content='https://watchonlinemovies.vercel.app/' />
      <meta
        property='og:site_name'
        content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
      />
      {ogImageUrl && ( // Render meta tag only if ogImageUrl is available
        <meta property='og:image' content={ogImageUrl} />
      )}

      <meta property='og:image:width' content='1280' />
      <meta property='og:image:height' content='720' />
      <meta property='og:image:type' content='image/webp' />
      <meta
        name='application-name'
        content='Watch Online Movies™ - The Best Movies Platform HD Movies.'
      />
      <meta property='og:type' content='video.movie' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
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

      {/* <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          /> */}
      <meta
        property='og:image'
        content={getImagePath(details?.backdrop_path)}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: rankMathSchema }}
      />

      <Script src='../../../propler/ads.js' defer />
      <div className='px-10 '>
        <div className='py-10 flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group'>
            <Image
              src={getImagePath(details?.poster_path)}
              alt={details?.title}
              width={1920}
              height={1080}
              className='w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500'
            />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col gap-2'>
            <h2
              className='text-2xl font-semibold underline decoration-[1px]'
              style={{ color: '#000', textShadow: '1px 1px 1px #000' }}
            >
              {details?.original_title}
            </h2>
            <p className='text-sm leading-6 tracking-wide mt-2'>
              {details?.overview}
            </p>
            <p className='text-blue-500 text-sm'>
              IMDB:{' '}
              <span className='text-black font-bold'>
                {details.vote_average}
              </span>
            </p>
            <p className='text-blue-500 text-sm'>
              Votes:{' '}
              <span className='text-black font-bold'>{details.vote_count}</span>
            </p>
            <p className='text-blue-500 text-sm'>
              Release Data:{' '}
              <span className='text-black font-bold'>
                {details.release_date}
              </span>
            </p>
            <p className='text-blue-500 text-sm'>
              Genres:{' '}
              {details?.genres.map((item: any) => (
                <span key={item?.id} className='text-black font-bold mr-1'>
                  {item?.name},
                </span>
              ))}
            </p>
            <p className='text-blue-500 text-sm'>
              Tag Line:{' '}
              <span className='text-black font-bold'>{details.tagline}</span>
            </p>
            <p className='text-blue-500 text-sm'>
              Status:{' '}
              <span
                className={`font-bold ${
                  details?.status === 'Released'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {details.status}
              </span>
            </p>
          </div>
        </div>
        <h1
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#000', textShadow: '1px 2px 2px #000' }}
        >
          Watch Online Movie {details?.original_title}{' '}
        </h1>
        <div className={Styles['iframe-container']}>
          {embedUrl && (
            <div className='w-full lg:w-1/2 min-h-96 flex justify-center items-center mt-6'>
              <iframe
                src={embedUrl}
                className='w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl'
                frameBorder='0'
                allowFullScreen
                style={{
                  filter:
                    'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
                  maxWidth: '100%',
                  borderRadius: '20px',
                  marginBottom: '20px' // Corrected to camelCase for marginBottom
                }}
              ></iframe>
            </div>
          )}
        </div>

        <ShareButtons title={title} description={description} image={image} />
        <VideoPlayer videos={videos} />
        <ShareButtons title={title} description={description} image={image} />
         </div>
      <div className='mt-6'>
        <MovieContainer
          movies={popoularMovies}
          title='Popular Movies'
          isVertical
        />
      </div>
    </div>
  )
}

export default MovieDetails
