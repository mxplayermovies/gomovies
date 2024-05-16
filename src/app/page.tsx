import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import Script from 'next/script';
import React from 'react';


import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();


    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = 'react-share-kit - Social Share Buttons';
    const shareDescription = 'Integrate social share buttons using react-share-kit.';

  return (
    <main>
      <title> Watch Online Movies™ - For Movies & TV Show. </title>
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
      <meta
        name='google-site-verification'
        content='WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg'
      />
       <meta
          property='og:image'
          content='https://watchonlinemovies.vercel.app/og_image.jpg'
        />
        <Script src='../../propler/ads.js' defer />
      <CaroselBanner />
      <div className="flex flex-col space-y-2">
   
        <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topRatedMovies} title="Top Rated" />
        <MovieContainer movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
