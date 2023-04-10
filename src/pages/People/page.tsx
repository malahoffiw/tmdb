import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SelectPage, SearchBar, useSearchQuery } from 'features';
import { usePeopleActions } from 'entities/person';
import { IMAGE_URL } from 'shared/api';
import { useAppSelector } from 'shared/lib';
import { Heading, List, Container, NotFoundPage, LoadingPage } from 'shared/ui';

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
    <Container.Full>
      <Container.Header>
        <Heading>People</Heading>
        <SearchBar.People query={query} debouncedQuery={debouncedQuery} handleSearch={handleSearch} />
      </Container.Header>
      {peopleToDisplay.length === 0 && <NotFoundPage item="People" />}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <List.Vertical>
          {peopleToDisplay.map((person) => (
            <Link key={person.id} to={`/people/${person.id}`}>
              <List.Card title={person.name} imageSrc={`${IMAGE_URL}${person.imagePath}`} key={person.id} />
            </Link>
          ))}
        </List.Vertical>
      )}
      {debouncedQuery.length === 0 && !isLoading && <SelectPage type="people" />}
    </Container.Full>
  );
};
