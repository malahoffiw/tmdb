import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { BsBoxArrowUpRight, BsStar, BsStarFill } from 'react-icons/bs';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { HorizontalList, ListCard, Loader } from '../../../shared/ui';
import { useExactMovie } from '../../../entities/movie/lib/hooks/useExactMovie';
import { IMAGE_URL } from '../../../shared/api';
import { useActions } from '../../../entities/movie/lib';

dayjs.extend(advancedFormat);

const animationKeyframe = (el: Element, action: 'add' | 'remove' | 'remain') => {
  let keyframes: Keyframe[] = [];

  if (action === 'add') {
    keyframes = [
      { transform: 'scale(1)', opacity: 0 },
      { transform: 'scaleX(1.5)', opacity: 1, offset: 0.75 },
      { transform: 'scaleX(1)', opacity: 1 },
    ];
  }

  if (action === 'remove') {
    keyframes = [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(1.5)', opacity: 1, offset: 0.33 },
      { transform: 'scale(0.5)', opacity: 0 },
    ];
  }

  return new KeyframeEffect(el, keyframes, {
    duration: 200,
    easing: 'ease-in-out',
  });
};

export const ExactMovie = () => {
  const { id } = useParams();
  if (!id) throw new Error('Movie not found');

  const [animationParent] = useAutoAnimate<HTMLButtonElement>(animationKeyframe);

  const { movie, isLoading, error } = useExactMovie(+id);
  const { toggleMovieFavorite } = useActions();

  const handleStarClick = () => {
    if (!movie) {
      return;
    }
    toggleMovieFavorite(movie);
  };

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
        <div className="flex flex-col items-start mb-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="mt-4 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">{movie.title}</h1>
            <p className="my-2 text-sm">{dayjs(movie.releaseDate).format('MMMM Do, YYYY')}</p>
          </div>
          <a
            href={`https://www.imdb.com/title/${movie.imdbId}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
          >
            <p className="text-sm">IMDB</p>
            <BsBoxArrowUpRight />
          </a>
        </div>
        <div className="flex flex-col gap-4 px-3 py-4 rounded bg-neutral-300 dark:bg-neutral-700">
          {movie.tagline.length > 0 && (
            <label className="flex flex-col gap-1">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Tagline</p>
              <p className="italic">"{movie.tagline}"</p>
            </label>
          )}
          {movie.description.length > 0 && (
            <label className="flex flex-col gap-1">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Synopsis</p>
              <p>{movie.description}</p>
            </label>
          )}
          {movie.genres.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((genre) => (
                <p className="px-2 py-1 border rounded border-pink-900 dark:border-pink-100" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
          )}
        </div>
        {movie.similarMovies.length > 0 && (
          <>
            <p className="mt-6 mb-2">Similar movies</p>
            <HorizontalList>
              {movie.similarMovies.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <ListCard title={movie.title} imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''} />
                </Link>
              ))}
            </HorizontalList>
          </>
        )}
        {movie.cast.length > 0 && (
          <>
            <p className="mt-6 mb-2">Starring</p>
            <HorizontalList>
              {movie.cast.map((person) => (
                <ListCard
                  title={person.name}
                  imageSrc={person.imagePath ? `${IMAGE_URL}${person.imagePath}` : ''}
                  key={person.id}
                />
              ))}
            </HorizontalList>
          </>
        )}
      </div>
      <div className="md:sticky md:top-16 max-h-[550px]">
        <img
          className="mb-4 max-h-[500px] rounded drop-shadow-xl"
          src={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''}
          alt={`${movie.title} poster`}
        />
        <button
          ref={animationParent}
          className="group mx-auto flex items-center gap-2 px-4 py-2 rounded bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
          onClick={handleStarClick}
        >
          <p>Favorite</p>
          {movie.favorite ? (
            <BsStarFill className="cursor-pointer text-yellow" size={20} />
          ) : (
            <BsStar className="cursor-pointer group-hover:text-yellow transition-colors" size={20} />
          )}
        </button>
      </div>
    </div>
  );
};
