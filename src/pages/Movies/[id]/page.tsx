import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { HorizontalList, ListCard, Loader } from '../../../shared/ui';
import { useExactMovie } from '../../../entities/movie/lib/hooks/useExactMovie';
import { IMAGE_URL } from '../../../shared/api';

dayjs.extend(advancedFormat);

export const ExactMovie = () => {
  const { id } = useParams();
  if (!id) throw new Error('Movie not found');

  const { movie, isLoading, error } = useExactMovie(+id);

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

  if (!movie) throw new Error('Movie not found');

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[minmax(400px,_1fr)_minmax(240px,_300px)] gap-x-12 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <div className="row-start-2 md:row-start-1">
        <h1 className="mt-4 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">{movie.title}</h1>
        <p className="my-2 text-sm">{dayjs(movie.releaseDate).format('MMMM Do, YYYY')}</p>
        <div className="flex flex-col gap-4 px-3 py-4 rounded bg-neutral-300 dark:bg-neutral-700">
          <label className="flex flex-col gap-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tagline</p>
            <p className="italic">"{movie.tagline}"</p>
          </label>
          <label className="flex flex-col gap-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Synopsis</p>
            <p>{movie.description}</p>
          </label>
          <div className="flex gap-2 flex-wrap">
            {movie.genres.map((genre) => (
              <p className="px-2 py-1 border rounded border-pink-900 dark:border-pink-100" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
        </div>
        <p className="mt-6 mb-2">Similar movies</p>
        <HorizontalList>
          {movie.similarMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <ListCard title={movie.title} imageSrc={`${IMAGE_URL}${movie.posterPath}`} />
            </Link>
          ))}
        </HorizontalList>
        <p className="mt-6 mb-2">Starring</p>
        <HorizontalList>
          {movie.cast.map((person) => (
            <ListCard title={person.name} imageSrc={`${IMAGE_URL}${person.imagePath}`} key={person.id} />
          ))}
        </HorizontalList>
      </div>
      <img
        className="md:sticky md:top-16 rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        src={`${IMAGE_URL}${movie.posterPath}`}
        alt={`${movie.title} poster`}
      />
    </div>
  );
};
