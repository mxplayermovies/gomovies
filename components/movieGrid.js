import Link from 'next/link';
import movies from '../data/movie-details.json';

const movieGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <a>
            <div className="relative">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-2">
                <h3 className="text-white font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.genre}</p>
                <p className="text-gray-400 text-sm">{movie.year}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default movieGrid;
