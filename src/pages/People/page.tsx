import React, { useEffect } from 'react';

import { SelectPage, SearchBar, useSearchQuery, Elements } from 'features';
import { usePeopleActions } from 'entities/person';
import { useAppSelector } from 'shared/lib';
import { Heading, Container, NotFoundPage, LoadingPage, ErrorPage } from 'shared/ui';

export const People = () => {
  const { people, queryPeople, isLoading, error, page } = useAppSelector((state) => state.people);
  const { getPeople } = usePeopleActions();

  const { query, debouncedQuery, handleSearch } = useSearchQuery();

  useEffect(() => {
    getPeople(page);
  }, [page]);

  if (error) {
    return <ErrorPage />;
  }

  const peopleToDisplay = debouncedQuery.length === 0 ? people : queryPeople;
  return (
    <Container.Full>
      <Container.Header>
        <Heading>People</Heading>
        <SearchBar.People query={query} debouncedQuery={debouncedQuery} handleSearch={handleSearch} />
      </Container.Header>
      {peopleToDisplay.length === 0 && <NotFoundPage item="People" />}
      {isLoading ? <LoadingPage /> : <Elements.Table items={peopleToDisplay} />}
      {debouncedQuery.length === 0 && !isLoading && <SelectPage type="people" />}
    </Container.Full>
  );
};
