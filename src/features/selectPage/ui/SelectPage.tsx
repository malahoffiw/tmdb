import { useCallback, useEffect, useRef, useState } from 'react';

import { useMoviesActions } from '../../../entities/movie/lib';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { getPagesForPagination } from '../lib/getPagesForPagination';
import { Paginator } from '../../../shared/ui/Paginator/Paginator';
import { ArrowBtn } from '../../../shared/ui/Paginator/ArrowBtn';
import { PagesBase, PagesXs } from '../../../shared/ui/Paginator/Pages';
import { Page } from '../../../shared/ui/Paginator/Page';
import { Dots } from '../../../shared/ui/Paginator/Dots';
import { usePeopleActions } from '../../../entities/person/lib/hooks/usePeopleActions';

export const SelectPage = ({ type }: { type: 'movies' | 'people' }) => {
  const windowWidth = useRef(window.innerWidth);
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
      {windowWidth.current < 640 ? (
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
