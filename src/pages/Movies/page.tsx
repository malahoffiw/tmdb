import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMoviesActions } from 'entities/movie/lib/hooks/useMoviesActions';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { ListCard, VerticalList, Loader } from 'shared/ui';
import { IMAGE_URL } from 'shared/api/setup';
import { SelectFilter } from '../../features/selectFilter';
import { SelectPage } from '../../features/selectPage';
import { SearchBar, useSearchQuery } from '../../features/searchBar';

export const Movies = () => {
  const { movies, queryMovies, isLoading, error, page, movieType } = useAppSelector((state) => state.movies);
  const { getMovies } = useMoviesActions();

  const { query, debouncedQuery, handleSearch } = useSearchQuery();

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

  const moviesToDisplay = debouncedQuery.length === 0 ? movies : queryMovies;
  return (
    <div className="flex flex-col gap-6 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-pink-900 dark:text-pink-100 sm:text-xl">Movies</h1>
        <SearchBar.Movies query={query} debouncedQuery={debouncedQuery} handleSearch={handleSearch} />
      </div>
      {debouncedQuery.length === 0 && <SelectFilter />}
      {moviesToDisplay.length === 0 && (
        <div className="w-full h-80 text-center grid place-items-center">
          <p>Movies not found</p>
        </div>
      )}
      {isLoading ? (
        <div className="w-full h-80 grid place-items-center">
          <Loader />
        </div>
      ) : (
        <VerticalList>
          {moviesToDisplay.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <ListCard title={movie.title} imageSrc={`${IMAGE_URL}${movie.posterPath}`} key={movie.id} />
            </Link>
          ))}
        </VerticalList>
      )}
      {debouncedQuery.length === 0 && <SelectPage type="movies" />}
    </div>
  );
};
