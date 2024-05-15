import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import Script from 'next/script';
import ShareButtons from '@/components/ShareButtons';



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

  const title = 'Watch Online Movies™ - For Movies & TV Show.';
  const description = 'Watch free Movie, & TV shows online on any device. We offer streaming on any Platform. Watch now !!!';
  const image = 'https://watchonlinemovies.vercel.app/og_image.jpg';

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
      <ShareButtons title={title} description={description} image={image} />
        <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topRatedMovies} title="Top Rated" />
        <MovieContainer movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
