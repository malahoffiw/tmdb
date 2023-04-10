import { ChangeEvent, useEffect } from 'react';

import { useMoviesActions } from '../../../entities/movie/lib';
import { FiSearch } from 'react-icons/fi';
import { usePeopleActions } from '../../../entities/person/lib/hooks/usePeopleActions';

type SearchBarProps = {
  query: string;
  debouncedQuery: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Movies = ({ query, debouncedQuery, handleSearch }: SearchBarProps) => {
  const { getQueryMovies } = useMoviesActions();

  useEffect(() => {
    if (debouncedQuery) {
      getQueryMovies(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <label className="grid grid-cols-[minmax(80px,_200px)_16px] items-center px-3 py-1 rounded bg-neutral-300 dark:bg-neutral-700">
      <input
        className="outline-none px-2 py-1 text-sm text-neutral-900 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 sm:text-base"
        type="text"
        value={query}
        onChange={handleSearch}
      />
      <FiSearch />
    </label>
  );
};

export const People = ({ query, debouncedQuery, handleSearch }: SearchBarProps) => {
  const { getQueryPeople } = usePeopleActions();

  useEffect(() => {
    if (debouncedQuery) {
      getQueryPeople(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <label className="grid grid-cols-[minmax(80px,_200px)_16px] items-center px-3 py-1 rounded bg-neutral-300 dark:bg-neutral-700">
      <input
        className="outline-none px-2 py-1 text-sm text-neutral-900 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 sm:text-base"
        type="text"
        value={query}
        onChange={handleSearch}
      />
      <FiSearch />
    </label>
  );
};
