import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { IMAGE_URL } from '../../../shared/api/setup';
import { useExactPerson } from '../../../entities/person/lib/hooks/useExactPerson';
import { HorizontalList, ListCard, Loader } from '../../../shared/ui';
import { RxDotFilled } from 'react-icons/rx';

dayjs.extend(relativeTime);

export const ExactPerson = () => {
  const { id } = useParams();
  if (!id) throw new Error('Person not found');

  const { person, isLoading, error } = useExactPerson(+id);

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

  if (!person) throw new Error('Person not found');
  const hasBioBlock = () => person.birthday.length > 0 || person.deathday.length > 0 || person.bio.length > 0;

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[minmax(400px,_1fr)_minmax(240px,_300px)] gap-x-12 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <div className="row-start-2 md:row-start-1">
        <div className="flex flex-col items-start mb-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="mt-4 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">{person.name}</h1>
            <p className="my-2 text-sm">{person.placeOfBirth}</p>
          </div>
        </div>
        {hasBioBlock() && (
          <div className="flex flex-col gap-4 px-3 py-4 rounded bg-neutral-300 dark:bg-neutral-700">
            {person.birthday.length > 0 && (
              <label className="flex flex-col gap-1">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Date of birth</p>
                <div className="flex items-center gap-1">
                  {dayjs(person.birthday).format('MMMM Do, YYYY')}
                  {!person.deathday.length && (
                    <div className="flex items-center gap-1">
                      <RxDotFilled />
                      {dayjs(person.birthday).fromNow(true)}
                    </div>
                  )}
                </div>
              </label>
            )}
            {person.deathday.length > 0 && (
              <label className="flex flex-col gap-1">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Date of death</p>
                <div className="flex items-center gap-1">
                  {dayjs(person.deathday).format('MMMM Do, YYYY')}
                  <RxDotFilled />
                  {dayjs(person.birthday).from(dayjs(person.deathday), true)}
                </div>
              </label>
            )}
            {person.bio.length > 0 && (
              <label className="flex flex-col gap-1">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Biography</p>
                <p>{person.bio}</p>
              </label>
            )}
          </div>
        )}
        {person.credits.length > 0 && (
          <>
            <p className="mt-6 mb-2">Movies</p>
            <HorizontalList>
              {person.credits.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <ListCard title={movie.title} imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''} />
                </Link>
              ))}
            </HorizontalList>
          </>
        )}
      </div>
      <img
        className="md:sticky md:top-16 mb-4 mx-auto max-h-[500px] rounded drop-shadow-xl"
        src={person.imagePath ? `${IMAGE_URL}${person.imagePath}` : ''}
        alt={`${person.name} poster`}
      />
    </div>
  );
};
