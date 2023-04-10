import { useCallback, useEffect, useRef, useState } from 'react';

import { useActions } from '../../../entities/movie/lib';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { getPagesForPagination } from '../lib/getPagesForPagination';
import { Paginator } from '../../../shared/ui/Paginator/Paginator';
import { ArrowBtn } from '../../../shared/ui/Paginator/ArrowBtn';
import { PagesBase, PagesXs } from '../../../shared/ui/Paginator/Pages';
import { Page } from '../../../shared/ui/Paginator/Page';
import { Dots } from '../../../shared/ui/Paginator/Dots';

export const SelectPage = () => {
  const windowWidth = useRef(window.innerWidth);
  const { page, totalPages } = useAppSelector((state) => state.movies);
  const { setMoviesPage } = useActions();
  const [pagesForPagination, setPagesForPagination] = useState<number[]>([]);

  const handleNextPage = useCallback(() => setMoviesPage(page + 1), []);
  const handlePrevPage = useCallback(() => setMoviesPage(page - 1), []);

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
            return <Page key={p} page={p} currentPage={page} onClick={() => setMoviesPage(p)} />;
          })}
        </PagesBase>
      )}
      <ArrowBtn side="right" onClick={handleNextPage} disabled={page >= totalPages} />
    </Paginator>
  );
};
