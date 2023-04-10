import React, { useEffect } from 'react';

import { getMovies } from 'entities/movie/model/actionCreators/getMovies';
import { useMoviesActions } from 'entities/movie/lib/hooks/useMoviesActions';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { ListCard, VerticalList, Loader } from 'shared/ui';
import { IMAGE_URL } from 'shared/api/setup';
import { SelectFilter } from '../../features/selectFilter';
import { SelectPage } from '../../features/selectPage';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const { movies, isLoading, error, page, movieType } = useAppSelector((state) => state.movies);
  const { getMovies } = useMoviesActions();

  useEffect(() => {
    getMovies(page, movieType);
  }, [page, movieType]);

  if (error) {
    return (
      <div className="w-full h-80 text-center grid place-items-center">
        <div>
          <p>Something went wrong</p>
          <p className="text-xs">See console for details</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-80 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-pink-900 dark:text-pink-100 sm:text-xl">Movies</h1>
      <SelectFilter />
      <VerticalList>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <ListCard title={movie.title} imageSrc={`${IMAGE_URL}${movie.posterPath}`} key={movie.id} />
          </Link>
        ))}
      </VerticalList>
      <SelectPage type="movies" />
    </div>
  );
};
