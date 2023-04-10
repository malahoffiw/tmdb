import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { ListCard, VerticalList, Loader } from 'shared/ui';
import { IMAGE_URL } from 'shared/api/setup';
import { SelectPage } from '../../features/selectPage';
import { usePeopleActions } from '../../entities/person/lib/hooks/usePeopleActions';
import { SearchBar, useSearchQuery } from '../../features/searchBar';

export const People = () => {
  const { people, queryPeople, isLoading, error, page } = useAppSelector((state) => state.people);
  const { getPeople } = usePeopleActions();

  const { query, debouncedQuery, handleSearch } = useSearchQuery();

  useEffect(() => {
    getPeople(page);
  }, [page]);

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

  const peopleToDisplay = debouncedQuery.length === 0 ? people : queryPeople;
  return (
    <div className="flex flex-col gap-6 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-pink-900 dark:text-pink-100 sm:text-xl">People</h1>
        <SearchBar.People query={query} debouncedQuery={debouncedQuery} handleSearch={handleSearch} />
      </div>
      {peopleToDisplay.length === 0 && (
        <div className="w-full h-80 text-center grid place-items-center">
          <p>People not found</p>
        </div>
      )}
      {isLoading ? (
        <div className="w-full h-80 grid place-items-center">
          <Loader />
        </div>
      ) : (
        <VerticalList>
          {peopleToDisplay.map((person) => (
            <Link key={person.id} to={`/people/${person.id}`}>
              <ListCard title={person.name} imageSrc={`${IMAGE_URL}${person.imagePath}`} key={person.id} />
            </Link>
          ))}
        </VerticalList>
      )}
      {debouncedQuery.length === 0 && <SelectPage type="people" />}
    </div>
  );
};
