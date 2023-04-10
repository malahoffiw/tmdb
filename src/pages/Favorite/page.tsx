import { MovieShort } from '../../entities/movie/model/types';
import { MdMovieCreation } from 'react-icons/md';
import { IMAGE_URL } from 'shared/api/setup';
import { FavoriteCard, FavoriteList, Loader } from 'shared/ui';
import { Link } from 'react-router-dom';
import { MouseEvent, useEffect, useState } from 'react';

export const Favorite = () => {
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleStarClick = (id: number) => (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              favorite: !movie.favorite,
            }
          : movie
      )
    );

    const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    if (favorites.find((item: MovieShort) => item.id === id)) {
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites.filter((item: MovieShort) => item.id !== id)));
    } else {
      localStorage.setItem('favoriteMovies', JSON.stringify([movies.find((item) => item.id === id), ...favorites]));
    }
  };

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favoriteMovies') || '[]').map(
      (item: Omit<MovieShort, 'favorite'>) => ({
        ...item,
        favorite: true,
      })
    );
    setIsLoading(false);
    setMovies(favorite);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto mt-16 px-6 text-neutral-900 dark:text-neutral-100 grid place-items-center h-80">
        <Loader />
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="container mx-auto mt-16 px-6 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-pink-900 dark:text-pink-100">Favorite</h1>
        <MdMovieCreation className="mt-16 mx-auto text-neutral-600 dark:text-neutral-400" size={32} />
        <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm">Nothing here yet</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-16 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="my-4 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">Favorite</h1>
      <FavoriteList>
        {movies.map((movie: MovieShort) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <FavoriteCard
              title={movie.title}
              imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''}
              isFavorite={movie.favorite}
              onClick={handleStarClick(movie.id)}
            />
          </Link>
        ))}
      </FavoriteList>
    </div>
  );
};
