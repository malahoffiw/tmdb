import { useEffect } from 'react';

import { SelectFilter, SelectPage, SearchBar, useSearchQuery, Elements } from 'features';
import { useMoviesActions } from 'entities/movie';
import { useAppSelector } from 'shared/lib';
import { Heading, Container, LoadingPage, NotFoundPage, ErrorPage } from 'shared/ui';

export const Movies = () => {
  const { movies, queryMovies, isLoading, error, page, movieType } = useAppSelector((state) => state.movies);
  const { query, debouncedQuery, handleSearch } = useSearchQuery();

  const { getMovies } = useMoviesActions();
  useEffect(() => {
    getMovies(page, movieType);
  }, [page, movieType]);

  if (error) {
    return <ErrorPage />;
  }

  const moviesToDisplay = debouncedQuery.length === 0 ? movies : queryMovies;
  return (
    <Container.Full>
      <Container.Header>
        <Heading>Movies</Heading>
        <SearchBar.Movies query={query} debouncedQuery={debouncedQuery} handleSearch={handleSearch} />
      </Container.Header>
      {debouncedQuery.length === 0 && <SelectFilter />}
      {moviesToDisplay.length === 0 && <NotFoundPage item="Movies" />}
      {isLoading ? <LoadingPage /> : <Elements.Table items={moviesToDisplay} />}
      {debouncedQuery.length === 0 && !isLoading && <SelectPage type="movies" />}
    </Container.Full>
  );
};
