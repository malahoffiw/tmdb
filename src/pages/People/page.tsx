import React, { useEffect } from 'react';

import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { ListCard, VerticalList, Loader } from 'shared/ui';
import { IMAGE_URL } from 'shared/api/setup';
import { SelectPage } from '../../features/selectPage';
import { Link } from 'react-router-dom';
import { usePeopleActions } from '../../entities/person/lib/hooks/usePeopleActions';

export const People = () => {
  const { people, isLoading, error, page } = useAppSelector((state) => state.people);
  const { getPeople } = usePeopleActions();

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

  if (isLoading) {
    return (
      <div className="w-full h-80 grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-pink-900 dark:text-pink-100 sm:text-xl">People</h1>
      <VerticalList>
        {people.map((person) => (
          <Link key={person.id} to={`/people/${person.id}`}>
            <ListCard title={person.name} imageSrc={`${IMAGE_URL}${person.imagePath}`} key={person.id} />
          </Link>
        ))}
      </VerticalList>
      <SelectPage type="people" />
    </div>
  );
};
