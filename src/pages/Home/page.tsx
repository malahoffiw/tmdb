import { useEffect } from 'react';

import { useMoviesActions } from '../../entities/movie/lib';
import { usePeopleActions } from '../../entities/person/lib/hooks/usePeopleActions';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector';
import { HorizontalList, ListCard, Loader } from '../../shared/ui';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../shared/api/setup';

export const Home = () => {
  const { movies, isLoading: isLoadingMovies, error: errorMovies } = useAppSelector((state) => state.movies);
  const { people, isLoading: isLoadingPeople, error: errorPeople } = useAppSelector((state) => state.people);
  const { getMovies } = useMoviesActions();
  const { getPeople } = usePeopleActions();

  useEffect(() => {
    getMovies(1, 'now_playing');
    getPeople(1);
  }, [getMovies, getPeople]);

  if (errorMovies || errorPeople) {
    return (
      <div className="w-full h-80 text-center grid place-items-center">
        <div>
          <p>Something went wrong</p>
          <p className="text-xs">See console for details</p>
        </div>
      </div>
    );
  }

  if (isLoadingMovies || isLoadingPeople) {
    return (
      <div className="w-full h-80 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-16 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="mt-4 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">Home</h1>
      {movies.length > 0 && (
        <>
          <p className="mt-6 mb-2">Now in cinemas</p>
          <HorizontalList>
            {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <ListCard title={movie.title} imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''} />
              </Link>
            ))}
          </HorizontalList>
        </>
      )}
      {people.length > 0 && (
        <>
          <p className="mt-6 mb-2">Currently in spotlight</p>
          <HorizontalList>
            {people.map((person) => (
              <Link to={`/people/${person.id}`} key={person.id}>
                <ListCard title={person.name} imageSrc={person.imagePath ? `${IMAGE_URL}${person.imagePath}` : ''} />
              </Link>
            ))}
          </HorizontalList>
        </>
      )}
    </div>
  );
};
