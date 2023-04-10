import { PropsWithChildren } from 'react';

export const PagesBase = ({ children }: PropsWithChildren) => (
  <div className="hidden justify-center items-center gap-4 sm:flex">{children}</div>
);

type PagesXsProps = {
  page: number;
  totalPages: number;
};

export const PagesXs = ({ page, totalPages }: PagesXsProps) => (
  <div className="mx-auto px-4 py-2 border-t border-t-neutral-900 dark:border-t-neutral-100">
    <p>{`${page} of ${totalPages}`}</p>
  </div>
);
