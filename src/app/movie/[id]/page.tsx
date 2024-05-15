import MovieContainer from '@/components/MovieContainer'
import VideoPlayer from '@/components/VideoPlayer'
import { getImagePath } from '@/lib/getImagePath'
import Styles from '../../../../styles/video-player.module.css'
import Script from 'next/script'


import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies
} from '@/lib/getMovies'
import { Metadata as NextMetadata } from 'next';
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

  const embedUrl = `https://vidsrc.to/embed/movie/${id}/`

  // const uwatchfreeSchema = JSON.stringify([
  //   {
  //     "@context": "https://schema.org",
  //     "@type": "Organization",
  //     "name": "Watch Online Movies",
  //     "url": "https://watchonlinemovies.vercel.app/",
  //     "image": ["https://watchonlinemovies.vercel.app/wp-content/uploads/2023/05/favicon.ico"],
  //     "logo": {
  //       "@type": "ImageObject",
  //       "url": "https://watchonlinemovies.vercel.app/logo.png",
  //       "width": 280,
  //       "height": 80
  //     }
  //   },
  //   {
  //     "@context": "https://schema.org",
  //     "@type": "WebSite",
  //     "url": "https://watchonlinemovies.vercel.app/",
  //     "potentialAction": {
  //       "@type": "SearchAction",
  //       "target": {
  //         "@type": "EntryPoint",
  //         "urlTemplate": "https://watchonlinemovies.vercel.app/search?q={search_term_string}"
  //       },
  //       "query-input": "required name=search_term_string"
  //     }
  //   }
  // ]);

  // const rankMathSchema = JSON.stringify({
  //   '@context': 'https://schema.org',
  //   '@graph': [
  //     {
  //       '@type': ['Person', 'Organization'],
  //       '@id': 'https://gravatar.com/drtrailer2022/#person',
  //       name: 'Dr Trailer'
  //     },
  //     {
  //       '@type': 'WebSite',
  //       '@id': 'https://watchonlinemovies.vercel.app#website',
  //       url: 'https://watchonlinemovies.vercel.app',
  //       name: 'Watch Online Movies™',
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       inLanguage: 'en-US'
  //     },
  //     {
  //       '@type': 'WebPage',
  //       '@id': `/ #webpage`,
  //       url: `/}`,
  //       name: `$ {details?.original_title} | Watch Online Movies™`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       isPartOf: {
  //         '@id': 'https://watchonlinemovies.vercel.app#website'
  //       },
  //       inLanguage: 'en-US'
  //     },
  //     {
  //       '@type': 'Person',
  //       '@id': 'https://watchonlinemovies.vercel.appauthor/watchmoviesonline/',
  //       name: 'Dr Trailer',
  //       url: 'https://watchonlinemovies.vercel.appauthor/watchmoviesonline/',
  //       image: {
  //         '@type': 'ImageObject',
  //         '@id': 'https://gravatar.com/drtrailer2022',
  //         url: 'https://gravatar.com/drtrailer2022',
  //         caption: 'Dr Trailer',
  //         inLanguage: 'en-US'
  //       },
  //       sameAs: ['https://watchonlinemovies.vercel.app']
  //     },
  //     {
  //       '@type': 'Article',
  //       '@id': `/ #article`,
  //       headline: ` {details?.original_title}`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       articleSection: 'Movie',
  //       author: {
  //         '@id': 'https://watchonlinemovies.vercel.appauthor/watchmoviesonline/'
  //       },
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       description: ` Watch Online Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!`,
  //       image: {getImagePath(details?.backdrop_path)},
  //       name: `{details?.original_title}`,
  //       isPartOf: {
  //         '@id': `/#webpage`
  //       },
  //       inLanguage: 'en-US',
  //       mainEntityOfPage: {
  //         '@id': `/ #webpage`
  //       }
  //     },
  //     {
  //       '@type': 'BlogPosting',
  //       '@id': `/#blogPost`,
  //       headline: `{details?.original_title}`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       articleSection: 'Movie',
  //       author: {
  //         '@id': 'https://watchonlinemovies.vercel.appauthor/watchmoviesonline/'
  //       },
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       description: ` Watch Online Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!`,
  //       image: {getImagePath(details?.backdrop_path)},
  //       name: ``,
  //       '@id': `/#richSnippet`,
  //       isPartOf: {
  //         '@id': `/ #webpage`
  //       },
  //       inLanguage: 'en-US',
  //       mainEntityOfPage: {
  //         '@id': `/ #webpage`
  //       }
  //     }
  //   ]
  // })

  const ldJsonData = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
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
        urlTemplate: '',
      },
    },
    locationCreated: {
      '@type': 'Place',
      name: details?.country,
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Watch Online Movies™',
      logo: {
        '@type': 'ImageObject',
        url: 'https://watchonlinemovies.vercel.appog_image.jpg', // Typo in URL, should be corrected
      },
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform'],
    },
  };
  
 
  return (
    <div>
     {/* <meta
          name='keywords'
          content={getImagePath(details?.keywords)}
        /> */}
          {/* <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          /> */}
        <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
      />
           {/* <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          /> */}

       
      <Script src='../../../propler/ads.js' defer />
      <div className='px-10 '>
        <div className='py-10 flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group' >
            <Image
              src={getImagePath(details?.poster_path)}
              alt={details?.title}
              width={1920}
              height={1080}
              className='w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500' 
            />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col gap-2'>
            <h2 className='text-2xl font-semibold underline decoration-[1px]' style={{ color: '#000', textShadow: '1px 1px 1px #000' }}>
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
              <span className='text-black font-bold'>
                {details.vote_count}
              </span>
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
        <VideoPlayer videos={videos} />
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
