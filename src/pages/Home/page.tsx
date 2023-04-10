import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMoviesActions } from 'entities/movie';
import { usePeopleActions } from 'entities/person';
import { useAppSelector } from 'shared/lib';
import { IMAGE_URL } from 'shared/api';
import { Heading, List, Container, ErrorPage, LoadingPage } from 'shared/ui';

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
          <List.Horizontal>
            {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <List.Card title={movie.title} imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''} />
              </Link>
            ))}
          </List.Horizontal>
        </>
      )}
      {people.length > 0 && (
        <>
          <p className="mt-4">Currently in spotlight</p>
          <List.Horizontal>
            {people.map((person) => (
              <Link to={`/people/${person.id}`} key={person.id}>
                <List.Card title={person.name} imageSrc={person.imagePath ? `${IMAGE_URL}${person.imagePath}` : ''} />
              </Link>
            ))}
          </List.Horizontal>
        </>
      )}
    </Container.Full>
  );
};
