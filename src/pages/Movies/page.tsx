import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SelectFilter, SelectPage, SearchBar, useSearchQuery } from 'features';
import { useMoviesActions } from 'entities/movie';
import { IMAGE_URL } from 'shared/api';
import { useAppSelector } from 'shared/lib';
import { Heading, List, Container, LoadingPage, NotFoundPage, ErrorPage } from 'shared/ui';

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
      {isLoading ? (
        <LoadingPage />
      ) : (
        <List.Vertical>
          {moviesToDisplay.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <List.Card title={movie.title} imageSrc={`${IMAGE_URL}${movie.posterPath}`} key={movie.id} />
            </Link>
          ))}
        </List.Vertical>
      )}
      {debouncedQuery.length === 0 && !isLoading && <SelectPage type="movies" />}
    </Container.Full>
  );
};
