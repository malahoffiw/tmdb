import { useCallback, useEffect, useState } from 'react';

import { getPagesForPagination } from '../lib/getPagesForPagination';
import { useMoviesActions } from 'entities/movie';
import { usePeopleActions } from 'entities/person';
import { useWindowWidth, useAppSelector } from 'shared/lib';
import { Dots, Page, Paginator, ArrowBtn, PagesBase, PagesXs } from 'shared/ui';

export const SelectPage = ({ type }: { type: 'movies' | 'people' }) => {
  const { isScreenSm } = useWindowWidth();
  const { page, totalPages } = useAppSelector((state) => state[type]);
  const { setMoviesPage } = useMoviesActions();
  const { setPeoplePage } = usePeopleActions();
  const [pagesForPagination, setPagesForPagination] = useState<number[]>([]);

  const handleNextPage = useCallback(() => {
    if (type === 'movies') setMoviesPage(page + 1);
    else setPeoplePage(page + 1);
  }, [page, setMoviesPage, setPeoplePage, type]);

  const handlePrevPage = useCallback(() => {
    if (type === 'movies') setMoviesPage(page - 1);
    else setPeoplePage(page - 1);
  }, [page, setMoviesPage, setPeoplePage, type]);

  const handleCustomPage = useCallback(
    (page: number) => () => {
      if (type === 'movies') setMoviesPage(page);
      else setPeoplePage(page);
    },
    [setMoviesPage, setPeoplePage, type]
  );

  useEffect(() => {
    setPagesForPagination(getPagesForPagination(page, totalPages));
  }, [page, totalPages]);

  return (
    <Paginator>
      <ArrowBtn side="left" onClick={handlePrevPage} disabled={page <= 1} />
      {!isScreenSm ? (
        <PagesXs page={page} totalPages={totalPages} />
      ) : (
        <PagesBase>
          {pagesForPagination.map((p, i) => {
            if (p === -1) {
              return <Dots key={`dots${i}`} />;
            }
            return <Page key={p} page={p} currentPage={page} onClick={handleCustomPage(p)} />;
          })}
        </PagesBase>
      )}
      <ArrowBtn side="right" onClick={handleNextPage} disabled={page >= totalPages} />
    </Paginator>
  );
};
