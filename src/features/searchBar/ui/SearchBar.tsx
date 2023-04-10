import { ChangeEvent, useEffect } from 'react';

import { useMoviesActions } from 'entities/movie';
import { usePeopleActions } from 'entities/person';
import { Search } from 'shared/ui';

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

  return <Search value={query} onChange={handleSearch} />;
};

export const People = ({ query, debouncedQuery, handleSearch }: SearchBarProps) => {
  const { getQueryPeople } = usePeopleActions();
  useEffect(() => {
    if (debouncedQuery) {
      getQueryPeople(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <Search value={query} onChange={handleSearch} />;
};
