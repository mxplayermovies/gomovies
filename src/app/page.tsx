import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import Script from 'next/script';
import ShareButtons from '@/components/ShareButtons';
import { getImagePath } from '@/lib/getImagePath'

import {
  getMovieDetails,
} from '@/lib/getMovies'

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

  const details = await getMovieDetails
  const ogImageUrl = details?.image?.url;
 
  return (
    <main>
      <title> Watch Online Movies™ - For Movies & TV Show. </title>
       <meta
          property='og:image'
          content='https://watchonlinemovies.vercel.app/og_image.jpg'
        />
        <Script src='../../propler/ads.js' defer />
      <CaroselBanner />
      <div className="flex flex-col space-y-2">
      <div className='container1'  style={{
          marginTop: '30px',
         
          justifyContent: 'center'
        }}>
        <ShareButtons
        title="Watch Online Movies™"
        description="For Movies & TV Show "
        // shareMessage={shareMessage}
        image={getImagePath(details?.backdrop_path)}
      />
         </div>
        <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topRatedMovies} title="Top Rated" />
        <MovieContainer movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
