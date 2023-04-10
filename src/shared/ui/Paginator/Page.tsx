import { ComponentPropsWithoutRef } from 'react';

type PageProps = {
  page: number;
  currentPage: number;
} & ComponentPropsWithoutRef<'button'>;

export const Page = ({ page, currentPage, ...restProps }: PageProps) => (
  <button
    className={`px-4 py-2 border-t border-t-neutral-900 transition-colors dark:border-t-neutral-100 hover:border-t-pink-900 hover:dark:border-t-pink-100 ${
      page === currentPage ? 'text-pink-900 dark:text-pink-100 border-t-pink-900 dark:border-t-pink-100' : ''
    }`}
    disabled={page === currentPage}
    {...restProps}
  >
    {page}
  </button>
);
