import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import Script from 'next/script';



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

 
  return (
    <main>
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
