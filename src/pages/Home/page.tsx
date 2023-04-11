import { useEffect } from 'react';

import { Elements } from 'features';
import { useMoviesActions } from 'entities/movie';
import { usePeopleActions } from 'entities/person';
import { useAppSelector } from 'shared/lib';
import { Heading, Container, ErrorPage, LoadingPage } from 'shared/ui';

export const Home = () => {
  const { movies, isLoading: isLoadingMovies, error: errorMovies } = useAppSelector((state) => state.movies);
  const { people, isLoading: isLoadingPeople, error: errorPeople } = useAppSelector((state) => state.people);
  const { getMovies } = useMoviesActions();
  const { getPeople } = usePeopleActions();

  useEffect(() => {
    getMovies(1, 'now_playing');
    getPeople(1);
  }, []);

  if (errorMovies || errorPeople) {
    return <ErrorPage />;
  }

  if (isLoadingMovies || isLoadingPeople) {
    return <LoadingPage />;
  }

  return (
    <Container.Full>
      <Heading>Home</Heading>
      {movies.length > 0 && (
        <>
          <p>Now in cinemas</p>
          <Elements.Slider items={movies} />
        </>
      )}
      {people.length > 0 && (
        <>
          <p className="mt-4">Currently in spotlight</p>
          <Elements.Slider items={people} />
        </>
      )}
    </Container.Full>
  );
};
